// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// import { Action } from "@remix-run/router";
// import axios from "axios";

// export const getLogin = createAsyncThunk("login/getLogin", async () => {
//   try {
//     const res = await axios.post(
//       `https://notflixtv.herokuapp.com/api/v1/users/login`
//     );
//     localStorage.setItem("credential", res.data.data.token);
//     localStorage.setItem("given_name", res.data.data.first_name);
//     console.log(res);
//     // return res.data.results;
//   } catch (error) {
//     //   catch ((error) => setMsg('Email atau PassWord Salah'));
//     //   };
//     console.log("error");
//   }
// });

// if (msg) {
//   setTimeout(() => {
//     setMsg("");
//   }, 10000);
// }

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, Action) => {
      state.user = Action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  //   extraReducers: {
  //     [getLogin.fulfilled]: (state, { payload }) => {
  //       state.login = payload;
  //     },
  //   },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
