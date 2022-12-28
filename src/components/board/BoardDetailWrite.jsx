import React from "react";
import TextField from "@mui/material/TextField";

import styled from "styled-components";

const BoardDetailWrite = ({ onArticleFormSubmitEvent }) => {
  return (
    <BoardDetailWrap>
      <BoardDetailContainer>
        <BoardDetailHeadBox>
          <BoardDetailHeadText>댓글</BoardDetailHeadText>
        </BoardDetailHeadBox>
        <BoardDetailForm onSubmit={onArticleFormSubmitEvent}>
          <BoardDetailInputBox>
            <TextField
              id="username"
              name="username"
              type="text"
              label="작성자"
              variant="outlined"
              size="small"
              sx={{ width: { sm: 280 } }}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="비밀번호"
              variant="outlined"
              size="small"
              sx={{ width: { sm: 280 } }}
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
            />
            <BoardDetailCommentBtn type="submit">
              등록하기
            </BoardDetailCommentBtn>
          </BoardDetailCommentBox>
        </BoardDetailForm>
      </BoardDetailContainer>
    </BoardDetailWrap>
  );
};

const BoardDetailWrap = styled.div`
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
export default BoardDetailWrite;
