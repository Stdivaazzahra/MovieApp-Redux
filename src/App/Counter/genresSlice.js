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

export const getSearchGen = createAsyncThunk(
  "searchGen/getSearchGen",
  async (genres) => {
    try {
      // const { genres } = useParams();
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&query=${genres}`
      );
      console.log(res);
      return res.data.results;
    } catch (error) {
      console.log("error");
    }
  }
);

export const genresSlice = createSlice({
  name: "genre",
  initialState: {
    genre: null,
    searchGen: null,
  },
  reducers: {},
  extraReducers: {
    [getGenre.fulfilled]: (state, { payload }) => {
      state.genre = payload;
    },
    [getSearchGen.fulfilled]: (state, { payload }) => {
      state.searchGen = payload;
    },
  },
});
export default genresSlice.reducer;
