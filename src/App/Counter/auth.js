import { createSlice } from '@reduxjs/toolkit';

export const Auth = createSlice({
  name: 'auth',
  initialState: {
    isMasuk: false,
    openLogin: false,
    openRegis: false,
  },
  reducers: {
    blumMasuk: (state, { payload }) => {
      state.isMasuk = payload;
    },
    resetBelumMasuk: (state, { payload }) => {
      state.isMasuk = payload;
    },
    login: (state) => (state.openLogin = true),
    register: (state) => (state.openRegis = true),
  },
});

export const { resetBelumMasuk, login, register, blumMasuk } = Auth.actions;
export default Auth.reducer;
