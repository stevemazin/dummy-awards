import * as actionTypes from "./actionTypes";

// actionCreators
export const setCurrentMovieCategory = (currentMovieCat) => {
  return {
    type: actionTypes.SET_CURRENT_MOVIE_CATEGORY,
    payload: currentMovieCat,
  };
};
