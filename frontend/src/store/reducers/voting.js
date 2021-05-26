import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  selectedCategory: null,
  selectedChoice: null,
  voterId: null,
  msg: null,
};

const votingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CAST_VOTE_IN_CATEGORY_SUCCESS:
      console.log("Succesfully voted in this category...");
      return updateObject(state, {
        selectedChoice: null,
        selectedCategory: null,
        voterId: null,
        msg: "Succesfully voted in this category",
      });
    case actionTypes.CAST_VOTE_IN_CATEGORY_FAIL:
      return updateObject(state, {
        msg: payload.msg,
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
    default:
      return state;
  }
};

export default votingReducer;
