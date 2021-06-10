import React from "react";
import styled from "styled-components";
import { Container, navyBlue, neutral } from "../../Utilities";
import NewsCard from "./NewsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  .slick-list {
    margin: 0 -1rem;
  }
  .slick-slide > div {
    padding: 0 1rem;
  }

  .posts-error {
    color: ${neutral[100]};
    font-size: 2rem;
  }
`;

const ErrorWrapper = styled.div`
  background-color: ${navyBlue[300]};
  width: 100%;
  height: 70rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .posts-error {
    color: ${neutral[100]};
    font-size: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
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
    centerMode: true,
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

  if (posts.length === 0) {
    return (
      <ErrorWrapper>
        <div className="posts-error">
          <p>No posts to show for now, we'll be posting soon!</p>
        </div>
      </ErrorWrapper>
    );
  }

  return (
    <NewsSection>
      <NewsWrapper>
        <Container>
          <h3 className="newsHeader">Event News</h3>
          <Slider {...settings}>
            <NewsCard
              newsHeading={posts[1].headline}
              storyThumbnail={posts[1].main_photo_thumbnail}
              previewTxt={posts[1].intro}
              slug={posts[1].slug}
            />
            <NewsCard
              newsHeading={posts[2].headline}
              storyThumbnail={posts[2].main_photo_thumbnail}
              previewTxt={posts[2].intro}
              slug={posts[2].slug}
            />
            <NewsCard
              newsHeading={posts[3].headline}
              storyThumbnail={posts[3].main_photo_thumbnail}
              previewTxt={posts[3].intro}
              slug={posts[3].slug}
            />
            <NewsCard
              newsHeading={posts[4].headline}
              storyThumbnail={posts[4].main_photo_thumbnail}
              previewTxt={posts[4].intro}
              slug={posts[4].slug}
            />
          </Slider>
        </Container>
      </NewsWrapper>
    </NewsSection>
  );
};

export default NewsCarousel;
