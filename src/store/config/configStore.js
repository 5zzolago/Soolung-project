import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "../modules/articleSlice";
import boardSlice from "../modules/boardSlice";

const store = configureStore({
  reducer: { articleSlice: articleSlice, boardSlice: boardSlice },
});

export default store;
