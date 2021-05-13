import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Tickets from "../components/Tickets/Tickets";
import { InView } from "react-intersection-observer";
import SponsorsCarousel from "../components/Carousels/SponsorsCarousel/SponsorsCarousel";
import Steps from "../components/Steps/Steps";
import NewsCarousel from "../components/Carousels/NewsCarousel/NewsCarousel";
import Footer from "../components/Footer/Footer";
import { connect } from "react-redux";
import { fetchLatestposts } from "../store/actions";

const Home = ({ fetchLatestposts, blogPosts }) => {
  useEffect(() => {
    fetchLatestposts();
  }, []);

  return (
    <InView>
      {({ inView, ref, entry }) => (
        <>
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
  };
};

export default connect(mapStateToProps, { fetchLatestposts })(Home);
