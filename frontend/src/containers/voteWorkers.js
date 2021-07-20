import {
  setVotingSectionInView,
  setCurrentMovieCategory,
  setCurrentArtistCategory,
  setCurrentSongCategory,
  clearChoiceData,
} from "../store/actions";

const setPrevious = (
  currentSection,
  totalCategoriesInSection,
  currentSectionInd
) => {
  const currentIndex = parseInt(currentSectionInd, 10);
  let previousCatInSection = null;

  if (currentIndex - 1 < 0) {
    previousCatInSection = parseInt(totalCategoriesInSection) - 1;
  } else {
    previousCatInSection = currentIndex - 1;
  }

  console.log("Current: " + currentSectionIndex);
  console.log("Previous: " + previousCatInSection);

  if (currentSection === "songs") {
    setCurrentSongCategory(previousCatInSection);
    setVotingSectionInView("songs", songCategories[previousCatInSection]);
    clearChoiceData();
  } else if (currentSection === "movies") {
    setCurrentMovieCategory(previousCatInSection);
    setVotingSectionInView("movies", movieCategories[previousCatInSection]);
    clearChoiceData();
  } else {
    setCurrentArtistCategory(previousCatInSection);
    setVotingSectionInView("artists", artistCategories[previousCatInSection]);
    clearChoiceData();
  }
};

const setNext = (
  currentSection,
  totalCategoriesInSection,
  currentSectionInd
) => {
  const currentIndex = parseInt(currentSectionInd, 10);
  let nextCatInSection = null;

  if (currentIndex + 1 >= parseInt(totalCategoriesInSection)) {
    nextCatInSection = 0;
  } else {
    nextCatInSection = currentIndex + 1;
  }

  console.log("Current: " + currentSectionIndex);
  console.log("Next: " + nextCatInSection);

  if (currentSection === "songs") {
    setCurrentSongCategory(nextCatInSection);
    setVotingSectionInView("songs", songCategories[nextCatInSection]);
    clearChoiceData();
  } else if (currentSection === "movies") {
    setCurrentMovieCategory(nextCatInSection);
    setVotingSectionInView("movies", movieCategories[nextCatInSection]);
    clearChoiceData();
  } else {
    setCurrentArtistCategory(nextCatInSection);
    setVotingSectionInView("artists", artistCategories[nextCatInSection]);
    clearChoiceData();
  }
};
