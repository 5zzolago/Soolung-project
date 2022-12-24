import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  comments: [],
  error: null,
};

export const getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/board?_sort=createdDate&_order=DESC&_limit=5`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllBoard = createAsyncThunk(
  "getAllBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/board?_sort=createdDate&_order=DESC`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const boardSlice = createSlice({
  name: "article",
  initialState,
  reducers: {}, // reducer 액션부분 추가 하면 됨
  extraReducers: {
    [getBoard.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getBoard.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getAllBoard.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getAllBoard.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { _ } = boardSlice.actions;

export default boardSlice.reducer;
