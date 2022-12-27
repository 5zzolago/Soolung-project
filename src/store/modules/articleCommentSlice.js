import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articleComment: [],
  isLoading: false,
  error: null,
};

export const __getArticleComment = createAsyncThunk(
  "getArticleComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:8080/articleComment");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __createArticleComment = createAsyncThunk(
  "createArticleComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/articleComment",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateArticleComment = createAsyncThunk(
  "updateArticleComment",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:8080/articleComment/${payload[0]}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 삭제
export const __deleteArticleComment = createAsyncThunk(
  "deleteArticleComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:8080/articleComment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const articleCommentSlice = createSlice({
  name: "articleComment",
  initialState,
  reducers: {},
  extraReducers: {
    [__getArticleComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getArticleComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articleComment = action.payload;
    },
    [__getArticleComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__createArticleComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__createArticleComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articleComment = [...state.articleComment, action.payload];
    },
    [__createArticleComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteArticleComment.fulfilled]: (state, action) => {
      state.articleComment = state.articleComment.filter(
        (state) => state.id !== action.payload
      );
    },
    [__updateArticleComment.fulfilled]: (state, action) => {
      const obj = state.articleComment.map((state) => {
        return state.id === action.payload[0]
          ? { ...state, comment: action.payload[1].comment }
          : state;
      });
      state.articleComment = obj;
    },
  },
});

export default articleCommentSlice.reducer;
