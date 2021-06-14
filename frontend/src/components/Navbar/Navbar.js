import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "../Utilities/Container";
import { accentColor, neutral, navyBlue, breakpoints } from "../Utilities";
import {
  logout,
  setMobile,
  setNavSolid,
  setNavTransparent,
} from "../../store/actions";
import SliqLogo from "../Utilities/InlineSVGs/SliqLogo";
import { useMediaQuery } from "react-responsive";
import MenuToggle from "./MenuToggle";
import MobileNavbarLinks from "./MobileNavLinks";
import DefaultNavLinks from "./DefaultNavLinks";
import { isMobile } from "react-device-detect";

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
  z-index: 999;
  transition: all 200ms ease-in-out;

  .link-btn {
    display: flex;
    align-items: center;
    height: 4.2rem;

    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ navBgColor }) => {
      if (navBgColor === "#2d5d78") {
        return navyBlue[300];
      } else {
        return neutral[300];
      }
    }};
    font-size: 1.6rem;

    &:hover,
    &:active {
      color: ${accentColor[300]};
    }

    span {
      margin-left: 0.5rem;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 4.2rem;

    text-decoration: none;
    color: ${({ navBgColor }) => {
      if (navBgColor === "#2d5d78") {
        return navyBlue[300];
      } else {
        return neutral[300];
      }
    }};

    &:hover {
      color: ${accentColor[300]};
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }

    span {
      margin-left: 0.5rem;
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const LeftSection = styled.div``;

const Nav = ({
  navBgColor,
  isAuthenticated,
  setNavSolid,
  setMobile,
  setNavTransparent,
  heroIsVisible,
}) => {
  const isTabletWidth = useMediaQuery({ maxWidth: breakpoints.Tablet });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isTabletWidth) {
      setMobile(true);
      setNavSolid();
    } else {
      setMobile(false);
      heroIsVisible && setNavTransparent();
    }
  }, [isTabletWidth]);

  return (
    <NavSection
      navBgColor={navBgColor}
      className={navBgColor === "#2d5d78" ? "inView" : "notInView"}
    >
      <NavContainer>
        <NavWrapper>
          <LeftSection>
            <Link to="/">
              <SliqLogo />
            </Link>
          </LeftSection>
          <RightSection>
            {isMobile && (
              <MenuToggle
                isOpen={isOpen}
                toggle={() => {
                  setIsOpen(!isOpen);
                }}
              />
            )}
            {!isMobile && <DefaultNavLinks isAuthenticated={isAuthenticated} />}
          </RightSection>
        </NavWrapper>
      </NavContainer>

      {isOpen && isMobile && (
        <MobileNavbarLinks
          close={() => {
            setIsOpen(false);
          }}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isAuthenticated={isAuthenticated}
        />
      )}
    </NavSection>
  );
};

const mapStateToProps = (state) => {
  return {
    heroIsVisible: state.ui.heroIsVisible,
    heroIsPresent: state.ui.heroIsPresent,
    navBgColor: state.ui.navBgColor,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {
  setNavSolid,
  setNavTransparent,
  setMobile,
})(Nav);
