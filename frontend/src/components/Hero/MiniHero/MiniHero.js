import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Timer from "../../Timer/Timer";
import { breakpoints, neutral } from "../../Utilities";
import { useInView, InView } from "react-intersection-observer";
import heroImg2 from "../../../assets/orange-concert.jpg";
import VoteTypeWritter from "../../TypeWriter/VoteTypeWritter";
import { useDispatch } from "react-redux";

import {
  setNavSolid,
  setNavTransparent,
  switchHeroPresence,
  switchHeroVisibility,
} from "../../../store/actions";

const HeroWrapper = styled.section`
  height: 40rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${neutral[100]};
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImg2});
  background-position: center;
  background-repeat: no-repeat;

  .typing-effect {
    margin: 0.5rem 0;
    font-weight: 400;
    font-size: 3rem;

    @media screen and (max-width: ${breakpoints.Tablet}) {
      font-size: 2rem;
    }
  }
`;

const MiniHero = (props) => {
  const dispatch = useDispatch();

  const [ref] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    dispatch(switchHeroPresence(true));
  }, [dispatch]);

  return (
    <InView
      onChange={(inView) => {
        if (!props.isMobile && inView) {
          // set nav to transparent if hero is in view
          dispatch(switchHeroVisibility(inView));
          dispatch(setNavTransparent());
        } else {
          // set nav to solid if hero is NOT in view
          dispatch(switchHeroVisibility(inView));
          dispatch(setNavSolid());
        }
      }}
      rootMargin="-350px 0px 0px 0px"
    >
      <HeroWrapper ref={ref}>
        <Timer />
        <h3 className="typing-effect">
          <VoteTypeWritter />
        </h3>
      </HeroWrapper>
    </InView>
  );
};

const mapStateToProps = (state) => {
  return {
    heroIsVisible: state.ui.heroIsVisible,
    heroIsPresent: state.ui.heroIsPresent,
    isMobile: state.ui.isMobile,
  };
};

export default connect(mapStateToProps, {})(MiniHero);
