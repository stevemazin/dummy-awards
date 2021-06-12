import React from "react";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Tickets from "../components/Tickets/Tickets";
import { InView } from "react-intersection-observer";
import SponsorsCarousel from "../components/Carousels/SponsorsCarousel/SponsorsCarousel";
import Steps from "../components/Steps/Steps";
import NewsCarousel from "../components/Carousels/NewsCarousel/NewsCarousel";
import Footer from "../components/Footer/Footer";
import { connect } from "react-redux";
import Navbar from "../components/Navbar/Navbar";

const Home = ({ blogPosts, songCategories, currentSongCategory }) => {
  console.log(currentSongCategory);
  console.log(songCategories);

  return (
    <InView>
      {({ inView, ref, entry }) => (
        <>
          <Navbar />
          <Hero />
          <Intro />
          <Steps />
          <NewsCarousel posts={blogPosts} />
          <Tickets />
          <SponsorsCarousel />
          <Footer />
        </>
      )}
    </InView>
  );
};

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blog.posts,
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

export default connect(mapStateToProps)(Home);
