import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  __getArticleComment,
  __createArticleComment,
} from "../store/modules/articleCommentSlice";
import useForm from "../hooks/useForm";
import ArticleDetailHeader from "../components/article/ArticleDetailHeader";
import ArticleDetailCommentWrite from "../components/article/ArticleDetailCommentWrite";
import styled from "styled-components";

const initialState = {
  username: "",
  password: "",
  comment: "",
  star: 0,
};

const ArticleDetailPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, articleComment } = useSelector(
    (state) => state.articleComment
  );
  const [articleFormData, handleFormValueChange] = useForm(initialState);
  useEffect(() => {
    dispatch(__getArticleComment());
  }, [dispatch]);

  const handleArticleFormSubmit = (e) => {
    e.preventDefault();
    if (
      articleFormData.username.trim() === "" ||
      articleFormData.password.trim() === "" ||
      articleFormData.comment.trim() === ""
    ) {
      alert("빈칸을 입력해주세요.");
      return;
    }
    const obj = {
      ...articleFormData,
      id: uuidv4(),
      createdDate: "2022-12-23",
      alcoholId: "not",
    };
    dispatch(__createArticleComment(obj));

    articleFormData.username = "";
    articleFormData.password = "";
    articleFormData.comment = "";
    articleFormData.star = 0;
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ArticleDetailWrap>
      <ArticleDetailHeader />
      <ArticleDetailCommentWrite
        articleFormData={articleFormData}
        articleComment={articleComment}
        onFormValueChangeEvent={handleFormValueChange}
        onArticleFormSubmitEvent={handleArticleFormSubmit}
      />
    </ArticleDetailWrap>
  );
};

const ArticleDetailWrap = styled.div`
  width: 100%;
`;

export default ArticleDetailPage;
