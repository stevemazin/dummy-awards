import * as actionTypes from "./actionTypes";
import axios from "axios";
import { showMessage, clearMessage } from "./ui";

// actionCreators
export const submitVote =
  (categoryVotedName, selectedCategory, selectedChoice, voterId) =>
  async (dispatch) => {
    if (voterId) {
      // If voter id is not null, validate the vote before submitting
      if (selectedChoice) {
        // If selected choice is not null, continue with the validation
        dispatch(clearMessage());

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

        const getBody = (
          cat_choice,
          selectedChoice,
          voterId,
          selectedCategory
        ) => {
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

        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/${catVotedUrl}/vote/`,
            body,
            config
          );

          if (!res.data.error) {
            const message = `Succesfully voted!`;
            dispatch({
              type: actionTypes.CAST_VOTE_IN_CATEGORY_SUCCESS,
              payload: {
                msg: message,
                data: res.data,
              },
            });
            dispatch(showMessage(true, message));
          } else {
            dispatch({
              type: actionTypes.CAST_VOTE_IN_CATEGORY_FAIL,
              payload: {
                msg: res.data.error,
              },
            });
            dispatch(showMessage(true, res.data.error));
          }
        } catch (err) {
          dispatch({
            type: actionTypes.CAST_VOTE_IN_CATEGORY_FAIL,
            payload: {
              msg: "Looks like you voted here already...",
              error: err,
            },
          });
          dispatch(showMessage(true, "Looks like you voted here already..."));
        }
      } else {
        dispatch(showMessage(true, "You have not selected any nominee..."));
      }
    } else {
      // If voter id is null, show this error message
      dispatch(
        showMessage(true, "Please login or create an account to vote...")
      );
    }
  };

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
