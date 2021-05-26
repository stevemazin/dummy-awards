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
