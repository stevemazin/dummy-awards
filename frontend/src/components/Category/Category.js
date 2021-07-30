import React, { useEffect } from "react";
import styled from "styled-components";
import { accentColor, breakpoints, neutral } from "../Utilities";
import Nomination from "./Nomination/Nomination";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";
import { submitVotePromise, validateVote } from "./votingLogic";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  getSectionAndTotalCategories,
  setNext,
  setPrevious,
} from "../../containers/voteWorkers";
import { setCatNameInView } from "../../store/actions";
import { animateScroll as scroll } from "react-scroll";

const CategoryContainer = styled.div``;

const NominationGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;

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

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
`;

const BottomContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const SectionNavigator = styled.div``;

const Category = (props) => {
  const {
    categoriesList,
    currentSection,
    selectedCategory,
    selectedChoice,
    user,
    dataIsLoading,
    votingSectionInView,
    artistCategories,
    songCategories,
    movieCategories,
    currentSongCategory,
    currentMovieCategory,
    currentArtistCategory,
    totalMovieCategories,
    totalArtistCategories,
    totalSongCategories,
    goToTopOfList,
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCatNameInView(categoriesList["cat_name"]));
  });

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

  const { currentSectionIndex, totalCategoriesInCurrentSection } =
    getSectionAndTotalCategories(
      votingSectionInView,
      currentSongCategory,
      totalSongCategories,
      currentMovieCategory,
      totalMovieCategories,
      currentArtistCategory,
      totalArtistCategories
    );

  return (
    <CategoryContainer>
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
        <SectionNavigator>
          <button
            onClick={() => {
              setPrevious(
                votingSectionInView,
                totalCategoriesInCurrentSection,
                currentSectionIndex,
                songCategories,
                movieCategories,
                artistCategories,
                dispatch
              );
              goToTopOfList();
            }}
            className="icon-navigator-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="section-nav-icons"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={() => {
              setNext(
                votingSectionInView,
                totalCategoriesInCurrentSection,
                currentSectionIndex,
                songCategories,
                movieCategories,
                artistCategories,
                dispatch
              );
              goToTopOfList();
            }}
            className="icon-navigator-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="section-nav-icons"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </SectionNavigator>
        <button
          className={isMobile ? "mobi-btn" : "btn dsk-solid-btn"}
          onClick={() => {
            const res = validateVote(
              currentSection,
              selectedCategory,
              selectedChoice,
              user
            );

            if (res.message) {
              toast.error(res.message);
            } else {
              toast.promise(submitVotePromise(res), {
                loading: "Voting...",
                success: <b>Vote submitted successfully!</b>,
                error: <b>Looks like you voted here already!</b>,
              });

              console.log(res);
            }
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
    user: state.auth.user,
    votingSectionInView: state.ui.votingSectionInView,
    movieCategories: state.movies.movieCategories,
    songCategories: state.songs.songCategories,
    artistCategories: state.artists.artistCategories,
    currentSongCategory: state.songs.currentSongCategory,
    currentMovieCategory: state.movies.currentMovieCategory,
    currentArtistCategory: state.artists.currentArtistCategory,
    totalSongCategories: state.songs.totalSongCategories,
    totalMovieCategories: state.movies.totalMovieCategories,
    totalArtistCategories: state.artists.totalArtistCategories,
  };
};

export default connect(mapStateToProps, {})(Category);
