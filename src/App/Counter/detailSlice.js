import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useParams } from "react-router-dom";

export const getDetail = createAsyncThunk("detail/getDetail", async (id) => {
  try {
    // const { genres } = useParams();
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error");
  }
});

export const getDetailCast = createAsyncThunk(
  "cast/getDetailCast",
  async (id) => {
    try {
      // const { genres } = useParams();
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9cc1bc46ae7070abb9a43667213d613a`
      );
      console.log(res);
      return res.data.cast.slice(0, 10);
    } catch (error) {
      console.log("error");
    }
  }
);

export const getDetailVideo = createAsyncThunk(
  "video/getDetailVideo",
  async (id) => {
    try {
      // const { genres } = useParams();
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US`
      );
      console.log(res);
      return res.data.results;
    } catch (error) {
      console.log("error");
    }
  }
);
export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detail: null,
    cast: null,
    video: null,
  },
  reducers: {},
  extraReducers: {
    [getDetail.fulfilled]: (state, action) => {
      state.detail = action.payload;
    },
    [getDetailCast.fulfilled]: (state, action) => {
      state.cast = action.payload;
    },
    [getDetailVideo.fulfilled]: (state, action) => {
      state.video = action.payload;
    },
  },
  // extraReducers: {
  //   [getDetail.fulfilled]: (state, { payload }) => {
  //     state.detail = payload;
  //   },
  //   [getDetailCast.fulfilled]: (state, { payload }) => {
  //     state.cast = payload;
  //   },
  //   [getDetailVideo.fulfilled]: (state, { payload }) => {
  //     state.video = payload;
  //   },
  // },
});
// export const detailSlice = createSlice({
//   name: "detail",
//   initialState: {
//     detail: null,
//     cast: null,
//     video: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [getDetail.fulfilled]: (state, { payload }) => {
//       state.detail = payload;
//     },
//     [getDetailCast.fulfilled]: (state, { payload }) => {
//       state.cast = payload;
//     },
//     [getDetailVideo.fulfilled]: (state, { payload }) => {
//       state.video = payload;
//     },
//   },
// });
// export const { detail, cast, video } = userSlice.actions;
export default detailSlice.reducer;
