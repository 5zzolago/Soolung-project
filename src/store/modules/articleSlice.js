import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  title: "",
  content: "",
  img: "",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {}, // reducer 액션부분 추가 하면 됨
});

export const { _ } = articleSlice.actions;

export default articleSlice.reducer;
