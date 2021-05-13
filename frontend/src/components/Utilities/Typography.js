import styled from "styled-components";
import { navyBlue, accentColor, neutral } from "./index";
import { breakpoints } from "./ResponsiveBreakpoints";

export const Header1 = styled.h1`
  line-height: 2;
`;

export const Header2 = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: ${navyBlue[300]};
`;

export const Header3 = styled.h4`
  line-height: 1.8;
  font-size: 3rem;
  font-weight: 600;
  color: ${neutral[100]};

  @media screen and (max-width: ${breakpoints.Medium}) {
    line-height: 1.4;
    font-size: 2.6rem;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    line-height: 1.2;
    font-size: 2.3rem;
  }
`;

export const Header4 = styled.h6`
  line-height: 1.6;
  font-size: 1.6rem;
  font-weight: 300;
  color: ${accentColor[300]};

  @media screen and (max-width: ${breakpoints.Medium}) {
    line-height: 1.4;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    line-height: 1.2;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const Paragraph2 = styled.p`
  line-height: 1.6;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;
