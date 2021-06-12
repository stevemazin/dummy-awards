import React, { useState } from "react";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../store/actions";
import { Container, neutral } from "../Utilities";

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  background-color: ${neutral[100]};
  z-index: -99;

  &:last-child {
    margin-bottom: 1.5rem;
  }
`;

const MobiNav = styled.div`
  height: 100%;
  width: 100%;
`;

const MobileNavbarLinks = ({ isOpen, isAuthenticated, logout, setIsOpen }) => {
  const [redirect, setRedirect] = useState(false);

  const logoutUser = () => {
    logout();
    setRedirect(true);
  };

  if (!isAuthenticated && isOpen) {
    // Show guest links if user is not authenticated
    return (
      <MobiNav>
        <LinksWrapper>
          <Container>
            <NavLink
              activeClassName="nav-active"
              className="nav-link"
              to="/sign-up"
            >
              <FiUserPlus />
              <span>Register</span>
            </NavLink>

            <NavLink
              activeClassName="nav-active"
              className="nav-link"
              to="/login"
            >
              <FiLogIn />
              <span>Login</span>
            </NavLink>
            {redirect ? <Redirect to="/" /> : <></>}
          </Container>
        </LinksWrapper>
      </MobiNav>
    );
  }

  return (
    // Show authenticated user links if user is authenticated
    <MobiNav>
      {isOpen && isAuthenticated && (
        <LinksWrapper>
          <Container>
            <button
              onClick={() => {
                logoutUser();
                setIsOpen(false);
              }}
              className="link-btn"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
            {redirect ? <Redirect to="/" /> : <></>}
          </Container>
        </LinksWrapper>
      )}
    </MobiNav>
  );
};

export default connect(null, { logout })(MobileNavbarLinks);
