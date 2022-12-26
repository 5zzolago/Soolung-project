import React, { useEffect } from "react";
import BoardList from "../components/board/BoardList";
import Banner from "../components/main/Banner";
import ArticleList from "../components/article/ArticleList";
import { __getArticle } from "../store/modules/articleSlice";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
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
    <div>
      <Banner />
      <ArticleList article={article} />
      <BoardList />
    </div>
  );
};

export default MainPage;
