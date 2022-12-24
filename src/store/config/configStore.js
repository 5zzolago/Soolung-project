import { configureStore } from "@reduxjs/toolkit";
import article from "../modules/articleSlice";
import boardSlice from "../modules/boardSlice";
import articleComment from "../modules/articleCommentSlice";

const store = configureStore({
  reducer: {
    article: article,
    boardSlice: boardSlice,
    articleComment: articleComment,
  },
});

export default store;
