import * as actionTypes from "./actionTypes";
import axios from "axios";

// actionCreators
export const fetchSongCategories = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/songs/categories/`,
      config
    );

    dispatch({
      type: actionTypes.FETCH_ALL_SONG_CATEGORIES_SUCCESS,
      payload: {
        data: res.data,
        totalSongCategories: res.data.length,
      },
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_ALL_SONG_CATEGORIES_FAIL,
      msg: "Error fetching categories....",
    });
  }
};

export const setCurrentSongCategory = (currentSongCat) => {
  return {
    type: actionTypes.SET_CURRENT_SONG_CATEGORY,
    payload: currentSongCat,
  };
};

export const setPrevSongCategory = (prevSongCat) => {
  return {
    type: actionTypes.SET_PREV_SONG_CATEGORY,
    payload: prevSongCat,
  };
};

export const setNextSongCategory = (nextSongCat) => {
  return {
    type: actionTypes.SET_NEXT_SONG_CATEGORY,
    payload: nextSongCat,
  };
};
