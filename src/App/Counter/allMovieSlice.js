import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMovie = createAsyncThunk(
  "allMovie/getAllMovie",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9cc1bc46ae7070abb9a43667213d613a`
      );
      console.log(res);
      return res.data.results;
    } catch (error) {
      console.log("error");
    }
  }
);

export const allMovieSlice = createSlice({
  name: "allMovie",
  initialState: {
    allMovie: null,
  },
  reducers: {},
  extraReducers: {
    [getAllMovie.fulfilled]: (state, { payload }) => {
      state.allMovie = payload;
    },
  },
});

export default allMovieSlice.reducer;
