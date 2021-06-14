import React, { useEffect } from "react";
import styled from "styled-components";
import BigLogo from "../../assets/hero-logo.svg";
import heroImg from "../../assets/cover-main.jpg";
import { neutral } from "../Utilities";
import { Link } from "react-router-dom";
import { useInView, InView } from "react-intersection-observer";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { isMobile } from "react-device-detect";

const HeroSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${neutral[100]};

  height: 100vh;
  width: 100%;
  margin-top: ${(props) => (props.heroIsVisible ? "-6rem" : 0)};
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImg});
  background-position: cover;
  background-repeat: no-repeat;

  .tag-line {
    margin: 1rem 0;
    font-size: 1.6rem;
  }
`;

const LogoGfx = styled.img`
  width: 55vw;

  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`;

const Hero = ({
  setNavTransparent,
  setNavSolid,
  switchHeroPresence,
  switchHeroVisibility,
  // isMobile,
}) => {
  const [ref] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    switchHeroPresence(true);
  }, []);

  return (
    <InView
      onChange={(inView) => {
        console.log("Big Hero In View: " + inView);

        if (!isMobile && inView) {
          // set nav to transparent if hero is in view
          switchHeroVisibility(inView);
          setNavTransparent();
        } else {
          // set nav to solid if hero is NOT in view
          switchHeroVisibility(inView);
          setNavSolid();
        }
      }}
      rootMargin="-90% 0px 0px 0px"
    >
      <HeroSection ref={ref}>
        <>
          <div>
            <LogoGfx src={BigLogo} />
          </div>
          <p className="tag-line">
            Rewarding Extra Ordinery Work in the Industry
          </p>
          <Link
            className={
              isMobile ? "link-btn mobi-link-btn" : "link-btn dsk-link-btn"
            }
            to="/vote"
          >
            Vote Now
          </Link>
        </>
      </HeroSection>
    </InView>
  );
};

const mapStateToProps = (state) => {
  return {
    isMobile: state.ui.isMobile,
    heroIsVisible: state.ui.heroIsVisible,
    heroIsPresent: state.ui.heroIsPresent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchHeroPresence: (heroPresence) =>
      dispatch(actionCreators.switchHeroPresence(heroPresence)),
    switchHeroVisibility: (heroVisibility) =>
      dispatch(actionCreators.switchHeroVisibility(heroVisibility)),
    setNavTransparent: () => dispatch(actionCreators.setNavTransparent()),
    setNavSolid: () => dispatch(actionCreators.setNavSolid()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
