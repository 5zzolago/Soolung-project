import React from "react";
import styled from "styled-components";
import { useState } from "react";
import BoardDetailCommentListBox from "./BoardDetailCommentListBox";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
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
              <input
                onChange={handleNicknameInputChange}
                value={nickname}
                type="text"
                placeholder="작성자"
              />

              <input
                onChange={handlePasswordInputChange}
                value={commentPassword}
                type="text"
                placeholder="비밀번호"
              />
            </BoardDetailInputBox>
            <BoardDetailCommentBox>
              <input
                value={onBoardComment}
                onChange={handleCommentInputChange}
                type="text"
                placeholder="어떤 이야기를 나누고 싶으신가요?"
              />
              <BoardDetailCommentBtn type="submit">
                등록하기
              </BoardDetailCommentBtn>
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

const BoardDetailCommentBtn = styled.button`
  width: 15%;
  border-radius: 0.5rem;
  color: white;
  background-color: #434343;
  font-weight: bold;
  cursor: pointer;
`;
export default BoardDetailCommentWrite;