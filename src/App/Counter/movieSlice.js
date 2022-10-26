import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`
    );
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.movies = payload;
    },
    [getMovies.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default moviesSlice.reducer;
