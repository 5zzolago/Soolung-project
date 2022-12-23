import React from "react";
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
  const [articleFormData, handleFormValueChange] = useForm(initialState);

  const handleArticleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password, comment, star } = articleFormData;
    console.log(username, password, comment, star);
  };

  return (
    <ArticleDetailWrap>
      <ArticleDetailHeader />
      <ArticleDetailCommentWrite
        articleFormData={articleFormData}
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
