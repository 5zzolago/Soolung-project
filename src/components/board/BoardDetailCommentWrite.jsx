import React from "react";
import styled from "styled-components";
import { useState } from "react";
import BoardDetailCommentListBox from "./BoardDetailCommentListBox";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { TextField } from "@mui/material";
import Button from "../button/Button";
import { __BoardDetailComment } from "../../store/modules/boardDetailCommentSlice";

const BoardDetailCommentWrite = () => {
  const [nickname, setNickname] = useState("");
  const [commentPassword, setcommentPassword] = useState("");
  const [onBoardComment, setOnBoardComment] = useState("");

  const dispatch = useDispatch();
  const handleNicknameInputChange = (event) => {
    setNickname(event.target.value);
  };
  const handlePasswordInputChange = (event) => {
    setcommentPassword(event.target.value);
  };
  const handleCommentInputChange = (event) => {
    setOnBoardComment(event.target.value);
  };
  const onBoardFormSubmitEvent = (event) => {
    event.preventDefault();

    const newboardDetailComment = {
      id: uuidv4(),
      nickname: nickname,
      commentPassword: commentPassword,
      onBoardComment: onBoardComment,
    };

    dispatch(__BoardDetailComment(newboardDetailComment));
  };

  return (
    <BoardDetailCommentWriteListAll>
      <BoardDetailCommentWrap>
        <BoardDetailContainer>
          <BoardDetailHeadBox>
            <BoardDetailHeadText>댓글</BoardDetailHeadText>
          </BoardDetailHeadBox>
          <BoardDetailForm onSubmit={onBoardFormSubmitEvent}>
            <BoardDetailInputBox>
              <TextField
                id="username"
                name="username"
                type="text"
                label="작성자"
                variant="outlined"
                size="small"
                sx={{ width: { sm: 280 } }}
                onChange={handleNicknameInputChange}
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="비밀번호"
                variant="outlined"
                size="small"
                sx={{ width: { sm: 280 } }}
                value={commentPassword}
                onChange={handlePasswordInputChange}
              />
            </BoardDetailInputBox>
            <BoardDetailCommentBox>
              <TextField
                id="comment"
                name="comment"
                label="어떤 이야기를 나누고 싶으신가요?"
                fullWidth
                multiline
                rows={1.5}
                value={onBoardComment}
                onChange={handleCommentInputChange}
              />

              <Button type={"submit"} size={"tertiary"} text={"등록하기"} />
            </BoardDetailCommentBox>
          </BoardDetailForm>
        </BoardDetailContainer>
      </BoardDetailCommentWrap>
      <BoardDetailCommentListWrap>
        <BoardDetailCommentListBox />
      </BoardDetailCommentListWrap>
    </BoardDetailCommentWriteListAll>
  );
};

const BoardDetailCommentWriteListAll = styled.div`
  width: 100%;
`;

const BoardDetailCommentListWrap = styled.div`
  width: 100%;
`;

const BoardDetailCommentWrap = styled.div`
  width: 100%;
  padding-bottom: 5rem;
`;

const BoardDetailContainer = styled.div`
  width: 100%;
`;

const BoardDetailHeadBox = styled.div`
  width: 100%;
`;

const BoardDetailHeadText = styled.h2`
  font-weight: bold;
`;

const BoardDetailForm = styled.form`
  width: 100%;
`;

const BoardDetailInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const BoardDetailCommentBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export default BoardDetailCommentWrite;
