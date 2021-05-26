import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  heroIsPresent: true,
  heroIsVisible: true,
  navBgColor: "",
  votingSectionInView: "",
  votingSectionInViewData: null,
  showMessage: false,
  msg: "",
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VOTING_SECTION_IN_VIEW:
      return updateObject(state, {
        votingSectionInView: action.payload.section,
        votingSectionInViewData: action.payload.data,
      });
    case actionTypes.SHOW_MESSAGE:
      return updateObject(state, {
        showMessage: action.payload.switchValue,
        msg: action.payload.msg,
      });
    case actionTypes.CLEAR_MESSAGE:
      return updateObject(state, {
        showMessage: false,
        msg: "",
      });

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
      return updateObject(state, { navBgColor: "#0b0c10" });
    default:
      return state;
  }
};

export default uiReducer;
