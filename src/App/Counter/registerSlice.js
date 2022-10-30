// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// import { Action } from "@remix-run/router";
// import axios from "axios";

// export const getLogin = createAsyncThunk("login/getLogin", async () => {
//   try {
//     const res = await axios.post(
//       `https://notflixtv.herokuapp.com/api/v1/users/login`
//     );
//     console.log(res);
//     // return res;
//   } catch (error) {
//     console.log("error");
//   }
// });

export const registSlice = createSlice({
  name: "user",
  initialState: {
    userRegist: null,
  },
  reducers: {
    register: (state, Action) => {
      state.userRegist = Action.payload;
    },
  },
  //   extraReducers: {
  //     [getLogin.fulfilled]: (state, { payload }) => {
  //       state.login = payload;
  //     },
  //   },
});

export const { register } = registSlice.actions;

export const selectUserRegist = (state) => state.userRegist.userRegist;

export default registSlice.reducer;
