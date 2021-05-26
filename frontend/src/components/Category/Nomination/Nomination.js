import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { accentColor, breakpoints, navyBlue, neutral } from "../../Utilities";
import { setChoice } from "../../../store/actions";
import { connect } from "react-redux";

const NominationContainer = styled.div`
  text-align: center;
  min-height: 24rem;
  min-width: 24rem;

  @media screen and (max-width: ${breakpoints.Desktop}) {
    min-height: 21rem;
    min-width: 21rem;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    min-height: 18rem;
    min-width: 18rem;
  }

  @media screen and (max-width: ${breakpoints.Phone}) {
    min-height: 14rem;
    min-width: 14rem;
  }

  .nominee-info {
    font-size: 1.6rem;
    color: ${navyBlue[500]};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;

  img {
    border-radius: 0.5rem;
    display: block;
    width: 100%;
    height: 100%;

    @media screen and (max-width: ${breakpoints.Tablet}) {
      align-self: center;
      justify-self: center;
    }
  }

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    width: 100%;
    height: 100%;
    transition: 0.3s ease;
    opacity: 0;
    font-size: 2rem;
    text-align: center;
    border-radius: 5px;

    .nominee-select {
      cursor: pointer;
      border: none;
      background-color: ${accentColor[300]};
      color: ${neutral[100]};
      border-radius: 5px;
      padding: 1rem 1.5rem;
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const Nomination = (props) => {
  const {
    setChoice,
    nomineeImg,
    nomineeName,
    votingSectionInView,
    votingSectionInViewData,
    user,
  } = props;

  return (
    <NominationContainer>
      <ImageContainer>
        <img src={nomineeImg} alt="Nominee" />
        <div className="overlay">
          <button
            className="nominee-select"
            onClick={() => {
              setChoice(
                nomineeName,
                votingSectionInView,
                votingSectionInViewData,
                user
              );
            }}
          >
            Select Nominee
          </button>
        </div>
      </ImageContainer>
      <h6 className="nominee-info">{nomineeName}</h6>
    </NominationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    heroIsVisible: state.ui.heroIsVisible,
    movieCategories: state.movies.movieCategories,
    songCategories: state.songs.songCategories,
    artistCategories: state.artists.artistCategories,
    currentSongCategory: state.songs.currentSongCategory,
    currentMovieCategory: state.movies.currentMovieCategory,
    currentArtistCategory: state.artists.currentArtistCategory,
    votingSectionInView: state.ui.votingSectionInView,
    votingSectionInViewData: state.ui.votingSectionInViewData,
    totalSongCategories: state.songs.totalSongCategories,
    totalMovieCategories: state.movies.totalMovieCategories,
    totalArtistCategories: state.artists.totalArtistCategories,
  };
};

export default connect(mapStateToProps, { setChoice })(Nomination);
