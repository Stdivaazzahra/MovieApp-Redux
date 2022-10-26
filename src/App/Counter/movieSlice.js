import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: null,
    loading: false,
    isMasuk: false,
    openLogim: false,
    openRegis: false,
    cate: null,
  },
  reducers: {
    getMovies: (state, { payload }) => {
      return {
        ...state,
        movies: payload,
      };
    },
    getCategory: (state, { payload }) => {
      return {
        ...state,
        cate: payload,
      };
    },
  },
});

export const { getMovies, getCategory } = moviesSlice.actions;
export default moviesSlice.reducer;
