import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  charts: [],
  loading: true,
  error: null,
};
export const getCharts = createAsyncThunk("charts/getCharts", async () => {
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
    // const { data } = await axios.get("/api/charts/", config);
    // return [...data];
  } catch (error) {
    return error;
  }
});

const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    //     getChartRequest:(state) =>{
    //         state.loading = true
    //     },
    //     getChartSuccess:(state,{payload}) => {
    //         state.charts = payload
    //         state.loading= false
    //     },
    //     getChartFail:(state,{payload}) => {
    //   // payload= error.response && error.response.data.detail
    //   //       ? error.response.data.detail
    //   //       : error.message,
    //     state.error = payload
    //     // type: TEST_LIST_FAIL,
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharts.fulfilled, (state, action) => {
      state.charts = action.payload;
      state.loading = false;
      //  console.log(state.coins)
    });
    builder.addCase(getCharts.rejected, (state) => {
      state.loading = false;
      // state.error = action.payload
    });
  },
});

export const { getChartRequest, getChartSuccess, getChartFail } =
  chartSlice.actions;
export default chartSlice.reducer;
