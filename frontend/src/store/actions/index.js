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

export { fetchLatestPosts, getSinglePost } from "./blog";

export { fetchMovieCategories, setCurrentMovieCategory } from "./movies";

export { fetchSongCategories, setCurrentSongCategory } from "./songs";

export { fetchArtistCategories, setCurrentArtistCategory } from "./artists";

export { submitVote, setChoice } from "./voting";
