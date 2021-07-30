import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "../Utilities/Container";
import { accentColor, neutral, navyBlue, breakpoints } from "../Utilities";
import { setMobile, setNavSolid, setNavTransparent } from "../../store/actions";
import { useMediaQuery } from "react-responsive";
import MenuToggle from "./MenuToggle";
import MobileNavbarLinks from "./MobileNavLinks";
import DefaultNavLinks from "./DefaultNavLinks";
import { isMobile } from "react-device-detect";
import { useDispatch } from "react-redux";
import dummyLogo from "../../assets/da.svg";

const NavContainer = styled(Container)`
  height: 100%;
`;

const NavSection = styled.nav`
  height: 6rem;
  width: 100%;
  position: sticky;
  top: 0;
  margin-top: -6rem;
  font-size: 1.6rem;
  z-index: 9999;
  transition: all 200ms ease-in-out;
  color: ${({ navBgColor }) =>
    navBgColor === "transparent" ? neutral[100] : navyBlue[300]};

  .link-btn {
    background-color: transparent;
    height: 4.2rem;
    width: fit-content;
    padding: 0 1rem;
    outline: none;
    border: none;
    color: inherit;
    display: flex;
    align-items: center;

    &:hover {
      color: ${accentColor[300]};
    }

    span {
      margin-left: 0.4rem;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 4.2rem;

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

const LogoGfx = styled.img`
  height: 4rem;

  @media screen and (max-width: ${breakpoints.Medium}) {
    height: 3.6rem;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    height: 3.2rem;
  }
`;

const Nav = ({ isAuthenticated, heroIsVisible, stickyNav, navBgColor }) => {
  const dispatch = useDispatch();
  const isTabletWidth = useMediaQuery({ maxWidth: breakpoints.Tablet });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isTabletWidth) {
      setMobile(true);
      dispatch(setNavSolid());
    } else {
      dispatch(setMobile(false));
      heroIsVisible && dispatch(setNavTransparent());
    }
  }, [isTabletWidth, dispatch, heroIsVisible]);

  const getNavStyleName = (navBgColor, stickyNav) => {
    let navClassNames = "";

    if (navBgColor === "#2d5d78") {
      navClassNames = "inView";
    } else {
      navClassNames = "notInView";
    }

    if (stickyNav) {
      navClassNames += " sticky-nav-styles";
    }

    return navClassNames;
  };

  return (
    <NavSection
      className={getNavStyleName(navBgColor, stickyNav)}
      navBgColor={navBgColor}
    >
      <NavContainer>
        <NavWrapper>
          <LeftSection>
            <Link to="/">
              <LogoGfx src={dummyLogo} />
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
    stickyNav: state.ui.stickyNav,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {
  setNavSolid,
  setNavTransparent,
  setMobile,
})(Nav);
