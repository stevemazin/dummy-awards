import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import {
  checkAuthenticated,
  googleAuthenticate,
  fetchLatestPosts,
  loadUser,
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
  const { popupMessage, showLoader, latestPosts } = props;

  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const values = queryString.parse(location.search); // grab code and state
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    // console.log("State: " + state);
    // console.log("Code: " + code);

    if (state && code) {
      dispatch(googleAuthenticate(state, code));
    } else {
      dispatch(checkAuthenticated());
      dispatch(loadUser());
    }
  }, [dispatch, location]);

  useEffect(() => {
    if (!latestPosts) {
      dispatch(fetchLatestPosts());
      dispatch(fetchSongCategories());
    }
  }, [latestPosts, dispatch]);

  const showMessage = (popupMessage) => {
    if (popupMessage !== "") {
      const message = popupMessage;
      return message;
    }
  };

  return (
    <LayoutContainer>
      <GlobalStyles />
      {popupMessage && showMessage && <Popup message={popupMessage} />}
      {props.children}
    </LayoutContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    latestPosts: state.blog.posts,
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

export default connect(mapStateToProps, {})(Layout);
