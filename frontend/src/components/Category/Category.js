import React from "react";
import styled from "styled-components";
import { breakpoints } from "../Utilities";
import Nomination from "./Nomination/Nomination";
import { connect } from "react-redux";
import { submitVote } from "../../store/actions";
import { isMobile } from "react-device-detect";
import toast from "react-hot-toast";

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

  gap: 2rem;

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
`;

const BottomContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: end;
`;

const Category = (props) => {
  const {
    categoriesList,
    currentSection,
    selectedCategory,
    selectedChoice,
    voterId,
    submitVote,
    dataIsLoading,
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
              dataIsLoading={dataIsLoading}
              key={category["id"]}
              itemId={category["id"]}
              currentCatName={categoriesList["cat_name"]}
              nomineeImg={category["img"]}
              nomineeName={category[nomineeNameForCat]}
            />
          );
        })}
      </NominationGroup>
      <BottomContainer>
        <button
          className={isMobile ? "mobi-btn" : "btn dsk-solid-btn"}
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
  submitVote,
})(Category);
