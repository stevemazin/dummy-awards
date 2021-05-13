import React from "react";
import styled from "styled-components";
import Sidenav from "../components/Sidebar/Sidenav";
import MainSection from "../components/Category/Category";
import { breakpoints } from "../components/Utilities";
import { Container } from "../components/Utilities/Container";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import MiniHero from "../components/Hero/MiniHero/MiniHero";
import Footer from "../components/Footer/Footer";

const VoteWrapper = styled.div`
  font-size: 1.6rem;
`;

const MainSectionWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: min-content;

  @media screen and (max-width: ${breakpoints.Desktop}) {
    grid-template-columns: 22rem 1fr;
  }

  @media screen and (max-width: ${breakpoints.Medium}) {
    grid-template-columns: 1fr;
  }
`;

const Vote = (props) => {
  // console.log(props.match);

  return (
    <>
      <MiniHero />
      <Container>
        <VoteWrapper>
          <MainSectionWrapper>
            <Sidenav />
            <MainSection />
          </MainSectionWrapper>
        </VoteWrapper>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    heroIsVisible: state.ui.heroIsVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchHeroPresence: (heroPresence) => {
      dispatch(actionCreators.switchHeroPresence(heroPresence));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
