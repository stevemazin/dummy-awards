import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/logo.svg";
import { Container } from "../Utilities/Container";
import { accentColor, neutral, breakpoints } from "../Utilities";
import { logout } from "../../store/actions";
import "./Navbar.css";

const NavContainer = styled(Container)`
  height: 100%;
`;

const NavSection = styled.nav`
  height: 6rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 1.6rem;
  z-index: 100;
  transition: all 400ms ease-in-out;

  .link-btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${neutral[100]};
    font-size: 1.6rem;

    &:hover,
    &:active {
      color: ${accentColor[300]};
    }
  }

  .nav-link {
    text-decoration: none;
    color: ${neutral[100]};

    &:hover {
      color: ${accentColor[300]};
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .nav-active {
    color: ${accentColor[300]};
  }
`;

const NavWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightSection = styled.div``;

const LeftSection = styled.div``;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const LogoImg = styled.img`
  height: 3rem;

  @media screen and (max-width: ${breakpoints.Medium}) {
    height: 2.6rem;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    height: 2.4rem;
  }
`;

const Nav = ({ navBgColor, isAuthenticated, logout }) => {
  const [redirect, setRedirect] = useState(false);

  const logoutUser = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => {
    return (
      <>
        <NavLink
          activeClassName="nav-active"
          className="nav-link"
          to="/sign-up"
        >
          Register
        </NavLink>

        <NavLink activeClassName="nav-active" className="nav-link" to="/login">
          Login
        </NavLink>
      </>
    );
  };
  const authenticatedUserLinks = () => {
    return (
      <>
        <button onClick={logoutUser} className="link-btn">
          Logout
        </button>
      </>
    );
  };

  return (
    <NavSection className={navBgColor === "#0b0c10" ? "inView" : "notInView"}>
      <NavContainer>
        <NavWrapper>
          <LeftSection>
            <HomeLink to="/">
              <LogoImg src={logo} />
            </HomeLink>
          </LeftSection>
          <RightSection>
            {isAuthenticated ? authenticatedUserLinks() : guestLinks()}
          </RightSection>
        </NavWrapper>
      </NavContainer>
      {redirect ? <Redirect to="/" /> : <></>}
    </NavSection>
  );
};

const mapStateToProps = (state) => {
  return {
    heroIsPresent: state.ui.heroIsPresent,
    navBgColor: state.ui.navBgColor,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(Nav);
