import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __updateBoard } from "../store/modules/boardSlice";
import {
  validateUsername,
  validatePassword,
  validateComment,
} from "../utils/validate";
import useForm from "../hooks/useForm";
import Button from "../components/button/Button";
import styled from "styled-components";

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
  const [editValue, setFormValue, handleEditValueChange] =
    useForm(initialState);

  useEffect(() => {
    if (!state) return;
    setFormValue({
      username: state.username,
      title: state.title,
      body: state.body,
    });
  }, [state]);

  const handleBoardUpdate = () => {
    const isVaildUsername = validateUsername(editValue.username);
    const isVaildPassword = validatePassword(editValue.password);
    const isVaildComment = validateComment(editValue.body);

    if (!isVaildUsername) {
      alert("유저네임을 적어주세요.");
      return;
    }
    if (!isVaildPassword) {
      alert("패스워드를 입력해주세요.");
      return;
    }
    if (!isVaildComment) {
      alert("코멘트를 입력해주세요.");
      return;
    }

    if (editValue.password === state.password) {
      const editObj = {
        username: editValue.username,
        title: editValue.title,
        password: editValue.password,
        body: editValue.body,
      };

      if (window.confirm("수정 하시겠습니까?")) {
        alert("수정 되었습니다.");
        dispatch(__updateBoard([state.id, editObj]));
        navigate(`/board/${state}`);
      } else {
        alert("취소 되었습니다.");
        return;
      }
    } else {
      alert("비밀번호가 틀렸습니다.");
      return;
    }
  };

  return (
    <StyledEditPageWrap>
      <StyledEditHeadText>수정 페이지</StyledEditHeadText>
      <StyledEditPageForm>
        <StyledEditPageHeadBox>
          <StyledInputName
            type="text"
            placeholder="이름"
            name="username"
            value={editValue.username || ""}
            onChange={handleEditValueChange}
          ></StyledInputName>
          <StyledInputPassword
            type="password"
            placeholder="비밀번호"
            name="password"
            value={editValue.password || ""}
            onChange={handleEditValueChange}
          ></StyledInputPassword>
          <Button
            btnType={"checkBoardDetailEdit"}
            type="button"
            size="secondary"
            height="tertiary"
            handler={handleBoardUpdate}
            text={"등록"}
          />
        </StyledEditPageHeadBox>
        <StyledEditPageBodyBox>
          <StyledInputTitle
            type="text"
            placeholder="제목을 입력해주세요"
            name="title"
            value={editValue.title || ""}
            onChange={handleEditValueChange}
          ></StyledInputTitle>
        </StyledEditPageBodyBox>
        <StyledEditPageFooterBox>
          <StyledContents
            type="text"
            placeholder="이야기를 넣어주세요"
            name="body"
            value={editValue.body || ""}
            onChange={handleEditValueChange}
          ></StyledContents>
        </StyledEditPageFooterBox>
        <StyledEditImgInput type="file" />
      </StyledEditPageForm>
    </StyledEditPageWrap>
  );
};

const StyledEditPageWrap = styled.div`
  width: 100%;
`;

const StyledEditHeadText = styled.h1`
  margin-top: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const StyledEditPageForm = styled.form`
  width: 100%;
`;

const StyledEditPageHeadBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const StyledEditPageBodyBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

const StyledEditPageFooterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

const StyledInputName = styled.input`
  width: 35%;
  height: 3.5rem;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;
`;

const StyledInputPassword = styled.input`
  width: 35%;
  height: 3.5rem;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;
`;

const StyledInputTitle = styled.input`
  width: 85%;
  height: 3.5rem;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;
`;
const StyledContents = styled.textarea`
  width: 85%;
  height: 30rem;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;
`;

const StyledEditImgInput = styled.input`
  margin-top: 1rem;
  margin-left: 7.5%;
`;

export default EditPage;
