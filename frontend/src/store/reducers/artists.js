import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  artistCategories: null,
  totalArtistCategories: null,
  currentArtistCategory: 0,
  msg: null,
};

const artistsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_CURRENT_ARTIST_CATEGORY:
      return updateObject(state, { currentArtistCategory: payload });
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
