import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  odatatable: [],
  sdatatable: [],
  ldatatable: [],
  hdatatable: [],
  loading: true,
  error: null,
};

export const getDataTable = createAsyncThunk(
  "dataTable/getDataTable",
  async () => {
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
      const { data } = await axios.get(
        "http://localhost:8000/api/datatable/",
        config
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

const dataTableSlice = createSlice({
  name: "dataTable",
  initialState,
  reducers: {
    // DatatableRequest:(state) =>{
    //         state.loading = true
    //     },
    //     getDatatableSuccess:(state,action) => {
    //       state.odatatable= action.payload.odatatable;
    //       state.sdatatable= action.payload.sdatatable;
    //       state.ldatatable= action.payload.ldatatable;
    //       state.hdatatable= action.payload.hdatatable;
    //         state.loading= false
    //     },
    //     getDatatableFail:(state,{payload}) => {
    //   // payload = error.response && error.response.data.detail
    //   //       ? error.response.data.detail
    //   //       : error.message,
    //     state.error = payload
    //     // type: TEST_LIST_FAIL,
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataTable.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDataTable.fulfilled, (state, action) => {
      state.odatatable = action.payload.odatatable;
      state.sdatatable = action.payload.sdatatable;
      state.ldatatable = action.payload.ldatatable;
      state.hdatatable = action.payload.hdatatable;
      state.loading = false;
    });
    builder.addCase(getDataTable.rejected, (state) => {
      state.loading = false;
      // state.error = action.payload
    });
  },
});

export const { getDatatableRequest, getDatatableSuccess, getDatatableFail } =
  dataTableSlice.actions;
export default dataTableSlice.reducer;
