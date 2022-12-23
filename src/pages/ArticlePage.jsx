import React from "react";
import styled from "styled-components";
import MainViewArticle from "../components/article/ArticleList";

const StyledDiv = styled.div`
  padding: 0;
  margin: 0px;
`;

const ArticlePage = () => {
  return (
    <StyledDiv>
      <MainViewArticle />
    </StyledDiv>
  );
};

export default ArticlePage;
