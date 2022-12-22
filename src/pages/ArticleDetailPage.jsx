import React from "react";
import ArticleDetailHeader from "../components/article/ArticleDetailHeader";
import ArticleDetailCommentWrite from "../components/article/ArticleDetailCommentWrite";
import styled from "styled-components";

const ArticleDetailPage = () => {
  return (
    <ArticleDetailWrap>
      <ArticleDetailHeader />
      <ArticleDetailCommentWrite />
    </ArticleDetailWrap>
  );
};

const ArticleDetailWrap = styled.div`
  width: 100%;
  height: 90vh;
`;

export default ArticleDetailPage;
