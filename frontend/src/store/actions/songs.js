import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setVotingSectionInView } from "./ui";

// actionCreators
// export const fetchSongCategories = () => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   };

//   try {
//     const res = await axios.get(
//       `${process.env.REACT_APP_API_URL}/songs/categories/`,
//       config
//     );

//     dispatch({
//       type: actionTypes.FETCH_ALL_SONG_CATEGORIES_SUCCESS,
//       payload: {
//         data: res.data,
//         totalSongCategories: res.data.length,
//       },
//     });
//   } catch (err) {
//     dispatch({
//       type: actionTypes.FETCH_ALL_SONG_CATEGORIES_FAIL,
//       msg: "Error fetching categories....",
//     });
//   }
// };

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

  return async (dispatch, getState) => {
    const currentState = getState();
    const currentSongCategory = currentState.songs.currentSongCategory;

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

      dispatch(
        setVotingSectionInView(
          "songs",
          res.data[parseInt(currentSongCategory, 10)]
        )
      );
    } catch (err) {
      dispatch({
        type: actionTypes.FETCH_ALL_SONG_CATEGORIES_FAIL,
        msg: "Error fetching categories....",
      });
    }
  };
};
