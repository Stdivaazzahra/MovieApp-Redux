import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGenre = createAsyncThunk("genre/getGenre", async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US"
    );
    console.log(res);
    return res.data.genres;
  } catch (error) {
    console.log("error");
  }
});

export const genresSlice = createSlice({
  name: "genre",
  initialState: {
    genre: null,
  },
  reducers: {},
  extraReducers: {
    [getGenre.fulfilled]: (state, { payload }) => {
      state.genre = payload;
    },
  },
});
export default genresSlice.reducer;
