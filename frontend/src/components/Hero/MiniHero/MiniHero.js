import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Timer from "../../Timer/Timer";
import { Header3, navyBlue, neutral } from "../../Utilities";
import { useInView, InView } from "react-intersection-observer";
import * as actionCreators from "../../../store/actions";
import heroImg2 from "../../../assets/orange-concert.jpg";

const HeroWrapper = styled.section`
  height: 40rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${neutral[100]};
  height: 60vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImg2});
  background-position: center;
  background-repeat: no-repeat;
`;

const MiniHero = (props) => {
  const [ref, inView, entry] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    props.switchHeroPresence(true);
  }, []);

  return (
    <InView
      onChange={(inView) => {
        console.log("Mini In View: " + inView);

        if (inView) {
          // set nav to transparent if hero is in view
          props.switchHeroVisibility(inView);
          props.setNavTransparent();
        } else {
          // set nav to solid if hero is NOT in view
          props.switchHeroVisibility(inView);
          props.setNavSolid();
        }
      }}
      rootMargin="-350px 0px 0px 0px"
    >
      <HeroWrapper ref={ref}>
        <Timer />
        <Header3>Vote for Your Favorite Artist</Header3>
      </HeroWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(MiniHero);
