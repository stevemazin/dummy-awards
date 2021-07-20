import React from "react";
import styled from "styled-components";
import {
  accentColor,
  breakpoints,
  green,
  navyBlue,
  neutral,
} from "../../Utilities";
import { connect } from "react-redux";
import SimpleTick from "../../Utilities/InlineSVGs/SimpleTick";
import { isMobile } from "react-device-detect";
import MobileNomination from "./MobileNomination";
import DesktopNomination from "./DesktopNomination";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import ContentLoader from "react-content-loader";

const NominationContainer = styled.div`
  text-align: center;

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

const UtilityContainer = styled.div`
  position: relative;

  .nomimation-img {
    min-width: 24rem;
    width: 100%;

    border-radius: 0.5rem;
    display: block;
    background-color: lightcoral;

    @media screen and (max-width: 1100px) {
      min-width: 22rem;
    }

    @media screen and (max-width: 500px) {
      min-width: 18rem;
    }

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

  @media (hover) {
    &:hover {
      .overlay {
        opacity: 1;
      }
    }
  }
`;

const Nomination = (props) => {
  const {
    votingSectionInViewData,
    itemId,
    currentCatName,
    selectedNominee,
    dataIsLoading,
    nomineeImg,
    nomineeName,
    user,
    votingSectionInView,
  } = props;

  console.log("This is mobile: " + isMobile);

  return (
    <NominationContainer
      tempSelectedNominee={itemId}
      tempCatName={currentCatName}
      reduxNominee={selectedNominee}
      reduxData={votingSectionInViewData.cat_name}
    >
      <UtilityContainer
        onClick={() => {
          console.log(itemId, currentCatName);
        }}
      >
        {dataIsLoading ? (
          <ContentLoader style={{ width: "100%" }} viewBox="0 0 280 280">
            <rect x="0" y="0" rx="5" ry="5" width="280" height="280" />
          </ContentLoader>
        ) : (
          <>
            {isMobile && !dataIsLoading && (
              <MobileNomination
                dataIsLoading={dataIsLoading}
                nomineeImg={nomineeImg}
                nomineeName={nomineeName}
                votingSectionInView={votingSectionInView}
                votingSectionInViewData={votingSectionInViewData}
                user={user}
              />
            )}
            {!isMobile && !dataIsLoading && (
              <DesktopNomination
                dataIsLoading={dataIsLoading}
                nomineeImg={nomineeImg}
                itemId={itemId}
                selectedNominee={selectedNominee}
                currentCatName={currentCatName}
                votingSectionInViewData={votingSectionInViewData}
                user={user}
                nomineeName={nomineeName}
                votingSectionInView={votingSectionInView}
              />
            )}
          </>
        )}
      </UtilityContainer>

      {dataIsLoading && (
        <ContentLoader
          style={{ width: "80%", marginTop: "1.2rem" }}
          viewBox="0 0 280 25"
        >
          <rect x="0" y="0" rx="5" ry="5" width="280" height="25" />
        </ContentLoader>
      )}
      {!dataIsLoading && (
        <div className="nominee-info">
          <h6 className="nominee-info-txt">{nomineeName}</h6>
          {itemId === selectedNominee &&
            currentCatName === votingSectionInViewData.cat_name && (
              <SimpleTick />
            )}
        </div>
      )}
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

export default connect(mapStateToProps, {})(Nomination);
