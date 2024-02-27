import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  count: [],
  loading: true,
  error: null,
};

export const getCount = createAsyncThunk("count/getCount", async () => {
  try {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    //   const {
    //     userLogin: { userInfo },
    //   } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // const { data } = await axios.get("/api/count/", config);
    // return data;
  } catch (error) {
    return error;
  }
});

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    // getCountRequest:(state) =>{
    //     state.loading = true
    // },
    // getCountSuccess:(state,{payload}) => {
    //     state.count = payload
    //     state.loading= false
    // },
    // getCountFail:(state,{payload}) => {
    //     state.error = payload
    //   },
  },
  extraReducers: (builder) => {
    builder.addCase(getCount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCount.fulfilled, (state, action) => {
      state.count = action.payload;
      state.loading = false;
      //  console.log(state.coins)
    });
    builder.addCase(getCount.rejected, (state) => {
      state.loading = false;
      // state.error = action.payload
    });
  },
});

// export const docsSelector = (state) => state.docs

export const { getCountSuccess, getCountRequest, getCountFail } =
  countSlice.actions;
export default countSlice.reducer;
