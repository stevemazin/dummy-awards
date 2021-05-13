import React, { useEffect } from "react";
import styled from "styled-components";
import BigLogo from "../../assets/hero-logo.svg";
import { MainButton } from "../Utilities/Buttons/MainBtn";
import { Paragraph2 } from "../Utilities/Typography";
import { useMediaQuery } from "react-responsive";
import { Breakpoints } from "../Utilities/ResponsiveBreakpoints";
import heroImg from "../../assets/cover-main.jpg";
import { navyBlue, accentColor, neutral } from "../Utilities";
import { Link } from "react-router-dom";
import { useInView, InView } from "react-intersection-observer";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

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
`;
const LogoWrapper = styled.div``;
const LogoGfx = styled.img`
  // height: 10vw;

  /* @media screen and (max-width: 768px) {
    height: 20vw;
  } */
`;

const CallToAction = styled(Link)``;

const HeroWrapper = styled.div``;

const Hero = ({
  setNavTransparent,
  setNavSolid,
  switchHeroPresence,
  switchHeroVisibility,
}) => {
  // const isMobile = useMediaQuery({ maxWidth: Tablet });

  const [ref, inView, entry] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    switchHeroPresence(true);
  }, []);

  return (
    <InView
      onChange={(inView) => {
        console.log("Big Hero In View: " + inView);

        if (inView) {
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
        <HeroWrapper>
          <LogoWrapper>
            <LogoGfx src={BigLogo} />
          </LogoWrapper>
          <Paragraph2>Rewarding Extra Ordinery Work in the Industry</Paragraph2>
          <CallToAction to="/vote">
            <MainButton>Vote Now</MainButton>
          </CallToAction>
        </HeroWrapper>
      </HeroSection>
    </InView>
  );
};

const mapStateToProps = (state) => {
  return {
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
