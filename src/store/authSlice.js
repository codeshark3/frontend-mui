import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  loading: true,
  error: "",
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUsersRequest: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.userInfo = payload;
      state.loading = false;
      state.isError = false;
    },
    getUsersFail: (state, { payload }) => {
      state.isError = true;
      state.error = payload;
    },
    //user Login
    userLoginRequest: (state, action) => {
      state.loading = true;
      state.isError = true;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userLoginFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      // payload = state.error.response && state.error.response.data.detail
      //         ? state.error.response.data.detail
      //         : state.error.message
      state.isError = true;
      // console.log(payload)
    },
    userLogout: (state, action) => {
      state.userInfo = action.payload;
      console.log(state.userInfo);
    },
    //end of userlogin
  },
});

export const {
  getUsers,
  getUsersSuccess,
  getUsersFail,
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
} = authSlice.actions;
export default authSlice.reducer;
// export const docsSelector = (state) => state.docs

// export function fetchDocs() {
//   return async (dispatch) => {
//     try {
//       //axios
//       // const resposne = await
//       const response = await axios.get("http://localhost:8000/api/docs");
//       dispatch(getDocsSuccess(response.data));
//       // console.warn(response.data)
//     } catch (error) {
//       dispatch(getDocsFail(error));
//     }
//   };
// }

export function login(username, password) {
  return async (dispatch) => {
    try {
      dispatch(userLoginRequest());
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login/",
        { username: username, password: password },
        config
      );
      dispatch(userLoginSuccess(data));
      // const response = await axios.get("http://localhost:8000/api/docs" );
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error);
      dispatch(userLoginFail(error.message));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch(userLogout());
  };
}
