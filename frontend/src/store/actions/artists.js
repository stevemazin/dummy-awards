import * as actionTypes from "./actionTypes";
import axios from "axios";

// actionCreators
export const fetchArtistCategories = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/artists/categories/`,
      config
    );

    dispatch({
      type: actionTypes.FETCH_ALL_ARTIST_CATEGORIES_SUCCESS,
      payload: {
        data: res.data,
        totalArtistCategories: res.data.length,
      },
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_ALL_ARTIST_CATEGORIES_FAIL,
      msg: "Error fetching categories....",
    });
  }
};

export const setCurrentArtistCategory = (currentArtistCat) => {
  return {
    type: actionTypes.SET_CURRENT_ARTIST_CATEGORY,
    payload: currentArtistCat,
  };
};

export const setPrevArtistCategory = (pretArtistCat) => {
  return {
    type: actionTypes.SET_PREV_ARTIST_CATEGORY,
    payload: pretArtistCat,
  };
};

export const setNextArtistCategory = (nextArtistCat) => {
  return {
    type: actionTypes.SET_NEXT_ARTIST_CATEGORY,
    payload: nextArtistCat,
  };
};
