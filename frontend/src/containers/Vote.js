import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "../components/Category/Category";
import { Container } from "../components/Utilities/Container";
import { connect, useDispatch } from "react-redux";
import MiniHero from "../components/Hero/MiniHero/MiniHero";
import Footer from "../components/Footer/Footer";
import {
  setVotingSectionInView,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
  setCurrentSongCategory,
  clearChoiceData,
} from "../store/actions";
import { Link } from "react-router-dom";
import { accentColor, navyBlue, neutral } from "../components/Utilities";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import * as actionTypes from "../store/actions/actionTypes";

const VoteWrapper = styled.div`
  font-size: 1.6rem;

  .nomination-errors {
    text-align: center;
  }
`;

const SectionNavigator = styled.div`
  margin-bottom: -5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .cat-changer-btn {
    z-index: 99;
    outline: none;
    border: none;
    background-color: ${neutral[100]};
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 5px;
    cursor: pointer;

    @media (hover) {
      &:hover {
        background-color: ${neutral[200]};
      }
    }

    &:acitve {
      background-color: ${neutral[200]};
    }

    .section-nav-icons {
      fill: ${accentColor[300]};

      @media (hover) {
        &:hover {
          fill: ${accentColor[400]};
        }
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
    totalArtistCategories,
    totalMovieCategories,
    totalSongCategories,
  } = props;

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    async function fetchMovies() {
      try {
        const movies = await axios.get(
          `${process.env.REACT_APP_API_URL}/movies/categories/`,
          config
        );

        dispatch({
          type: actionTypes.FETCH_ALL_MOVIE_CATEGORIES_SUCCESS,
          payload: {
            data: movies.data,
            totalMovieCategories: movies.data.length,
          },
        });
      } catch (err) {
        dispatch({
          type: actionTypes.FETCH_ALL_SONG_CATEGORIES_FAIL,
          msg: "Error fetching movies....",
        });
      }
    }

    async function fetchArtists() {
      try {
        const artists = await axios.get(
          `${process.env.REACT_APP_API_URL}/artists/categories/`,
          config
        );

        dispatch({
          type: actionTypes.FETCH_ALL_ARTIST_CATEGORIES_SUCCESS,
          payload: {
            data: artists.data,
            totalArtistCategories: artists.data.length,
          },
        });
      } catch (err) {
        dispatch({
          type: actionTypes.FETCH_ALL_MOVIE_CATEGORIES_FAIL,
          msg: "Error fetching movies....",
        });
      }
    }

    async function fetchSongs() {
      try {
        const songs = await axios.get(
          `${process.env.REACT_APP_API_URL}/songs/categories/`,
          config
        );

        dispatch({
          type: actionTypes.FETCH_ALL_SONG_CATEGORIES_SUCCESS,
          payload: {
            data: songs.data,
            totalSongCategories: songs.data.length,
          },
        });
        dispatch(setVotingSectionInView("songs", songs.data[0]));
      } catch (err) {
        dispatch({
          type: actionTypes.FETCH_ALL_MOVIE_CATEGORIES_FAIL,
          msg: "Error fetching songs....",
        });
      }
    }

    if (!songCategories || !movieCategories || !artistCategories) {
      setIsLoading(true);
      fetchSongs();
      fetchMovies();
      fetchArtists();
      setTimeout(() => {
        setIsLoading(false);
      }, [2000]);
    }
  }, [dispatch]);

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

    if (currentSection === "songs") {
      dispatch(setCurrentSongCategory(previousCatInSection));
      dispatch(
        setVotingSectionInView("songs", songCategories[previousCatInSection])
      );
      dispatch(clearChoiceData());
    } else if (currentSection === "movies") {
      dispatch(setCurrentMovieCategory(previousCatInSection));
      dispatch(
        setVotingSectionInView("movies", movieCategories[previousCatInSection])
      );
      dispatch(clearChoiceData());
    } else {
      dispatch(setCurrentArtistCategory(previousCatInSection));
      dispatch(
        setVotingSectionInView(
          "artists",
          artistCategories[previousCatInSection]
        )
      );
      dispatch(clearChoiceData());
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

    if (currentSection === "songs") {
      dispatch(setCurrentSongCategory(nextCatInSection));
      dispatch(
        setVotingSectionInView("songs", songCategories[nextCatInSection])
      );
      dispatch(clearChoiceData());
    } else if (currentSection === "movies") {
      dispatch(setCurrentMovieCategory(nextCatInSection));
      dispatch(
        setVotingSectionInView("movies", movieCategories[nextCatInSection])
      );
      dispatch(clearChoiceData());
    } else {
      dispatch(setCurrentArtistCategory(nextCatInSection));
      dispatch(
        setVotingSectionInView("artists", artistCategories[nextCatInSection])
      );
      dispatch(clearChoiceData());
    }
  };

  return (
    <>
      <Navbar />
      <MiniHero />
      <Container>
        <VoteWrapper>
          <VotingCategories>
            <Link
              onClick={() => {
                dispatch(
                  setVotingSectionInView(
                    "songs",
                    songCategories[parseInt(currentSongCategory, 10)]
                  )
                );
                dispatch(clearChoiceData());
              }}
              to="/vote"
              className={
                votingSectionInView === "songs"
                  ? "cat-link cat-link-active"
                  : "cat-link"
              }
            >
              Songs
            </Link>
            <Link
              onClick={() => {
                dispatch(
                  setVotingSectionInView(
                    "movies",
                    movieCategories[parseInt(currentMovieCategory, 10)]
                  )
                );
                dispatch(clearChoiceData());
              }}
              to="/vote"
              className={
                votingSectionInView === "movies"
                  ? "cat-link cat-link-active"
                  : "cat-link"
              }
            >
              Movies
            </Link>
            <Link
              onClick={() => {
                dispatch(
                  setVotingSectionInView(
                    "artists",
                    artistCategories[parseInt(currentArtistCategory, 10)]
                  )
                );
                dispatch(clearChoiceData());
              }}
              to="/vote"
              className={
                votingSectionInView === "artists"
                  ? "cat-link cat-link-active"
                  : "cat-link"
              }
            >
              Artists
            </Link>
          </VotingCategories>
          <SectionNavigator>
            <button
              onClick={() => {
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
                dataIsLoading={isLoading}
                currentSectionIndex={currentSectionIndex}
                currentSection={votingSectionInView}
                categoriesList={votingSectionInViewData}
                totalCategoriesInSection={totalCategoriesInCurrentSection}
              />
            ) : (
              <div className="nomination-errors">
                No data for this category!
              </div>
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

export default connect(mapStateToProps)(Vote);
