import * as actionTypes from "./actionTypes";
import axios from "axios";

// export const submitVote =
//   (categoryVotedName, selectedCategory, selectedChoice, voterId) =>
//   async (dispatch) => {};

// actionCreators
export const submitVote =
  (categoryVotedName, selectedCategory, selectedChoice, voterId) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let catVotedUrl = "";
    let catVoteNameTransformed = "";

    if (categoryVotedName === "songs") {
      catVoteNameTransformed = "song_choice";
      catVotedUrl = "songs";
    } else if (categoryVotedName === "movies") {
      catVoteNameTransformed = "movie_choice";
      catVotedUrl = "movies";
    } else {
      catVoteNameTransformed = "artist_choice";
      catVotedUrl = "artists";
    }

    const getBody = (cat_choice, selectedChoice, voterId, selectedCategory) => {
      if (cat_choice === "artist_choice") {
        return JSON.stringify({
          artist_choice: selectedChoice,
          voter_id: voterId,
          category: selectedCategory,
        });
      } else if (cat_choice === "song_choice") {
        return JSON.stringify({
          song_choice: selectedChoice,
          voter_id: voterId,
          category: selectedCategory,
        });
      } else {
        return JSON.stringify({
          movie_choice: selectedChoice,
          voter_id: voterId,
          category: selectedCategory,
        });
      }
    };

    const body = getBody(
      catVoteNameTransformed,
      selectedChoice,
      voterId,
      selectedCategory
    );

    console.log("CatVotedUrl: " + catVotedUrl);
    console.log("body: " + body);
    console.log(`${process.env.REACT_APP_API_URL}/${catVotedUrl}/vote/`);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/${catVotedUrl}/vote/`,
        body,
        config
      );

      if (!res.data.error) {
        dispatch({
          type: actionTypes.CAST_VOTE_IN_CATEGORY_SUCCESS,
          payload: {
            msg: `Succesfully voted!`,
            data: res.data,
          },
        });
      } else {
        dispatch({
          type: actionTypes.CAST_VOTE_IN_CATEGORY_FAIL,
          payload: {
            msg: "Something went wrong...",
          },
        });
      }
    } catch (err) {
      dispatch({
        type: actionTypes.CAST_VOTE_IN_CATEGORY_FAIL,
        payload: {
          msg: "Bad Request! Looks like you voted already in this category.",
          error: err,
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
