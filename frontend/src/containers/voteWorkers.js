import {
  setVotingSectionInView,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
  setCurrentSongCategory,
  clearChoiceData,
} from "../store/actions";

export const setPrevious = (
  currentSection,
  totalCategoriesInSection,
  currentSectionInd,
  songCategories,
  movieCategories,
  artistCategories,
  dispatch
) => {
  const currentIndex = parseInt(currentSectionInd, 10);
  let previousCatInSection = null;

  if (currentIndex - 1 < 0) {
    previousCatInSection = parseInt(totalCategoriesInSection) - 1;
  } else {
    previousCatInSection = currentIndex - 1;
  }

  if (currentSection === "songs") {
    dispatch(setCurrentSongCategory(previousCatInSection));
    dispatch(
      setVotingSectionInView("songs", songCategories[previousCatInSection])
    );
    dispatch(clearChoiceData());
  } else if (currentSection === "movies") {
    dispatch(setCurrentMovieCategory(previousCatInSection));
    dispatch(
      setVotingSectionInView("movies", movieCategories[previousCatInSection])
    );
    dispatch(clearChoiceData());
  } else {
    dispatch(setCurrentArtistCategory(previousCatInSection));
    dispatch(
      setVotingSectionInView("artists", artistCategories[previousCatInSection])
    );
    dispatch(clearChoiceData());
  }
};

export const setNext = (
  currentSection,
  totalCategoriesInSection,
  currentSectionInd,
  songCategories,
  movieCategories,
  artistCategories,
  dispatch
) => {
  const currentIndex = parseInt(currentSectionInd, 10);
  let nextCatInSection = null;

  if (currentIndex + 1 >= parseInt(totalCategoriesInSection)) {
    nextCatInSection = 0;
  } else {
    nextCatInSection = currentIndex + 1;
  }

  if (currentSection === "songs") {
    dispatch(setCurrentSongCategory(nextCatInSection));
    dispatch(setVotingSectionInView("songs", songCategories[nextCatInSection]));
    dispatch(clearChoiceData());
  } else if (currentSection === "movies") {
    dispatch(setCurrentMovieCategory(nextCatInSection));
    dispatch(
      setVotingSectionInView("movies", movieCategories[nextCatInSection])
    );
    dispatch(clearChoiceData());
  } else {
    dispatch(setCurrentArtistCategory(nextCatInSection));
    dispatch(
      setVotingSectionInView("artists", artistCategories[nextCatInSection])
    );
    dispatch(clearChoiceData());
  }
};

export const getSectionAndTotalCategories = (
  votingSectionInView,
  currentSongCategory,
  totalSongCategories,
  currentMovieCategory,
  totalMovieCategories,
  currentArtistCategory,
  totalArtistCategories
) => {
  let currentSectionIndex = null;
  let totalCategoriesInCurrentSection = null;

  if (votingSectionInView === "songs") {
    currentSectionIndex = currentSongCategory;
    totalCategoriesInCurrentSection = totalSongCategories;
  } else if (votingSectionInView === "movies") {
    currentSectionIndex = currentMovieCategory;
    totalCategoriesInCurrentSection = totalMovieCategories;
  } else {
    currentSectionIndex = currentArtistCategory;
    totalCategoriesInCurrentSection = totalArtistCategories;
  }

  return { currentSectionIndex, totalCategoriesInCurrentSection };
};
