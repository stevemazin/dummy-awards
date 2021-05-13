import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import {
  checkAuthenticated,
  loadUser,
  googleAuthenticate,
} from "../store/actions/auth";

const Layout = (props) => {
  const { checkAuthenticated, loadUser, googleAuthenticate } = props;
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

  return (
    <>
      <Navbar />
    </>
  );
};

export default connect(null, {
  checkAuthenticated,
  loadUser,
  googleAuthenticate,
})(Layout);
