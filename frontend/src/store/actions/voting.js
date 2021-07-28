import * as actionTypes from "./actionTypes";

// set the choice in a category
export const setChoice = (choiceObj) => {
  return {
    type: actionTypes.SET_CHOICE_IN_CAT,
    payload: {
      nomineeName: choiceObj.nomineeName,
      catData: choiceObj.allCatData,
      votingSectionInView: choiceObj.votingSectionInView,
      voterData: choiceObj.voterData,
    },
  };
};

// clear the choice data when shifting to a different category
export const clearChoiceData = () => {
  return {
    type: actionTypes.CLEAR_VOTING_CHOICE_DATA,
  };
};

// clear the choice data when shifting to a different category
export const resetVoter = () => {
  return {
    type: actionTypes.RESET_VOTER,
  };
};
