import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const getLogin = createAsyncThunk("login/getLogin", async () => {
  try {
    const res = await axios.post(
      `https://notflixtv.herokuapp.com/api/v1/users/login`
    );
    localStorage.setItem("credential", res.data.data.token);
    localStorage.setItem("given_name", res.data.data.first_name);
    console.log(res);
    // return res.data.results;
  } catch (error) {
    // catch ((error) => setMsg('Email atau PassWord Salah'));
    // };
    console.log("error");
  }
});

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
