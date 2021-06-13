import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import {
  checkAuthenticated,
  loadUser,
  googleAuthenticate,
  fetchLatestPosts,
  fetchSongCategories,
} from "../store/actions";
import Popup from "../components/Popup/Popup";
import styled from "styled-components";
import GlobalStyles from "../components/Utilities/globalStyles";
import Loader from "../components/Loader/Loader";

const LayoutContainer = styled.div`
  position: relative;
`;

const Layout = (props) => {
  const {
    checkAuthenticated,
    popupMessage,
    loadUser,
    googleAuthenticate,
    fetchLatestPosts,
    showLoader,
  } = props;
  let location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search); // grab code and state
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    // console.log("State: " + state);
    // console.log("Code: " + code);

    if (state && code) {
      googleAuthenticate(state, code);
    } else {
      checkAuthenticated();
      loadUser();
    }
  }, [location]);

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch songs data in preperation of the user going to the voting page
    const testFetch = async () => {
      await dispatch(fetchSongCategories());
    };
    testFetch();
    fetchLatestPosts();
  }, []);

  const showMessage = (popupMessage) => {
    if (popupMessage !== "") {
      const message = popupMessage;
      return message;
    }
  };

  return (
    <LayoutContainer>
      <GlobalStyles />
      {showLoader && <Loader />}
      {popupMessage && showMessage && <Popup message={popupMessage} />}
      {props.children}
    </LayoutContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoader: state.ui.showLoader,
    popupMessage: state.ui.popupMessage,
    showPopupMessage: state.ui.showPopupMessage,
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
})(Layout);
