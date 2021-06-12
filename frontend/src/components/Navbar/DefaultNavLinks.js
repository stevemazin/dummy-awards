import React, { useState } from "react";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { logout } from "../../store/actions";

const DefaultNavLinks = ({ isAuthenticated, logout }) => {
  const [redirect, setRedirect] = useState(false);

  const logoutUser = () => {
    logout();
    setRedirect(true);
  };

  if (isAuthenticated) {
    // Show authenticated user links if user is authenticated
    return (
      <>
        <button onClick={logoutUser} className="link-btn">
          <FiLogOut />
          <span>Logout</span>
        </button>
        {redirect ? <Redirect to="/" /> : <></>}
      </>
    );
  }

  return (
    // Show guest links if user is not authenticated
    <>
      <NavLink activeClassName="nav-active" className="nav-link" to="/sign-up">
        <FiUserPlus />
        <span>Register</span>
      </NavLink>

      <NavLink activeClassName="nav-active" className="nav-link" to="/login">
        <FiLogIn />
        <span>Login</span>
      </NavLink>
      {redirect ? <Redirect to="/" /> : <></>}
    </>
  );
};

export default connect(null, { logout })(DefaultNavLinks);
