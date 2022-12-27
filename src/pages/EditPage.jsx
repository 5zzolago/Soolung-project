import React from "react";
import { useDispatch } from "react-redux";
import { __updateBoard } from "../store/modules/boardSlice";
import useForm from "../hooks/useForm";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  title: "",
  body: "",
};

const EditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [editValue, handleEditValueChange] = useForm(initialState);

  const handleBoardUpdate = () => {
    const editObj = {
      username: editValue.username,
      title: editValue.title,
      password: editValue.password,
      body: editValue.body,
    };
    dispatch(__updateBoard([state, editObj]));
    navigate(`/board/${state}`);
  };

  return (
    <div>
      <form>
        <StyledInputName
          type="text"
          placeholder="이름"
          name="username"
          value={editValue.username}
          onChange={handleEditValueChange}
        ></StyledInputName>
        <StyledInputPassword
          type="password"
          placeholder="비밀번호"
          name="password"
          value={editValue.password}
          onChange={handleEditValueChange}
        ></StyledInputPassword>
        <StyledInputTitle
          type="text"
          placeholder="제목을 입력해주세요"
          name="title"
          value={editValue.title}
          onChange={handleEditValueChange}
        ></StyledInputTitle>
        <StyledContents
          type="text"
          placeholder="이야기를 넣어주세요"
          name="body"
          value={editValue.body}
          onChange={handleEditValueChange}
        ></StyledContents>
        <div>
          <button onClick={handleBoardUpdate}>수정</button>
        </div>
        <div>
          <input style={fileStyle} type="file"></input>
        </div>
        <div>
          <button type="submit" style={addStyle}>
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

const StyledInputName = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 3px;
  padding: 20px;
`;
const StyledInputPassword = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
`;
const StyledInputTitle = styled.input`
  width: 1000px;
  height: 60px;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 20px;
`;
const StyledContents = styled.textarea`
  width: 1000px;
  height: 602px;
  outline: 1px solid black;
  padding: 20px;
`;
const fileStyle = {
  marginLeft: "820px",
};
const addStyle = {
  marginLeft: "820px",
};

export default EditPage;
