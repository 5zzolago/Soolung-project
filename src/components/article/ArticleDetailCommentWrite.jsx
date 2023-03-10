import React from "react";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import ArticleDetailComment from "./ArticleDetailComment";
import styled from "styled-components";
import Button from "../button/Button";

const ArticleDetailCommentWrite = ({
  articleDatas,
  articleEditValue,
  articleFormData,
  articleComment,
  onCommentDeleteEvent,
  onFormValueChangeEvent,
  onEditValueChangeEvent,
  onArticleFormSubmitEvent,
}) => {
  const { username, password, comment, star } = articleFormData;
  return (
    <ArticleDetailWrap>
      <ArticleDetailContainer>
        <ArticleDetailHeadBox>
          <ArticleDetailHeadText>댓글</ArticleDetailHeadText>
        </ArticleDetailHeadBox>
        <ArticleDetailForm onSubmit={onArticleFormSubmitEvent}>
          <ArticleDetailInputBox>
            <TextField
              id="username"
              name="username"
              type="text"
              label="작성자"
              variant="outlined"
              size="small"
              sx={{ width: { sm: 280 } }}
              value={username}
              onChange={onFormValueChangeEvent}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="비밀번호"
              variant="outlined"
              size="small"
              sx={{ width: { sm: 280 } }}
              value={password}
              onChange={onFormValueChangeEvent}
            />
            <Rating
              id="star"
              name="star"
              value={Number(star)}
              onChange={onFormValueChangeEvent}
            />
          </ArticleDetailInputBox>
          <ArticleDetailCommentBox>
            <TextField
              id="comment"
              name="comment"
              label="어떤 이야기를 나누고 싶으신가요?"
              fullWidth
              multiline
              rows={1.5}
              value={comment}
              onChange={onFormValueChangeEvent}
            />
            <Button type={"submit"} size={"tertiary"} text={"등록하기"} />
          </ArticleDetailCommentBox>
        </ArticleDetailForm>
      </ArticleDetailContainer>
      {articleComment
        .filter((cmt) => cmt.alcoholId === articleDatas.id)
        .map((cmt) => (
          <ArticleDetailComment
            key={cmt.id}
            articleComment={cmt}
            articleEditValue={articleEditValue}
            onEditValueChangeEvent={onEditValueChangeEvent}
            onCommentDeleteEvent={onCommentDeleteEvent}
          />
        ))}
    </ArticleDetailWrap>
  );
};

const ArticleDetailWrap = styled.div`
  width: 100%;
  padding-bottom: 5rem;
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

export default ArticleDetailCommentWrite;
