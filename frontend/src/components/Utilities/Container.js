import styled from "styled-components";
import { breakpoints } from "./ResponsiveBreakpoints";

export const Container = styled.div`
  margin: 0 6rem;

  @media screen and (max-width: 768px) {
    margin: 0 3rem;
  }
`;

export const FooterContainer = styled.div`
  margin: 0 8rem;

  @media screen and (max-width: ${breakpoints.Laptop}) {
    margin: 0 5rem;
  }

  @media screen and (max-width: ${breakpoints.Medium}) {
    margin: 0 3rem;
  }
`;
