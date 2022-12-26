import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// 2. action creators
export const __BoardDetailComment = createAsyncThunk(
  "__BoardDetailComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/boardComments",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 3. initial State => reducer를 구성할 때
// uuid 어떻게 썼는지 Article Detail Page에서 참고하기
const initialState = {
  boardDetailComment: [],
  isLoading: false,
  error: null,
};

// 4. reducer를 만들 것
// const boardDetailCommentList = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOARD_DETAIL_COMMENT:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

const boardDetailCommentSlice = createSlice({
  name: "boardDetail",
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
  },
});

export const { _ } = boardDetailCommentSlice.actions;

export default boardDetailCommentSlice.reducer;
