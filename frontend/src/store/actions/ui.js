import * as actionTypes from "./actionTypes";

// actionCreators
export const switchHeroPresence = (heroIsPresentVal) => {
  return {
    type: actionTypes.SWITCH_HERO_PRESENCE,
    heroIsPresentVal: heroIsPresentVal,
  };
};

export const switchHeroVisibility = (heroIsVisibleVal) => {
  return {
    type: actionTypes.SWITCH_HERO_VISIBILITY,
    heroIsVisibleVal: heroIsVisibleVal,
  };
};

export const setNavTransparent = (heroIsVisibleVal) => {
  return {
    type: actionTypes.SWITCH_NAV_BG_TRANSPARENT,
    heroIsVisibleVal: heroIsVisibleVal,
  };
};

export const setNavSolid = (heroIsVisibleVal) => {
  return {
    type: actionTypes.SWITCH_NAV_BG_SOLID,
    heroIsVisibleVal: heroIsVisibleVal,
  };
};

export const setVotingSectionInView = (section, sectionData) => {
  return {
    type: actionTypes.SET_VOTING_SECTION_IN_VIEW,
    payload: {
      section: section,
      data: sectionData,
    },
  };
};

export const showPopupMessage = (switchValue, message) => {
  return {
    type: actionTypes.SHOW_POPUP_MESSAGE,
    payload: {
      switchValue: switchValue,
      popupMessage: message,
    },
  };
};

export const setShowLoader = (val) => {
  return {
    type: actionTypes.SHOW_LOADER,
    payload: val,
  };
};

export const clearPopupMessage = () => {
  return {
    type: actionTypes.CLEAR_POPUP_MESSAGE,
  };
};

export const showAuthMessage = (switchValue, message) => {
  return {
    type: actionTypes.SHOW_AUTH_MESSAGE,
    payload: {
      switchValue: switchValue,
      authMessage: message,
    },
  };
};

export const clearAuthMessage = () => {
  return {
    type: actionTypes.CLEAR_AUTH_MESSAGE,
  };
};

export const setMobile = (val) => {
  return {
    type: actionTypes.SET_MOBILE,
    payload: val,
  };
};
