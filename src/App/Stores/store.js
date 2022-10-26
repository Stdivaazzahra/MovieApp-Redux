import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from "../Counter/counterSlice";
import movie from '../Counter/movieSlice';
import auth from '../Counter/auth';

export const store = configureStore({
  reducer: {
    movies: movie,
    auth: auth,
  },
});
