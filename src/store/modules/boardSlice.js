import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  title: "",
  content: "",
  img: "",
};

const boardSlice = createSlice({
  name: "article",
  initialState,
  reducers: {}, // reducer 액션부분 추가 하면 됨
});

export const { _ } = boardSlice.actions;

export default boardSlice.reducer;
