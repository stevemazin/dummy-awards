import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import {
  checkAuthenticated,
  loadUser,
  googleAuthenticate,
  fetchLatestPosts,
  fetchMovieCategories,
  fetchSongCategories,
  fetchArtistCategories,
  setVotingSectionInView,
  setCurrentSongCategory,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
} from "../store/actions";

const Layout = (props) => {
  const {
    checkAuthenticated,
    loadUser,
    googleAuthenticate,
    fetchLatestPosts,
    fetchMovieCategories,
    fetchSongCategories,
    fetchArtistCategories,
    setCurrentSongCategory,
    setCurrentMovieCategory,
    setCurrentArtistCategory,
  } = props;
  let location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search); // grab code and state
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    console.log("State: " + state);
    console.log("Code: " + code);

    if (state && code) {
      googleAuthenticate(state, code);
    } else {
      checkAuthenticated();
      loadUser();
    }
  }, [location]);

  useEffect(() => {
    console.log("Fetching all the data combined...");
    fetchLatestPosts();
    fetchSongCategories();
    fetchMovieCategories();
    fetchArtistCategories();
    setCurrentSongCategory(0);
    setCurrentMovieCategory(0);
    setCurrentArtistCategory(0);
  }, []);

  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movieCategories: state.movies.movieCategories,
    songCategories: state.songs.songCategories,
    artistCategories: state.artists.artistCategories,
    currentSongCategory: state.songs.currentSongCategory,
    currentMovieCategory: state.songs.currentMovieCategory,
    currentArtistCategory: state.songs.currentArtistCategory,
    votingSectionInView: state.ui.votingSectionInView,
    votingSectionInViewData: state.ui.votingSectionInViewData,
  };
};

export default connect(mapStateToProps, {
  checkAuthenticated,
  loadUser,
  googleAuthenticate,
  fetchLatestPosts,
  fetchMovieCategories,
  fetchSongCategories,
  fetchArtistCategories,
  setVotingSectionInView,
  setCurrentSongCategory,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
})(Layout);
