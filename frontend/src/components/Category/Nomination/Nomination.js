import React from "react";
import styled from "styled-components";
import { breakpoints, danger, green } from "../../Utilities";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { showPopupMessage } from "../../../store/actions/ui";
import { setChoice } from "../../../store/actions";
import NominationImage from "./NominationImage";
import toast from "react-hot-toast";

const NominationContainer = styled.div`
  text-align: center;

  #circularTick {
    height: 5rem;
    path,
    polygon {
      fill: ${green[100]};
    }
  }

  .favorite_artist {
    font-size: 3rem;
    color: ${danger[200]};
    cursor: pointer;
    height: 4.2rem;
    width: 4.2rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: transparent;
    transition: all 200ms ease-in;

    &:hover {
      transform: scale(1.5);
    }
  }

  .hide_icon {
    display: none;
  }

  .show_icon {
    display: inline;
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
      font-size: 1.6rem;
      font-weight: ${({
        tempSelectedNominee,
        tempCatName,
        reduxNominee,
        reduxData,
      }) => {
        if (tempSelectedNominee === reduxNominee && tempCatName === reduxData) {
          return "800";
        } else {
          return "500";
        }
      }};
    }
  }

  .hide {
    display: none;
  }
`;

const UtilityContainer = styled.div`
  .nomimation-img {
    min-width: 24rem;
    width: 100%;
    cursor: pointer;
    border-radius: 0.5rem;
    display: block;
    background-color: lightcoral;

    @media screen and (max-width: 1100px) {
      min-width: 22rem;
    }

    @media screen and (max-width: 500px) {
      min-width: 18rem;
    }

    @media screen and (max-width: 450px) {
      min-width: 12rem;
    }

    @media screen and (max-width: ${breakpoints.Tablet}) {
      align-self: center;
      justify-self: center;
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

  const dispatch = useDispatch();

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
        <>
          <NominationImage
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
        </>
      </UtilityContainer>
      <div className="nominee-info">
        <span className="nominee-info-txt">{nomineeName}</span>
        <AiOutlineHeart
          className={
            itemId === selectedNominee &&
            currentCatName === votingSectionInViewData.cat_name
              ? "hide_icon"
              : "show_icon favorite_artist"
          }
          onClick={() => {
            if (!user) {
              toast.error("Login or create an account to continue!");
            } else {
              let tempChoiceData = {};
              tempChoiceData["nomineeName"] = nomineeName;
              tempChoiceData["votingSectionInView"] = votingSectionInView;
              tempChoiceData["allCatData"] = votingSectionInViewData;
              tempChoiceData["voterData"] = user;
              dispatch(setChoice(tempChoiceData));
            }
          }}
        />
        {itemId === selectedNominee &&
          currentCatName === votingSectionInViewData.cat_name && (
            <AiFillHeart
              className={
                itemId === selectedNominee &&
                currentCatName === votingSectionInViewData.cat_name
                  ? "show_icon favorite_artist"
                  : "hide_icon"
              }
            />
          )}
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

export default connect(mapStateToProps, {})(Nomination);
