import { configureStore } from "@reduxjs/toolkit";
import article from "../modules/articleSlice";
import boardSlice from "../modules/boardSlice";
import articleComment from "../modules/articleCommentSlice";
import boardDetailCommentSlice from "../modules/boardDetailCommentSlice";

const store = configureStore({
  reducer: {
    article: article,
    boardSlice: boardSlice,
    articleComment: articleComment,
    boardDetailCommentSlice: boardDetailCommentSlice,
  },
});

export default store;
