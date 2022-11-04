// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

export const handleLogin = createAsyncThunk(
  "login/getLogin",
  async (formValues) => {
    try {
      const req = await logInWithEmailAndPassword(
        formValues.email,
        formValues.password
      );
      console.log(req);
      // localStorage.setItem("token", JSON.stringify(req.user.accessToken));
      // localStorage.setItem("user", JSON.stringify(req.user));
      setTimeout(() => {
        window.location.reload(1);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }
);

// if (msg) {
//   setTimeout(() => {
//     setMsg("");
//   }, 10000);
// }

export const getLoginGoogle = createAsyncThunk(
  "loginGoogle/getLoginGoogle",
  async (credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded);
    localStorage.setItem("credential", credentialResponse.credential);
    localStorage.setItem("given_name", decoded.given_name);
    localStorage.getItem("picture", decoded.picture);
    return decoded;
  }
);

export const getUserRegist = createAsyncThunk(
  "userRegist/getUserRegist",
  async () => {
    try {
      const res = await axios.post(
        `https://notflixtv.herokuapp.com/api/v1/users/login`
      );
      console.log(res);
      // return res;
    } catch (error) {
      console.log("error");
    }
  }
);

export const loginSlice = createSlice({
  name: "user",
  initialState: {
    login: null,
    loginGoogle: null,
    userRegist: null,
  },
  reducers: {
    login: (state, Action) => {
      state.login = Action.payload;
    },
    register: (state, Action) => {
      state.userRegist = Action.payload;
    },
  },
  extraReducers: {
    [getLogin.fulfilled]: (state, { payload }) => {
      state.login = payload;
    },
    [getLoginGoogle.fulfilled]: (state, { payload }) => {
      state.loginGoogle = payload;
    },
    [getLoginGoogle.fulfilled]: (state, { payload }) => {
      state.loginGoogle = payload;
    },
  },
});

export const { login, logout } = loginSlice.actions;

// export const selectUser = (state) => state.user.user;

export default loginSlice.reducer;
// export default userSlice.reducer;
