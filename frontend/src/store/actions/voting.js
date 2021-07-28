import * as actionTypes from "./actionTypes";
import axios from "axios";
import { showPopupMessage, clearPopupMessage } from "./ui";
import toast from "react-hot-toast";

// actionCreators
export const submitVote =
  (categoryVotedName, selectedCategory, selectedChoice, voterId) =>
  async (dispatch) => {
    if (voterId) {
      // If voter id is not null, validate the vote before submitting
      if (selectedChoice) {
        // If selected choice is not null, continue with the validation

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

            toast.success(message);
          } else {
            dispatch({
              type: actionTypes.CAST_VOTE_IN_CATEGORY_FAIL,
              payload: {
                msg: res.data.error,
              },
            });

            toast(res.data.error);
          }
        } catch (err) {
          console.log(err.response.data);
          dispatch({
            type: actionTypes.CAST_VOTE_IN_CATEGORY_FAIL,
            payload: {
              msg: "Looks like you voted here already...",
              error: err,
            },
          });
          const toastMessage = "Looks like you voted here already...";
          toast.error(toastMessage);
        }
      } else {
        const toastMessage = "You have not selected any nominee...";
        toast.error(toastMessage);
      }
    } else {
      // If voter id is null, show this error message
      const toastMessage = "Please login or create an account to vote...";
      toast.error(toastMessage);
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
