import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "../modules/articleSlice";
import boardSlice from "../modules/boardSlice";
import articleComment from "../modules/articleCommentSlice";

const store = configureStore({
  reducer: {
    articleSlice: articleSlice,
    boardSlice: boardSlice,
    articleComment: articleComment,
  },
});

export default store;
