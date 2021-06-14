import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setShowLoader, setVotingSectionInView } from "./ui";

export const setCurrentSongCategory = (currentSongCat) => {
  return {
    type: actionTypes.SET_CURRENT_SONG_CATEGORY,
    payload: currentSongCat,
  };
};

export const fetchSongCategories = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  return async (dispatch) => {
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
      dispatch(setShowLoader(false));
      dispatch({
        type: actionTypes.FETCH_ALL_SONG_CATEGORIES_FAIL,
        msg: "Error fetching categories....",
      });
    }
  };
};
