import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tests: [],
  loading: true,
  error: null,
  page: 1,
  pages: 1,

};

export const listTests = createAsyncThunk(
  "tests/listTests",
  async (keyword = "") => {
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

        const { data } = await axios.get(`http://localhost:8000/api/tests${keyword}`, config);
        //       dispatch(getTestsSuccess(data));
       //console.log("testslice",data)
        return data;
    } catch (error) {
      return error.message;
    }
  }
);

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(listTests.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(listTests.fulfilled, (state, action) => {
      state.tests = action.payload;
      state.loading = false;
    });
    builder.addCase(listTests.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export const docsSelector = (state) => state.docs

export const {
  getTestsRequest,
  getTestsSuccess,
  getTestsFail,
  getCountSuccess,
  getCountRequest,
  getCountFail,
} = testSlice.actions;
export default testSlice.reducer;

// export const listTests =
//   (keyword = "")=>
//   async (dispatch) => {
//     try {
//       dispatch(getTestsRequest());
//     //   const {
//     //     userLogin: { userInfo },
//     //   } = getState();
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         //   Authorization: `Bearer ${userInfo.token}`,
//         },
//       };
//       const { data } = await axios.get(`http://localhost:8000/api/tests${keyword}`, config);
//       dispatch(getTestsSuccess(data));
//     } catch (error) {
//       dispatch(getTestsFail(error));
//     }
//   };

// export function fetchTests(){
//     return async (dispatch)=>{

//         try{
//             //axios
//                 // const resposne = await
//                 const response = await axios.get("http://localhost:8000/api/tests${keyword}" );
//             dispatch(getDocsSuccess(response.data))
//             // console.warn(response.data)
//                  }
//         catch(error){
//                 dispatch(getDocsFail(error))
//         }
//     }
// }

//         getTestsRequest:(state) =>{
//             state.loading = true
//         },
//         getTestsSuccess:(state,{payload}) => {
//             state.tests = payload
//             state.loading= false
//         },
//         getTestsFail:(state,{payload}) => {
//         state.error = payload
//         // type: TEST_LIST_FAIL,
//         // payload:
//         //   error.response && error.response.data.detail
//         //     ? error.response.data.detail
//         //     : error.message,
//     },
// getCountRequest:(state) =>{
//     state.loading = true
// },
// getCountSuccess:(state,{payload}) => {
//     state.tests = payload
//     state.loading= false
// },
// getCountFail:(state,{payload}) => {
//     state.error = payload
//   },   //         getTestsRequest:(state) =>{
//             state.loading = true
//         },
//         getTestsSuccess:(state,{payload}) => {
//             state.tests = payload
//             state.loading= false
//         },
//         getTestsFail:(state,{payload}) => {
//         state.error = payload
//         // type: TEST_LIST_FAIL,
//         // payload:
//         //   error.response && error.response.data.detail
//         //     ? error.response.data.detail
//         //     : error.message,
//     },
// getCountRequest:(state) =>{
//     state.loading = true
// },
// getCountSuccess:(state,{payload}) => {
//     state.tests = payload
//     state.loading= false
// },
// getCountFail:(state,{payload}) => {
//     state.error = payload
//   },
