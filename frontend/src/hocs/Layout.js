import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import {
  checkAuthenticated,
  googleAuthenticate,
  fetchLatestPosts,
  loadUser,
} from "../store/actions";
import Popup from "../components/Popup/Popup";
import styled from "styled-components";
import GlobalStyles from "../components/Utilities/globalStyles";

import { Toaster } from "react-hot-toast";

const LayoutContainer = styled.div`
  position: relative;
`;

const Layout = (props) => {
  const { popupMessage, latestPosts } = props;

  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const values = queryString.parse(location.search); // grab code and state
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

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
      <Toaster
        position="top-center"
        toastOptions={{
          // Define default options
          duration: 5000,
          style: {
            fontSize: "1.6rem",
          },
        }}
      />
      {popupMessage && showMessage && <Popup message={popupMessage} />}
      {props.children}
    </LayoutContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    latestPosts: state.blog.posts,
    popupMessage: state.ui.popupMessage,
    showPopupMessage: state.ui.showPopupMessage,
  };
};

export default connect(mapStateToProps, {})(Layout);
