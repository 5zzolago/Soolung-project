import React from "react";
import BoardList from "../components/board/BoardList";
import Banner from "../components/main/Banner";
import ArticleList from '../components/article/ArticleList'

const MainPage = () => {
  return (
    <div>
      <Banner />
      <ArticleList />
      <BoardList />
    </div>
  );
};

export default MainPage;
