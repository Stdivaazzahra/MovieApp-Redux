import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

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

export const loginGoogleSlice = createSlice({
  name: "loginGoogle",
  initialState: {
    loginGoogle: null,
  },
  reducers: {},
  extraReducers: {
    [getLoginGoogle.fulfilled]: (state, { payload }) => {
      state.loginGoogle = payload;
    },
  },
});

export default loginGoogleSlice.reducer;
