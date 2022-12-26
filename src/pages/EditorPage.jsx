import React from "react";
import Button from "../components/button/Button";
import { ButtonWrap } from "../components/board/BoardList";

const EditorPage = () => {
  const userNameStyle = {
    width: "400px",
    height: "50px",
    borderRadius: "3px",
    padding: "20px",
  };
  const userPasswordStyle = {
    width: "400px",
    height: "50px",
    borderRadius: "4px",
    padding: "20px",
    margin: "20px",
  };
  const titleStyle = {
    width: "1000px",
    height: "60px",
    borderRadius: "4px",
    marginBottom: "20px",
    padding: "20px",
  };
  const contentsStyle = {
    width: "1000px",
    height: "602px",
    outline: "1px solid black",
    padding: "20px",
  };
  const fileStyle = {
    marginLeft: "820px",
  };
  const addStyle = {
    marginLeft: "820px",
  };
  return (
    <div>
      <div>
        <input style={userNameStyle} placeholder="작성자"></input>
        <input style={userPasswordStyle} placeholder="비밀번호"></input>
      </div>
      <div>
        <input style={titleStyle} placeholder="제목을123 입력해주세요"></input>
      </div>
      <div>
        <textarea
          style={contentsStyle}
          placeholder="어떤 이야기를 나누고 싶으신가요?"
        ></textarea>
      </div>
      <div>
        <input style={fileStyle} type="file"></input>
      </div>
      <ButtonWrap>
        <Button
          btnType={"createBoard"}
          size={"secondary"}
          height={"primary"}
          text={"등록하기"}
        />
      </ButtonWrap>
    </div>
  );
};

export default EditorPage;
