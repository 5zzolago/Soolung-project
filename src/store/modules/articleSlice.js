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
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/article`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateArticle = createAsyncThunk(
  "updateArticle",
  async (payload, thunkAPI) => {
    const [id, star] = [payload[0], payload[1]];
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/article/${id}`, {
        star,
      });
      return thunkAPI.fulfillWithValue(payload);
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
    [__updateArticle.fulfilled]: (state, action) => {
      const obj = state.article.map((s) => {
        return s.id === action.payload[0]
          ? { ...s, star: Number(action.payload[1]) }
          : s;
      });
      state.article = obj;
    },
  },
});

export default articleSlice.reducer;
