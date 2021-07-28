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

// Toast
import toast, { Toaster } from "react-hot-toast";

const Home = ({ blogPosts }) => {
  const notify = () => toast("Here is your toast.");

  return (
    <InView>
      <Navbar />
      <Hero />
      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "1.6rem",
            },
          }}
        />
      </div>
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
