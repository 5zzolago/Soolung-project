import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MainViewArticle from "../components/article/ArticleList";
import { __getArticle } from "../store/modules/articleSlice";

const StyledDiv = styled.div`
  padding: 0;
  margin: 0px;
`;

const ArticlePage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, article } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(__getArticle());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <StyledDiv>
      <MainViewArticle article={article} />
    </StyledDiv>
  );
};

export default ArticlePage;
