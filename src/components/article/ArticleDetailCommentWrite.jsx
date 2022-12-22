import React from "react";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import ArticleDetailComment from "./ArticleDetailComment";
import styled from "styled-components";

const ArticleDetailCommentWrite = () => {
  return (
    <ArticleDetailWrap>
      <ArticleDetailContainer>
        <ArticleDetailHeadBox>
          <ArticleDetailHeadText>댓글</ArticleDetailHeadText>
        </ArticleDetailHeadBox>
        <ArticleDetailForm>
          <ArticleDetailInputBox>
            <TextField
              id="username"
              type="text"
              label="작성자"
              variant="outlined"
              size="small"
              sx={{ width: { sm: 280 } }}
            />
            <TextField
              id="password"
              type="password"
              label="비밀번호"
              variant="outlined"
              size="small"
              sx={{ width: { sm: 280 } }}
            />
            <Rating name="simple-controlled" />
          </ArticleDetailInputBox>
          <ArticleDetailCommentBox>
            <TextField
              id="comment"
              label="어떤 이야기를 나누고 싶으신가요?"
              fullWidth
              multiline
              rows={1.5}
            />
            <ArticleDetailCommentBtn>등록하기</ArticleDetailCommentBtn>
          </ArticleDetailCommentBox>
        </ArticleDetailForm>
      </ArticleDetailContainer>
      <ArticleDetailComment />
    </ArticleDetailWrap>
  );
};

const ArticleDetailWrap = styled.div`
  width: 100%;
`;

const ArticleDetailContainer = styled.div`
  width: 100%;
`;

const ArticleDetailHeadBox = styled.div`
  width: 100%;
`;

const ArticleDetailHeadText = styled.h2`
  font-weight: bold;
`;

const ArticleDetailForm = styled.form`
  width: 100%;
`;

const ArticleDetailInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const ArticleDetailCommentBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const ArticleDetailCommentBtn = styled.button`
  width: 15%;
  border-radius: 0.5rem;
  color: white;
  background-color: #434343;
  font-weight: bold;
  cursor: pointer;
`;
export default ArticleDetailCommentWrite;
