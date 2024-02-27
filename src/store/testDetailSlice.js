import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   testDetails:[],
  loading: true,
  error: null


};


export const getTestDetails = createAsyncThunk(
  "tests/getTestDetails",
  async (id) => {
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
      
  
      const { data } = await axios.get(`http://localhost:8000/api/tests/${id}`, config);
      //       dispatch(getTestsSuccess(data));
     console.log("testdetailslice",data)
      return data;
    } catch (error) {
      return error.message;
    }
  }
);


const testDetailSlice = createSlice({
  name: "testDetails",
  initialState,
  reducers: {
 
  },

  extraReducers: (builder) => {
   
    builder.addCase(getTestDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTestDetails.fulfilled, (state, action) => {
      state.testDetails = action.payload;
      state.loading = false;
    
    });
    builder.addCase(getTestDetails.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload
    });
  },
});

// export const docsSelector = (state) => state.docs

export const {
  getTestsDetailsRequest,
  getTestsDetailsSuccess,
  getTestsDetailsFail,
  getCountSuccess,
  getCountRequest,
  getCountFail,
} = testDetailSlice.actions;
export default testDetailSlice.reducer;

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