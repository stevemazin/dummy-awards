import * as actionTypes from "./actionTypes";
import axios from "axios";

// actionCreators
export const fetchMovieCategories = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/movies/categories/`,
      config
    );

    dispatch({
      type: actionTypes.FETCH_ALL_MOVIE_CATEGORIES_SUCCESS,
      payload: {
        data: res.data,
        totalMovieCategories: res.data.length,
      },
    });

    // if (res.data.length !== 0) {
    //   dispatch(setCurrentMovieCategory(0));
    // }
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_ALL_MOVIE_CATEGORIES_FAIL,
      msg: "Error fetching categories....",
    });
  }
};

export const setCurrentMovieCategory = (currentMovieCat) => {
  return {
    type: actionTypes.SET_CURRENT_MOVIE_CATEGORY,
    payload: currentMovieCat,
  };
};
