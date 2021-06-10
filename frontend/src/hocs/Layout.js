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
import Popup from "../components/Popup/Popup";
import styled from "styled-components";

const LayoutContainer = styled.div`
  position: relative;
`;

const Layout = (props) => {
  const {
    checkAuthenticated,
    votingMsg,
    loadUser,
    googleAuthenticate,
    fetchLatestPosts,
    fetchSongCategories,
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
    fetchLatestPosts();
    fetchSongCategories();
    setCurrentSongCategory(0);
    setCurrentMovieCategory(0);
    setCurrentArtistCategory(0);
  }, []);

  const showMessage = (votingMsg) => {
    if (votingMsg !== "") {
      const message = votingMsg;
      return message;
    }
  };

  return (
    <LayoutContainer>
      <Navbar />
      {votingMsg && showMessage && <Popup message={votingMsg} />}
      {props.children}
    </LayoutContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    votingMsg: state.ui.msg,
    showMessage: state.ui.showMessage,
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
  fetchSongCategories,
  setVotingSectionInView,
  setCurrentSongCategory,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
})(Layout);
