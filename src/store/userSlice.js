import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  loading: true,
  error: "",
  isError: false,
  messages: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    
    // builder
    // .addCase(getUsersRequest, (state) => {
    //   state.loading = true;
    // });
    // builder
    //   .addCase(getUsersSuccess, (state, { payload }) => {
    //     state.userInfo = payload;
    //     state.loading = false;
    //     state.isError = false;
    //   })
    //   .addCase(getUsersFail, (state, { payload }) => {
    //     state.isError = true;
    //     state.error = payload;
    //   })
    //   .addCase(userDetailsRequest, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(userDetailsSuccess, (state, { payload }) => {
    //     state.user = payload;
    //     state.loading = false;
    //   })
    //   .addCase(userDetailsFail, (state, { payload }) => {
    //     state.loading = false;
    //     state.error = payload;
    //   })
    //   .addCase(userDetailsReset, (state) => {
    //     state.user = {};
    //   });
  },
});
export const {
  getUsers,
  getUsersSuccess,
  getUsersFail,
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFail,
  userDetailsReset,
} = userSlice.actions;

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    // dispatch(getUsersRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/users/${id}/`, config);

    dispatch(userDetailsSuccess(data));
  } catch (error) {
    dispatch(userDetailsFail());
  }
};

export default userSlice.reducer;
