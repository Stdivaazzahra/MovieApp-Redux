import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../Counter/counterSlice";
import movie from "../Counter/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movie,
  },
});
