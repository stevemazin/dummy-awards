import React from "react";
import styled from "styled-components";
import { Container, navyBlue, neutral } from "../../Utilities";
import NewsCard from "./NewsCard";
import Slider from "react-slick";

const NewsSection = styled.section`
  background-color: ${navyBlue[300]};
  width: 100%;
  height: 70rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: stretch;
  align-items: center;
  justify-content: center;
`;

const NewsWrapper = styled.div`
  width: 100%;
  order: 0;
  flex: 0 1 auto;
  align-self: center;

  .newsHeader {
    color: ${neutral[100]};
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const NewsCarousel = (props) => {
  const { posts } = props;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <NewsSection>
      <NewsWrapper>
        <Container>
          <h3 className="newsHeader">Event News</h3>
          <Slider {...settings}>
            {posts &&
              posts.map((post) => {
                return (
                  <NewsCard
                    newsHeading={post.headline}
                    storyImg={post.photo_thumb}
                    previewTxt={post.intro}
                  />
                );
              })}
            <p>No Posts To Show</p>
          </Slider>
        </Container>
      </NewsWrapper>
    </NewsSection>
  );
};

export default NewsCarousel;
