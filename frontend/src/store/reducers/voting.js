import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  selectedCategory: null,
  selectedChoice: null,
  voterId: null,
  msg: null,
  error: null,
};

const votingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CLEAR_VOTING_CHOICE_DATA:
      return updateObject(state, {
        selectedCategory: null,
        selectedChoice: null,
      });
    case actionTypes.CAST_VOTE_IN_CATEGORY_SUCCESS:
      console.log("Succesfully voted in this category...");
      return updateObject(state, {
        selectedChoice: null,
        selectedCategory: null,
        msg: payload.msg,
        voterId: null,
        successVoteData: payload.data, // Data obtained after the vote is casst succesfuly
        error: null,
      });
    case actionTypes.CAST_VOTE_IN_CATEGORY_FAIL:
      return updateObject(state, {
        selectedChoice: null,
        selectedCategory: null,
        msg: payload.msg,
        error: payload.error,
        voterId: null,
      });

    case actionTypes.SET_CHOICE_IN_CAT:
      const data = payload.catData;

      let votingSection = null;
      let sectionListName = null;

      if (payload.votingSectionInView === "songs") {
        votingSection = "nominated_songs";
        sectionListName = "song_name";
      } else if (payload.votingSectionInView === "movies") {
        votingSection = "nominated_movies";
        sectionListName = "movie_name";
      } else {
        votingSection = "nominated_artists";
        sectionListName = "artist_name";
      }

      let choiceId = null;
      data[votingSection].map((item) => {
        if (item[sectionListName] === payload.nomineeName) {
          choiceId = item["id"];
          console.log(`The chosen id is ${choiceId}`);
        }
        return choiceId;
      });

      // filter
      const choice = choiceId;
      const catId = data["id"];
      const voterId = payload.voterData["id"];

      return updateObject(state, {
        selectedChoice: choice,
        selectedCategory: catId,
        voterId: voterId,
      });

    case actionTypes.RESET_VOTER:
      return updateObject({
        selectedCategory: null,
        selectedChoice: null,
        voterId: null,
        msg: null,
        error: null,
      });
    default:
      return state;
  }
};

export default votingReducer;
