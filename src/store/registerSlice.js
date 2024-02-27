import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//     JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  newUser: [],
  loading: true,
  error: "",
  isError: false,
  messages: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    userRegisterRequest: (state) => {
      state.loading = true;
    },
    userRegisterSuccess: (state, { payload }) => {
      state.newUser = payload;
      state.loading = false;
      state.isError = false;
      state.messages = "New user registered";
    },
    userRegisterFail: (state, { payload }) => {
      state.isError = true;
      state.error = payload;
      state.loading = false;
    },

    userLogout: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
  userLogout,
} = registerSlice.actions;
export default registerSlice.reducer;

export function register(username, password) {
  return async (dispatch) => {
    try {
      dispatch(userRegisterRequest());
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/register/",
        { username: username, password: password },
        config
      );
      dispatch(userRegisterSuccess(data));

      // const response = await axios.get("http://localhost:8000/api/docs" );
      //   localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      console.log(error);
      dispatch(userRegisterFail(error.message));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch(userLogout());
  };
}
