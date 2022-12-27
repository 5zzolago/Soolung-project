import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import ArticlePage from "../pages/ArticlePage";
import BoardDetailPage from "../pages/BoardDetailPage";
import BoardPage from "../pages/BoardPage";
import EditorPage from "../pages/EditorPage";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import MainPage from "../pages/MainPage";
import { Container } from "@mui/material";
import SearchResultPage from '../pages/SearchResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/article/:articleId" element={<ArticleDetailPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/board/:boardId" element={<BoardDetailPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path='/search' element={<SearchResultPage />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
