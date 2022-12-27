import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  error: null,
};
export const addBoard = createAsyncThunk(
  "addBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/board`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/board?_sort=createdDate&_order=DESC&_limit=5`
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
        `${process.env.REACT_APP_API_URL}/board?_sort=createdDate&_order=DESC`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateBoard = createAsyncThunk(
  "updateBoard",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:8080/board/${payload[0]}`, {
        ...payload[1],
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteBoard = createAsyncThunk(
  "deleteBoard",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:8080/board/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {}, // reducer 액션부분 추가 하면 됨
  extraReducers: {
    [getBoard.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [addBoard.fulfilled]: (state, action) => {
      state.list = [...state.list, action.payload];
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
    [__updateBoard.fulfilled]: (state, action) => {
      const obj = state.list.map((s) => {
        return s.id === action.payload[0] ? { ...s, ...action.payload[1] } : s;
      });
      state.list = obj;
    },
    [__deleteBoard.fulfilled]: (state, action) => {
      state.list = state.list.filter((s) => s.id !== action.payload);
    },
  },
});

export const { _ } = boardSlice.actions;

export default boardSlice.reducer;
