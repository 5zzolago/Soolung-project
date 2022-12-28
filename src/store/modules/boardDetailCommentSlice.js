import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// initial State => reducer를 구성할 때
// uuid 어떻게 썼는지 Article Detail Page에서 참고하기
const initialState = {
  boardDetailComment: [],
  isLoading: false,
  error: null,
};

export const __getBoardDetailComment = createAsyncThunk(
  "getBoardDetailComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/boardComments?_sort=createdDate&_order=DESC`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 2-1. action creators 댓글 작성
export const __BoardDetailComment = createAsyncThunk(
  "BoardDetailComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/boardComments`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 2-2. action creators 댓글 삭제
export const __deleteDetailComment = createAsyncThunk(
  "deleteDetailComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/boardComments/${payload}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 2-3. action creators 댓글 수정
export const __editDetailComment = createAsyncThunk(
  "editDetailComment",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/boardComments/${payload.id}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 4. reducer를 만들 것

const boardDetailCommentSlice = createSlice({
  name: "boardDetailComment",
  initialState,
  reducers: {},
  extraReducers: {
    [__BoardDetailComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__BoardDetailComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boardDetailComment = [...state.boardDetailComment, action.payload];
    },
    [__BoardDetailComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteDetailComment.fulfilled]: (state, action) => {
      state.boardDetailComment = state.boardDetailComment.filter(
        (state) => state.id !== action.payload
      );
    },
    [__getBoardDetailComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoardDetailComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boardDetailComment = action.payload;
    },
    [__getBoardDetailComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editDetailComment.fulfilled]: (state, action) => {
      const newComments = state.boardDetailComment.map((item) => {
        return item.id === action.payload.id
          ? { ...item, body: action.payload.body }
          : item;
      });
      state.boardDetailComment = newComments;
    },
  },
});

export const { _ } = boardDetailCommentSlice.actions;

export default boardDetailCommentSlice.reducer;
