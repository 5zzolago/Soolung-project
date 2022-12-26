import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  article: [],
  isLoading: false,
  error: null,
};

export const __getArticle = createAsyncThunk(
  "getArticle",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:8080/article");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: {
    [__getArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [__getArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    },
    [__getArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default articleSlice.reducer;
