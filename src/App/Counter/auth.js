import { createSlice } from '@reduxjs/toolkit';

export const Auth = createSlice({
  name: 'auth',
  initialState: {
    isMasuk: false,
    openLogim: false,
    openRegis: false,
  },
  reducers: {
    blumMasuk: (state) => {
      state.isMasuk = true;
    },
    reset: (state) => (state.isMasuk = false),
    login: (state) => (state.openLogim = true),
    register: (state) => (state.openRegis = true),
  },
});

export const { reset, login, register, blumMasuk } = Auth.actions;
export default Auth.reducer;
