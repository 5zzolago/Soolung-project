import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addBoard } from "../../store/modules/boardSlice";

const Input = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBoard = {
      id: uuidv4(),
      username: name,
      password,
      title,
      contents,
      comments: 0,
      createdDate: new Date(),
    };

    dispatch(addBoard(newBoard));
    navigate("/board", { replace: true });
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentsChange = (e) => {
    setContents(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledInputName
          onChange={nameChange}
          value={name}
          placeholder="이름"
        ></StyledInputName>
        <StyledInputPassword
          value={password}
          onChange={passwordChange}
          placeholder="비밀번호"
        ></StyledInputPassword>
        <StyledInputTitle
          value={title}
          onChange={titleChange}
          placeholder="제목을 입력해주세요"
        ></StyledInputTitle>
        <StyledContents
          value={contents}
          onChange={contentsChange}
          placeholder="이야기를 넣어주세요"
        ></StyledContents>
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
export default Input;

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
