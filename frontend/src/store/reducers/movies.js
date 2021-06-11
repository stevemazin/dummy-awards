import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  movieCategories: null,
  totalMovieCategories: null,
  currentMovieCategory: 0,
  msg: null,
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_CURRENT_MOVIE_CATEGORY:
      return updateObject(state, { currentMovieCategory: payload });
    case actionTypes.FETCH_ALL_MOVIE_CATEGORIES_SUCCESS:
      console.log("Fetching categories success...");
      return updateObject(state, {
        movieCategories: payload.data,
        totalMovieCategories: payload.totalMovieCategories,
      });

    case actionTypes.FETCH_ALL_MOVIE_CATEGORIES_FAIL:
      console.log("Error fetching movie categories...");
      return updateObject(state, { msg: payload });
    default:
      return state;
  }
};

export default moviesReducer;
