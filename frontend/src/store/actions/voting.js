import * as actionTypes from "./actionTypes";
import axios from "axios";

// actionCreators
export const submitVote =
  (categoryVotedName, selectedCategory, selectedChoice, voterId) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      song_choice: selectedChoice,
      voter_id: voterId,
      category: selectedCategory,
    });

    let catVotedUrl = "";

    if (categoryVotedName === "songs") {
      catVotedUrl = "songs";
    } else if (categoryVotedName === "movies") {
      catVotedUrl = "movies";
    } else {
      catVotedUrl = "artists";
    }

    console.log("CatVotedUrl: " + catVotedUrl);
    console.log("body: " + body);
    console.log(`${process.env.REACT_APP_API_URL}/${catVotedUrl}/vote/`);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/${catVotedUrl}/vote/`,
        config,
        body
      );

      if (!res.data.error) {
        dispatch({
          type: actionTypes.CAST_VOTE_IN_CATEGORY_SUCCESS,
        });
      } else {
        console.log("Falling for you...");
        dispatch({
          type: actionTypes.CAST_VOTE_IN_CATEGORY_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: actionTypes.CAST_VOTE_IN_CATEGORY_FAIL,
        payload: {
          msg: "Error casting the vote...",
        },
      });
    }
  };

// set the choice in a category
export const setChoice = (
  nomineeName,
  votingSectionInView,
  allCatData,
  voterData
) => {
  return {
    type: actionTypes.SET_CHOICE_IN_CAT,
    payload: {
      nomineeName: nomineeName,
      catData: allCatData,
      votingSectionInView: votingSectionInView,
      voterData: voterData,
    },
  };
};
