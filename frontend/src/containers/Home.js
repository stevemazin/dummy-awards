import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Tickets from "../components/Tickets/Tickets";
import { InView } from "react-intersection-observer";
import SponsorsCarousel from "../components/Carousels/SponsorsCarousel/SponsorsCarousel";
import Steps from "../components/Steps/Steps";
import NewsCarousel from "../components/Carousels/NewsCarousel/NewsCarousel";
import Footer from "../components/Footer/Footer";
import { connect, useDispatch } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import { fetchLatestPosts } from "../store/actions";

const Home = ({ blogPosts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Only fetch posts if there are no posts
    if (!blogPosts || blogPosts.length === 0) {
      dispatch(fetchLatestPosts());
    }
  }, []);

  return (
    <InView>
      <Navbar />
      <Hero />
      <Intro />
      <Steps />
      <NewsCarousel posts={blogPosts} />
      <Tickets />
      <SponsorsCarousel />
      <Footer />
    </InView>
  );
};

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blog.posts,
  };
};

export default connect(mapStateToProps)(Home);
