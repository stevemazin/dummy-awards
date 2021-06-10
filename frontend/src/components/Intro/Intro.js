import React from "react";
import styled from "styled-components";
import { Container } from "../Utilities/Container";
import { Paragraph } from "../Utilities/Typography";
import introPic from "../../assets/rapper-on-stage.jpg";
import { breakpoints } from "../Utilities/ResponsiveBreakpoints";

const IntroSection = styled.section`
  font-size: 1.6rem;
  margin: 2rem 0;

  @media screen and (max-width: ${breakpoints.Medium}) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    font-size: 1.3rem;
  }
`;

const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 43rem 43rem;
  grid-template-rows: 45rem;
  gap: 2rem;
  align-content: center;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.Medium}) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
  }
`;

const TextWrapper = styled.div`
  width: 95%;
  align-self: center;
  justify-self: center;

  @media screen and (max-width: ${breakpoints.Medium}) {
    width: 100%;
  }
`;

const Img = styled.img`
  border-radius: 0.5rem;
  height: auto;
  width: 100%;
  max-width: 45rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: ${breakpoints.Medium}) {
    max-width: 100%;
  }
`;

const SectionHeader = styled.h1`
  @media screen and (max-width: ${breakpoints.Medium}) {
    text-align: center;
  }
`;

const ImgWrapper = styled.div`
  align-self: center;
  justify-self: center;

  width: 100%;
  /* object-fit: cover; */
`;

const Intro = () => {
  return (
    <IntroSection>
      <Container>
        <IntroWrapper>
          <TextWrapper>
            <SectionHeader>A Show for Creatives</SectionHeader>
            <Paragraph>
              Sliq Awards is considered the most prestigious award show in
              music, and digital design. For over 15 years, the Sliq Master
              Crafter has been regarded as one of the top prizes in the creative
              industry. Sliq Events Inc. has had a rich legacy of honoring some
              of the most groundbreaking ideas, created by some of the most
              remarkable minds in the industry. Our main agenda is to celebrate
              the art culture, and reward the players.
            </Paragraph>
          </TextWrapper>

          <ImgWrapper>
            <Img src={introPic} alt="Intro Image" />
          </ImgWrapper>
        </IntroWrapper>
      </Container>
    </IntroSection>
  );
};

export default Intro;
