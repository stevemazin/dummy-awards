import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  artistCategories: null,
  totalArtistCategories: null,
  currentArtistCategory: null,
  nextArtistCategory: null,
  previousArtistCategory: null,
  msg: null,
};

const artistsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_CURRENT_ARTIST_CATEGORY:
      return updateObject(state, { currentArtistCategory: payload });
    case actionTypes.SET_NEXT_ARTIST_CATEGORY:
      return updateObject(state, { nextArtistCategory: payload });
    case actionTypes.SET_PREV_ARTIST_CATEGORY:
      return updateObject(state, { previousArtistCategory: payload });

    case actionTypes.FETCH_ALL_ARTIST_CATEGORIES_SUCCESS:
      console.log("Fetching artist categories success...");
      return updateObject(state, {
        artistCategories: payload.data,
        totalArtistCategories: payload.totalArtistCategories,
      });

    case actionTypes.FETCH_ALL_ARTIST_CATEGORIES_FAIL:
      console.log("Error fetching artist categories...");
      return updateObject(state, { msg: payload });
    default:
      return state;
  }
};

export default artistsReducer;
