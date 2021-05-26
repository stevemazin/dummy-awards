import React from "react";
import styled from "styled-components";
import { breakpoints } from "../Utilities";
import Nomination from "./Nomination/Nomination";
import { connect } from "react-redux";
import {
  setCurrentSongCategory,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
  submitVote,
} from "../../store/actions";

const CategoryContainer = styled.div`
  .cat-header {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: ${breakpoints.Tablet}) {
      margin-bottom: 2rem;
      font-size: 1.6rem;
    }
  }
`;

const NominationGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: fit-content;
  gap: 2rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
`;

const BottomContainer = styled.div`
  display: flex;

  #cast-vote {
    justify-self: flex-end;
    margin-right: 4rem;
  }
`;

const Category = (props) => {
  const {
    categoriesList,
    currentSection,
    selectedCategory,
    selectedChoice,
    voterId,
    submitVote,
  } = props;

  let nomineeListName;
  let nomineeNameForCat;

  if (currentSection === "songs") {
    nomineeListName = "nominated_songs";
    nomineeNameForCat = "song_name";
  } else if (currentSection === "movies") {
    nomineeListName = "nominated_movies";
    nomineeNameForCat = "movie_name";
  } else {
    nomineeListName = "nominated_artists";
    nomineeNameForCat = "artist_name";
  }

  return (
    <CategoryContainer>
      <h4 className="cat-header">{categoriesList["cat_name"]}</h4>
      <NominationGroup>
        {categoriesList[nomineeListName].map((category) => {
          return (
            <Nomination
              key={category["id"]}
              nomineeImg={category["img"]}
              nomineeName={category[nomineeNameForCat]}
            />
          );
        })}
      </NominationGroup>
      <BottomContainer>
        <button
          id="cast-vote"
          className="btn btn-primary"
          onClick={() => {
            submitVote(
              currentSection,
              selectedCategory,
              selectedChoice,
              voterId
            );
          }}
        >
          Submit Vote
        </button>
      </BottomContainer>
    </CategoryContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    currentSection: state.ui.votingSectionInView,
    selectedCategory: state.voting.selectedCategory,
    selectedChoice: state.voting.selectedChoice,
    voterId: state.voting.voterId,
  };
};

export default connect(mapStateToProps, {
  setCurrentSongCategory,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
  submitVote,
})(Category);
