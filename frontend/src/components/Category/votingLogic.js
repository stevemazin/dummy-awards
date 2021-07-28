import axios from "axios";

export const validateVote = (
  categoryVotedName,
  selectedCategory,
  selectedChoice,
  user
) => {
  if (user) {
    // If voter id is not null, validate the vote before submitting
    if (selectedChoice) {
      // If selected choice is not null, continue with the validation
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

      const getBody = (cat_choice, selectedChoice, user, selectedCategory) => {
        if (cat_choice === "artist_choice") {
          return JSON.stringify({
            artist_choice: selectedChoice,
            voter_id: user.id,
            category: selectedCategory,
          });
        } else if (cat_choice === "song_choice") {
          return JSON.stringify({
            song_choice: selectedChoice,
            voter_id: user.id,
            category: selectedCategory,
          });
        } else {
          return JSON.stringify({
            movie_choice: selectedChoice,
            voter_id: user.id,
            category: selectedCategory,
          });
        }
      };

      const body = getBody(
        catVoteNameTransformed,
        selectedChoice,
        user,
        selectedCategory
      );
      // if everything is good, return the necessary data for voting
      return {
        body,
        catVotedUrl,
      };
    } else {
      // If user has not selected anything
      const message = "You did not select anything...";
      return { message };
    }
  } else {
    // If voter id is null, show this error message
    const message = "Login or create an account to continue!";
    return { message };
  }
};

export const submitVotePromise = async (votingData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/${votingData.catVotedUrl}/vote/`,
      votingData.body,
      config
    );
    if (res.status !== 201) {
      throw new Error(res.data.error);
    }
  } catch (err) {
    // console.log(err.response.data.error);
    throw new Error(err.response.data.error);
  }
};
