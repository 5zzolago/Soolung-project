import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addBoard } from "../../store/modules/boardSlice";
import defaultImg from "../../assets/default-img.png";
import Button from "../button/Button";
import { ButtonWrap } from "../../components/board/BoardList";

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
      body: contents,
      img: img ? img : defaultImg,
      comments: 0,
      createdDate: Date.now(),
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
    <InputWrapper>
      <form onSubmit={handleSubmit}>
        <StyledInputName
          onChange={nameChange}
          value={name}
          placeholder="이름"
        />
        <StyledInputPassword
          value={password}
          type="password"
          onChange={passwordChange}
          placeholder="비밀번호"
        />
        <StyledInputTitle
          value={title}
          onChange={titleChange}
          placeholder="제목을 입력해주세요"
        />
        <StyledContents
          value={contents}
          onChange={contentsChange}
          placeholder="이야기를 넣어주세요"
        />
        <BtnWrapper>
          <UploadFileBtn htmlFor="file">이미지 업로드하기</UploadFileBtn>
          <input name="file" id="file" style={fileStyle} type="file"></input>
        </BtnWrapper>
        <div>
          <ButtonWrap>
            <Button
              type="submit"
              size={"secondary"}
              height={"primary"}
              text={"등록하기"}
            />
          </ButtonWrap>
        </div>
      </form>
    </InputWrapper>
  );
};
export default Input;

const StyledInputName = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #ccc;
`;
const StyledInputPassword = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
`;
const StyledInputTitle = styled.input`
  width: 1000px;
  height: 60px;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;
const StyledContents = styled.textarea`
  width: 1000px;
  height: 602px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
`;

const fileStyle = {
  marginLeft: "820px",
  display: "none",
};

const InputWrapper = styled.div`
  width: 1000px;
  margin: 4rem auto 6rem;
  font-size: 1.6rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UploadFileBtn = styled.label`
  width: 140px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;
