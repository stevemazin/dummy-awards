import React from "react";
import styled from "styled-components";
import { FooterContainer } from "../Utilities/Container";
import logo from "../../assets/da.svg";

import { navyBlue, accentColor, neutral, breakpoints } from "../Utilities";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import { animateScroll as scroll } from "react-scroll";
import { FaAngleUp } from "react-icons/fa";

const FooterSection = styled.section`
  padding: 2rem 0 0 0;
  font-size: 1.6rem;
  height: fit-content;
  background-color: ${navyBlue[400]};

  .footer_bottom {
    background-color: ${navyBlue[500]};
    text-align: center;
    padding: 1.6rem 0;
  }
`;

const SubSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .sub_right {
  }
  .sub_left {
    display: flex;
    align-items: center;
  }
`;

const LogoGfx = styled.img`
  margin-right: 2rem;
  height: 4rem;

  @media screen and (max-width: ${breakpoints.Medium}) {
    height: 3.6rem;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    height: 3.2rem;
  }
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

const DevSection = styled.p`
  line-height: 1.6;
  color: ${neutral[300]};
`;

const ToTop = styled.button`
  font-size: 1.8rem;
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${navyBlue[500]};
  color: ${neutral[100]};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${accentColor[300]};
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <SubSection>
          <div className="sub_left">
            <LogoGfx src={logo} />
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
          </div>

          <div className="sub_right">
            <ToTop
              className=""
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              <FaAngleUp />
            </ToTop>
          </div>
        </SubSection>
      </FooterContainer>
      <div className="footer_bottom">
        <DevSection>Crafted by Steve Designs</DevSection>
      </div>
    </FooterSection>
  );
};

export default Footer;
