import React from "react";
import BoardList from "../components/board/BoardList";
import Banner from "../components/Banner";
import MainViewArticle from "../components/MainViewArticle";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <MainViewArticle />
      <BoardList />
    </div>
  );
};

export default MainPage;
