import { combineReducers } from "redux";
import uiReducer from "./ui";
import authReducer from "./auth";
import blogReducer from "./blog";
import moviesReducer from "./movies";
import songsReducer from "./songs";
import artistsReducer from "./artists";
import votingReducer from "./voting";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  blog: blogReducer,
  movies: moviesReducer,
  songs: songsReducer,
  artists: artistsReducer,
  voting: votingReducer,
});

export default rootReducer;
