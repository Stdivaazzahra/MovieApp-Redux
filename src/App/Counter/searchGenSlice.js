import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useParams } from "react-router-dom";

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

// const { name } = useParams();
export const searchGenSlice = createSlice({
  name: "searchGen",
  initialState: {
    searchGen: null,
    // genres: `${genres}`,
    // movies: null,
  },
  reducers: {},
  extraReducers: {
    [getSearchGen.fulfilled]: (state, { payload }) => {
      state.searchGen = payload;
    },
  },
});

export default searchGenSlice.reducer;
