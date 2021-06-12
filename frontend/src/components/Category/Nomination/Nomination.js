import React from "react";
import styled from "styled-components";
import {
  accentColor,
  breakpoints,
  green,
  navyBlue,
  neutral,
} from "../../Utilities";
import { setChoice } from "../../../store/actions";
import { connect } from "react-redux";
import { showMessage } from "../../../store/actions/ui";
import CircularTick from "../../Utilities/InlineSVGs/CircularTick";
import SimpleTick from "../../Utilities/InlineSVGs/SimpleTick";

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

  #circularTick {
    height: 5rem;
    path,
    polygon {
      fill: ${green[100]};
    }
  }

  .nominee-info {
    margin-top: 1rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    #smallTick {
      height: 1.9rem;

      .tickArtwork {
        fill: ${green[100]};
      }
    }

    .nominee-info-txt {
      display: inline-block;
      font-size: 1.6rem;
      color: ${({
        tempSelectedNominee,
        tempCatName,
        reduxNominee,
        reduxData,
      }) => {
        if (tempSelectedNominee === reduxNominee && tempCatName === reduxData) {
          return green[300];
        } else {
          return navyBlue[500];
        }
      }};

      margin-right: ${({
        tempSelectedNominee,
        tempCatName,
        reduxNominee,
        reduxData,
      }) => {
        if (tempSelectedNominee === reduxNominee && tempCatName === reduxData) {
          return ".5rem";
        } else {
          return 0;
        }
      }};
    }
  }

  .hide {
    display: none;
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
    showMessage,
    nomineeImg,
    nomineeName,
    votingSectionInView,
    votingSectionInViewData,
    user,
    itemId,
    currentCatName,
    selectedNominee,
  } = props;

  return (
    <NominationContainer
      tempSelectedNominee={itemId}
      tempCatName={currentCatName}
      reduxNominee={selectedNominee}
      reduxData={votingSectionInViewData.cat_name}
    >
      <ImageContainer
        onClick={() => {
          console.log(itemId, currentCatName);
        }}
      >
        <img src={nomineeImg} alt="Nominee" />
        <div className="overlay">
          {itemId === selectedNominee &&
            currentCatName === votingSectionInViewData.cat_name && (
              <CircularTick />
            )}
          <button
            className={
              itemId === selectedNominee &&
              currentCatName === votingSectionInViewData.cat_name
                ? "nominee-select hide"
                : "nominee-select"
            }
            onClick={() => {
              if (!user) {
                showMessage(true, "Login or Create an account to vote...");
              } else {
                let tempChoiceData = {};
                tempChoiceData["nomineeName"] = nomineeName;
                tempChoiceData["votingSectionInView"] = votingSectionInView;
                tempChoiceData["allCatData"] = votingSectionInViewData;
                tempChoiceData["voterData"] = user;
                setChoice(tempChoiceData);
              }
            }}
          >
            Select
          </button>
        </div>
      </ImageContainer>
      <div className="nominee-info">
        <h6 className="nominee-info-txt">{nomineeName}</h6>
        {itemId === selectedNominee &&
          currentCatName === votingSectionInViewData.cat_name && <SimpleTick />}
      </div>
    </NominationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    selectedNominee: state.voting.selectedChoice,
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

export default connect(mapStateToProps, { setChoice, showMessage })(Nomination);
