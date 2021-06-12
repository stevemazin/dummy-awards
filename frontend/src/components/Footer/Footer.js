import React from "react";
import styled from "styled-components";
import { FooterContainer } from "../Utilities/Container";
import logo from "../../assets/logo.svg";
import { Header4, Paragraph } from "../Utilities/Typography";
import { Link } from "react-router-dom";
import { navyBlue, accentColor, neutral, breakpoints } from "../Utilities";
import LinkItem from "./LinkItem/LinkItem";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const FooterSection = styled.section`
  padding: 2rem 0 0 0;
  font-size: 1.6rem;
  height: fit-content;
  background-color: ${navyBlue[300]};
`;

const FooterWrapper = styled.div`
  padding: 3rem 0 2rem 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  .second .third {
    justify-self: center;

    background-color: red;
  }

  @media screen and (max-width: ${breakpoints.Medium}) {
    grid-template-columns: repeat(2, 1fr);

    .second .last {
      justify-self: center;
    }
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    grid-template-columns: 1fr;

    .first .second .third .last {
      justify-self: start;
    }
  }
`;

const SubSection = styled.div``;

const LogoGfx = styled.img`
  height: 4rem;

  @media screen and (max-width: ${breakpoints.Medium}) {
    height: 3.6rem;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    height: 3.2rem;
  }
`;

const LinksHeader = styled(Header4)`
  margin-bottom: 0.5rem;
`;

const LinksList = styled.ul`
  list-style: none;
`;

const FooterParagraph = styled.p`
  line-height: 1.6;
  color: ${neutral[300]};
`;

const SocialsContainer = styled.div`
  margin-top: 1rem;

  .social-ext-link {
    margin-right: 1rem;
  }
`;

const SocialGfx = styled.img`
  height: 3rem;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.2, 1.2) rotateZ(5deg);
  }
`;

const BottomSection = styled.div`
  font-size: 1.4rem;
  padding: 1.5rem 0;
  border-top: 0.15rem solid ${accentColor[300]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${breakpoints.Phone}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ExtraLinks = styled.div``;

const DevSection = styled.p`
  line-height: 1.6;
  color: ${neutral[300]};
`;

const UtilityParagraph = styled(Paragraph)`
  color: ${neutral[100]};
`;

const ExtraLink = styled(Link)`
  text-decoration: none;
  color: ${neutral[100]};

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    color: ${accentColor[300]};
  }

  @media screen and (max-width: ${breakpoints.Phone}) {
    line-height: 1.6;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterWrapper>
          <SubSection className="first">
            <LogoGfx src={logo} />
            <UtilityParagraph>Since 2005</UtilityParagraph>
          </SubSection>
          <SubSection className="second">
            <LinksHeader>sliq-awards</LinksHeader>
            <LinksList>
              <li>
                <LinkItem destination="/" destinationTag="Home" />
              </li>
              <li>
                <LinkItem destination="/gallery" destinationTag="Gallery" />
              </li>
              <li>
                <LinkItem destination="/vote/songs" destinationTag="Vote" />
              </li>
              <li>
                <LinkItem destination="/winners" destinationTag="Winners" />
              </li>
            </LinksList>
          </SubSection>
          <SubSection className="third">
            <LinksHeader>quick-links</LinksHeader>
            <LinksList>
              <li>
                <LinkItem
                  destination="/submit-work"
                  destinationTag="Submit your work"
                />
              </li>
              <li>
                <LinkItem
                  destination="/advertise-with-us"
                  destinationTag="Advertise with us"
                />
              </li>
              <li>
                <LinkItem
                  destination="/sponsor-us"
                  destinationTag="Sponsor us"
                />
              </li>
            </LinksList>
          </SubSection>
          <SubSection className="last">
            <LinksHeader>contacts</LinksHeader>
            <FooterParagraph>Sliq Mega Towers,</FooterParagraph>
            <FooterParagraph>Pluto</FooterParagraph>
            <FooterParagraph>0700 500 900</FooterParagraph>
            <FooterParagraph>sliq@sliqawards.info</FooterParagraph>
            <SocialsContainer>
              <a className="social-ext-link" href="https://www.instagram.com/">
                <SocialGfx className="insta" src={instagram} />
              </a>
              <a
                className="social-ext-link facebook"
                href="https://www.facebook.com/"
              >
                <SocialGfx className="facebook" src={facebook} />
              </a>
              <a
                className="social-ext-link twitter"
                href="https://www.twitter.com/"
              >
                <SocialGfx className="twitter" src={twitter} />
              </a>
            </SocialsContainer>
          </SubSection>
        </FooterWrapper>
        <BottomSection>
          <ExtraLinks>
            <ExtraLink to="/terms">terms & conditions</ExtraLink>
            <ExtraLink to="/privacy-policy">privacy policy</ExtraLink>
          </ExtraLinks>
          <DevSection>Developed by Stevie Designs</DevSection>
        </BottomSection>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
