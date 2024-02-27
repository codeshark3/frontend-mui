import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  forecasts: [],
  loading: true,
  error: null,
};

export const getPrediction = createAsyncThunk(
  "forecasts/getPrediction",
  async () => {
    try {
      const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;

      // dispatch(getPredictionRequest());
      // const {
      //   userLogin: { userInfo },
      // } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get("/api/predictions/", config);
      // dispatch(getPredictionSuccess(data));
      return [...data];
    } catch (error) {
      // dispatch(getPredictionFail(error));
      return error.message;
    }
  }
);

const predictionSlice = createSlice({
  name: "forecasts",
  initialState,
  reducers: {},
  //     getPredictionRequest:(state) =>{
  //         state.loading = true
  //     },
  //     getPredictionSuccess:(state,{payload}) => {
  //         state.forecasts = payload
  //         state.loading= false

  //     },
  //     getPredictionFail:(state,{payload}) => {

  //     state.error = payload
  //     // type: TEST_LIST_FAIL,
  //     // payload:
  //     //   error.response && error.response.data.detail
  //     //     ? error.response.data.detail
  //     //     : error.message,
  // },
  extraReducers: (builder) => {
    builder.addCase(getPrediction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPrediction.fulfilled, (state, action) => {
      state.forecasts = action.payload;
      state.loading = false;
      //  console.log(state.coins)
    });
    builder.addCase(getPrediction.rejected, (state) => {
      state.loading = false;
      // state.error = action.payload
    });
  },
});

export const { getPredictionRequest, getPredictionSuccess, getPredictionFail } =
  predictionSlice.actions;
export default predictionSlice.reducer;

// export const getPrediction = async  (dispatch)=> {
//   try {
//       dispatch(getPredictionRequest());
//     //   const {
//     //     userLogin: { userInfo },
//     //   } = getState();
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         //   Authorization: `Bearer ${userInfo.token}`,
//         },
//       };
//       const { data } = await axios.get("/api/predictions/", config);
//       dispatch(getPredictionSuccess(data));
//     } catch (error) {
//       dispatch(getPredictionFail(error));
//     }
// }
