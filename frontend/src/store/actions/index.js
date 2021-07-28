export {
  switchHeroPresence,
  switchHeroVisibility,
  setNavTransparent,
  setNavSolid,
  setVotingSectionInView,
  setMobile,
  setShowLoader,
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

export { setCurrentMovieCategory } from "./movies";

export { setCurrentSongCategory } from "./songs";

export { setCurrentArtistCategory } from "./artists";

export { setChoice, clearChoiceData, resetVoter } from "./voting";
