import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../Counter/counterSlice";
import loginGoogle from "../Counter/loginGoogleSlice";
import userReducer from "../Counter/loginSlice";
import registSliceReducer from "../Counter/registerSlice";
import movie from "../Counter/movieSlice";
import genre from "../Counter/genresSlice";
import searchGen from "../Counter/searchGenSlice";
import search from "../Counter/searchSlice";
import allMovie from "../Counter/allMovieSlice";
import detail from "../Counter/detailSlice";
import cast from "../Counter/detailSlice";
import video from "../Counter/detailSlice";
import auth from "../Counter/auth";
import Alert from "../../components/Alert";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    user: userReducer,
    userRegist: registSliceReducer,
    loginGoogle: loginGoogle,
    movies: movie,
    genre: genre,
    allMovie: allMovie,
    search: search,
    searchGen: searchGen,
    // detail: detailSliceReducer,
    detail: detail,
    cast: cast,
    video: video,
    auth: auth,
    Alert: Alert,
  },
});
