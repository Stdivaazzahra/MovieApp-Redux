import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`
    );
    console.log(res);
    return res.data.results;
  } catch (error) {
    console.log('error');
  }
});

export const getAllMovie = createAsyncThunk('allMovie/getAllMovie', async () => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9cc1bc46ae7070abb9a43667213d613a`);
    console.log(res);
    return res.data.results;
  } catch (error) {
    console.log('error');
  }
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: null,
    allMovie: null,
    openLogim: false,
    openRegis: false,
  },
  reducers: {},
  extraReducers: {
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
    },
    [getAllMovie.fulfilled]: (state, { payload }) => {
      state.allMovie = payload;
    },
  },
});

export default moviesSlice.reducer;
