import * as actionTypes from "./actionTypes";

// actionCreators
export const setCurrentArtistCategory = (currentArtistCat) => {
  return {
    type: actionTypes.SET_CURRENT_ARTIST_CATEGORY,
    payload: currentArtistCat,
  };
};
