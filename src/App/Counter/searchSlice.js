import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useParams } from "react-router-dom";

export const getSearch = createAsyncThunk("search/getSearch", async (name) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&query=${name}`
    );
    console.log(res);
    return res.data.results;
  } catch (error) {
    console.log("error");
  }
});

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: null,
  },
  reducers: {},
  extraReducers: {
    [getSearch.fulfilled]: (state, { payload }) => {
      state.search = payload;
    },
  },
});

export default searchSlice.reducer;
