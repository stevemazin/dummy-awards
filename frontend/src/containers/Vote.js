import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "../components/Category/Category";
import { Container } from "../components/Utilities/Container";
import { connect } from "react-redux";
import MiniHero from "../components/Hero/MiniHero/MiniHero";
import Footer from "../components/Footer/Footer";
import {
  fetchArtistCategories,
  fetchSongCategories,
  fetchMovieCategories,
  setVotingSectionInView,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
  setCurrentSongCategory,
} from "../store/actions";
import { NavLink, Link } from "react-router-dom";
import { accentColor, navyBlue, neutral } from "../components/Utilities";
import Message from "../components/Popup/Popup";

const VoteWrapper = styled.div`
  font-size: 1.6rem;
`;

const SectionNavigator = styled.div`
  margin-bottom: -5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cat-changer-btn {
    z-index: 99;
    outline: none;
    border: none;
    background-color: ${neutral[100]};
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${neutral[200]};
    }

    .section-nav-icons {
      fill: ${accentColor[300]};

      &:hover {
        fill: ${accentColor[400]};
      }
    }
  }
`;

const MainSectionWrapper = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
`;

const VotingCategories = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: fit-content;
  gap: 1rem;

  .cat-link {
    text-align: center;
    text-decoration: none;
    font-size: 1.6rem;
    color: ${navyBlue[300]};
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 5px;
  }

  .cat-link-active {
    color: ${accentColor[300]};
    border: 1px solid ${accentColor[300]};
  }
`;

const Vote = (props) => {
  const {
    songCategories,
    movieCategories,
    artistCategories,
    currentArtistCategory,
    currentMovieCategory,
    currentSongCategory,
    votingSectionInView,
    votingSectionInViewData,
    setVotingSectionInView,
    fetchArtistCategories,
    fetchSongCategories,
    fetchMovieCategories,
    totalSongCategories,
    totalArtistCategories,
    totalMovieCategories,
    setCurrentMovieCategory,
    setCurrentArtistCategory,
    setCurrentSongCategory,
  } = props;

  // Get movies and artist data
  useEffect(() => {
    fetchArtistCategories();
    fetchMovieCategories();
  }, []);

  let currentSectionIndex = null;
  let totalCategoriesInCurrentSection = null;

  if (votingSectionInView === "songs") {
    currentSectionIndex = currentSongCategory;
    totalCategoriesInCurrentSection = totalSongCategories;
  } else if (votingSectionInView === "movies") {
    currentSectionIndex = currentMovieCategory;
    totalCategoriesInCurrentSection = totalMovieCategories;
  } else {
    currentSectionIndex = currentArtistCategory;
    totalCategoriesInCurrentSection = totalArtistCategories;
  }

  const setPrevious = (
    currentSection,
    totalCategoriesInSection,
    currentSectionInd
  ) => {
    const currentIndex = parseInt(currentSectionInd, 10);
    let previousCatInSection = null;

    if (currentIndex - 1 < 0) {
      previousCatInSection = parseInt(totalCategoriesInSection) - 1;
    } else {
      previousCatInSection = currentIndex - 1;
    }

    console.log("Current: " + currentSectionIndex);
    console.log("Previous: " + previousCatInSection);

    if (currentSection === "songs") {
      setCurrentSongCategory(previousCatInSection);
      setVotingSectionInView("songs", songCategories[previousCatInSection]);
    } else if (currentSection === "movies") {
      setCurrentMovieCategory(previousCatInSection);
      setVotingSectionInView("movies", movieCategories[previousCatInSection]);
    } else {
      setCurrentArtistCategory(previousCatInSection);
      setVotingSectionInView("artists", artistCategories[previousCatInSection]);
    }
  };

  const setNext = (
    currentSection,
    totalCategoriesInSection,
    currentSectionInd
  ) => {
    const currentIndex = parseInt(currentSectionInd, 10);
    let nextCatInSection = null;

    if (currentIndex + 1 >= parseInt(totalCategoriesInSection)) {
      nextCatInSection = 0;
    } else {
      nextCatInSection = currentIndex + 1;
    }

    console.log("Current: " + currentSectionIndex);
    console.log("Next: " + nextCatInSection);

    if (currentSection === "songs") {
      setCurrentSongCategory(nextCatInSection);
      setVotingSectionInView("songs", songCategories[nextCatInSection]);
    } else if (currentSection === "movies") {
      setCurrentMovieCategory(nextCatInSection);
      setVotingSectionInView("movies", movieCategories[nextCatInSection]);
    } else {
      setCurrentArtistCategory(nextCatInSection);
      setVotingSectionInView("artists", artistCategories[nextCatInSection]);
    }
  };

  return (
    <>
      <MiniHero />
      <Container>
        <VoteWrapper>
          <VotingCategories>
            <NavLink
              onClick={() => {
                fetchSongCategories();
                setVotingSectionInView(
                  "songs",
                  songCategories[parseInt(currentSongCategory, 10)]
                );
              }}
              to="/vote/songs"
              className="cat-link"
              activeClassName="cat-link-active"
            >
              Songs
            </NavLink>
            <NavLink
              onClick={() => {
                fetchMovieCategories();
                setVotingSectionInView(
                  "movies",
                  movieCategories[parseInt(currentMovieCategory, 10)]
                );
              }}
              to="/vote/movies"
              className="cat-link"
              activeClassName="cat-link-active"
            >
              Movies
            </NavLink>
            <NavLink
              onClick={() => {
                fetchArtistCategories();
                setVotingSectionInView(
                  "artists",
                  artistCategories[parseInt(currentArtistCategory, 10)]
                );
              }}
              to="/vote/artists"
              className="cat-link"
              activeClassName="cat-link-active"
            >
              Artists
            </NavLink>
          </VotingCategories>
          <SectionNavigator>
            <button
              onClick={() => {
                console.log("Setting Previous");
                setPrevious(
                  votingSectionInView,
                  totalCategoriesInCurrentSection,
                  currentSectionIndex
                );
              }}
              className="cat-changer-btn"
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
                console.log("Setting Next");
                setNext(
                  votingSectionInView,
                  totalCategoriesInCurrentSection,
                  currentSectionIndex
                );
              }}
              className="cat-changer-btn"
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
          <MainSectionWrapper>
            {votingSectionInViewData ? (
              <Category
                currentSectionIndex={currentSectionIndex}
                currentSection={votingSectionInView}
                categoriesList={votingSectionInViewData}
                totalCategoriesInSection={totalCategoriesInCurrentSection}
              />
            ) : (
              <div>No data on nomination categories</div>
            )}
          </MainSectionWrapper>
        </VoteWrapper>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    heroIsVisible: state.ui.heroIsVisible,
    movieCategories: state.movies.movieCategories,
    songCategories: state.songs.songCategories,
    artistCategories: state.artists.artistCategories,
    currentSongCategory: state.songs.currentSongCategory,
    currentMovieCategory: state.movies.currentMovieCategory,
    currentArtistCategory: state.artists.currentArtistCategory,
    votingSectionInView: state.ui.votingSectionInView,
    votingSectionInViewData: state.ui.votingSectionInViewData,
    totalSongCategories: state.songs.totalSongCategories,
    totalMovieCategories: state.movies.totalMovieCategories,
    totalArtistCategories: state.artists.totalArtistCategories,
  };
};

export default connect(mapStateToProps, {
  setVotingSectionInView,
  fetchArtistCategories,
  fetchSongCategories,
  fetchMovieCategories,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
  setCurrentSongCategory,
})(Vote);
