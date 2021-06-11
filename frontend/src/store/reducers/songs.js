import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  songCategories: null,
  totalSongCategories: null,
  currentSongCategory: 0,
  msg: null,
};

const songsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_CURRENT_SONG_CATEGORY:
      return updateObject(state, { currentSongCategory: payload });
    case actionTypes.FETCH_ALL_SONG_CATEGORIES_SUCCESS:
      console.log("Fetching song categories success...");
      return updateObject(state, {
        songCategories: payload.data,
        totalSongCategories: payload.totalSongCategories,
      });

    case actionTypes.FETCH_ALL_SONG_CATEGORIES_FAIL:
      console.log("Error fetching song categories...");
      return updateObject(state, { msg: payload });
    default:
      return state;
  }
};

export default songsReducer;
