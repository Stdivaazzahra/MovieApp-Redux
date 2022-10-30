import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useParams } from "react-router-dom";

export const getSearch = createAsyncThunk("search/getSearch", async (name) => {
  try {
    // const { genres } = useParams();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&query=${name}`
    );
    console.log(res);
    return res.data.results;
  } catch (error) {
    console.log("error");
  }
});

// const { name } = useParams();
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: null,
    // genres: `${genres}`,
    // movies: null,
  },
  reducers: {},
  extraReducers: {
    [getSearch.fulfilled]: (state, { payload }) => {
      state.search = payload;
    },
  },
});

export default searchSlice.reducer;

// import {
//   createAsyncThunk,
//   createEntityAdapter,
//   createSlice,
// } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export const getSearchGen = createAsyncThunk(
//   "searchGen/getSearchGen",
//   async () => {
//     try {
//       // const { genres } = useParams();
//       const res = await axios.get(
//         "https://api.themoviedb.org/3/search/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&query="
//         // genres
//       );
//       console.log(res);
//       return res.data.results;
//     } catch (error) {
//       console.log("error");
//     }
//   }
// );

// const searchGenEntity = createEntityAdapter({
//   // const { name } = useParams();
//   selectId: (searchGen) => searchGen.genres,
// });

// // const { name } = useParams();
// export const searchGenSlice = createSlice({
//   name: "searchGen",
//   initialState: searchGenEntity.getInitialState(),
//   reducers: {},
//   extraReducers: {
//     [getSearchGen.fulfilled]: (state, action) => {
//       searchGenEntity.setAll(state, action.payload);
//     },
//   },
// });

// export const searchGenSelectors = searchGenEntity.getSelectors(
//   (state) => state.searchGen
// );
// export default searchGenSlice.reducer;
