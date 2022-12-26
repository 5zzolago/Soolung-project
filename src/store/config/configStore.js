import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "../modules/articleSlice";
import boardSlice from "../modules/boardSlice";
import articleComment from "../modules/articleCommentSlice";
import boardDetailCommentSlice from "../modules/boardDetailCommentSlice";

const store = configureStore({
  reducer: {
    articleSlice: articleSlice,
    boardSlice: boardSlice,
    articleComment: articleComment,
    boardDetailCommentSlice: boardDetailCommentSlice,
  },
});

export default store;
