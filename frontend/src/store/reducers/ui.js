import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  isMobile: false,
  heroIsPresent: true,
  heroIsVisible: true,
  navBgColor: "",
  votingSectionInView: "",
  votingSectionInViewData: null,
  catNameInView: null,
  showPopupMessage: false,
  popupMessage: "",
  showAuthMessage: false,
  authMessage: "",
  showLoader: false,
  stickyNav: true,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CAT_NAME_IN_VIEW:
      return updateObject(state, {
        catNameInView: action.payload,
      });

    case actionTypes.SET_VOTING_SECTION_IN_VIEW:
      return updateObject(state, {
        votingSectionInView: action.payload.section,
        votingSectionInViewData: action.payload.data,
      });

    case actionTypes.SHOW_LOADER:
      return updateObject(state, {
        showLoader: action.payload,
      });

    case actionTypes.SHOW_POPUP_MESSAGE:
      return updateObject(state, {
        showPopupMessage: action.payload.switchValue,
        popupMessage: action.payload.popupMessage,
      });
    case actionTypes.CLEAR_POPUP_MESSAGE:
      return updateObject(state, {
        showPopupMessage: false,
        popupMessage: "",
      });

    case actionTypes.SHOW_AUTH_MESSAGE:
      return updateObject(state, {
        showAuthMessage: action.payload.switchValue,
        authMessage: action.payload.authMessage,
      });
    case actionTypes.CLEAR_AUTH_MESSAGE:
      return updateObject(state, {
        showAuthMessage: false,
        authMessage: "",
      });

    case actionTypes.SET_MOBILE:
      return updateObject(state, { isMobile: action.payload });
    case actionTypes.SWITCH_HERO_VISIBILITY:
      console.log("Switching to alt color (ui.js)");
      return updateObject(state, { heroIsVisible: action.heroIsVisibleVal });
    case actionTypes.SWITCH_HERO_PRESENCE:
      console.log("Changing hero status on this page...");
      return updateObject(state, { heroIsPresent: action.heroIsPresentVal });
    case actionTypes.SWITCH_NAV_BG_TRANSPARENT:
      console.log("Switching to transparent (ui.js)");
      return updateObject(state, { navBgColor: "transparent" });
    case actionTypes.SWITCH_NAV_BG_SOLID:
      console.log("Switching to solid (ui.js)");
      return updateObject(state, { navBgColor: "#2d5d78" });
    case actionTypes.SET_NAV_STICKY_TOP:
      return updateObject(state, {
        stickyNav: true,
      });
    case actionTypes.SET_NAV_FLUID:
      return updateObject(state, {
        stickyNav: false,
      });
    default:
      return state;
  }
};

export default uiReducer;
