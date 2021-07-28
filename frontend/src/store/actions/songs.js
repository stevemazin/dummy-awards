import * as actionTypes from "./actionTypes";

export const setCurrentSongCategory = (currentSongCat) => {
  return {
    type: actionTypes.SET_CURRENT_SONG_CATEGORY,
    payload: currentSongCat,
  };
};
