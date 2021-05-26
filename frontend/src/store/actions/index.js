export {
  switchHeroPresence,
  switchHeroVisibility,
  setNavTransparent,
  setNavSolid,
  setVotingSectionInView,
} from "./ui";

export {
  loadUser,
  googleAuthenticate,
  checkAuthenticated,
  login,
  signUp,
  activateUser,
  resetPassword,
  resetPassConfirm,
  logout,
} from "./auth";

export { fetchLatestPosts } from "./blog";

export {
  fetchMovieCategories,
  setCurrentMovieCategory,
  setNextMovieCategory,
  setPrevMovieCategory,
} from "./movies";

export {
  fetchSongCategories,
  setCurrentSongCategory,
  setNextSongCategory,
  setPrevSongCategory,
} from "./songs";

export {
  fetchArtistCategories,
  setCurrentArtistCategory,
  setNextArtistCategory,
  setPrevArtistCategory,
} from "./artists";

export { submitVote, setChoice } from "./voting";
