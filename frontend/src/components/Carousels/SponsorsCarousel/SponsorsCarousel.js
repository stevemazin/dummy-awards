import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Container, neutral, accentColor } from "../../Utilities";

import logo1 from "../../../assets/sponsor-logos/b&w/1.png";
import logo2 from "../../../assets/sponsor-logos/b&w/4.png";
import logo3 from "../../../assets/sponsor-logos/b&w/6.png";
import logo4 from "../../../assets/sponsor-logos/b&w/7.png";
import logo5 from "../../../assets/sponsor-logos/b&w/8.png";

const SponsorsWrapper = styled.div`
  padding: 5rem 0 5rem 0;
  width: 100%;
  height: fit-content;
  background-color: ${neutral[300]};

  .sponsor-header {
    margin-bottom: 2rem;
    color: ${accentColor[300]};
    text-align: center;
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

const SponsorLogo = styled.img`
  width: 40vw;
`;

const SponsorsCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <SponsorsWrapper>
      <Container>
        <h2 className="sponsor-header">Proudly Sponsored By</h2>
        <Slider {...settings}>
          <SponsorLogo src={logo1} />
          <SponsorLogo src={logo2} />
          <SponsorLogo src={logo3} />
          <SponsorLogo src={logo4} />
          <SponsorLogo src={logo5} />
        </Slider>
      </Container>
    </SponsorsWrapper>
  );
};

export default SponsorsCarousel;
