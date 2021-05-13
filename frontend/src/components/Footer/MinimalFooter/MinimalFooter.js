import React from "react";
import styled from "styled-components";
import { navyBlue, accentColor, neutral, breakpoints } from "../../Utilities";
import { Link } from "react-router-dom";

const BottomSection = styled.div`
  /* background-color: rebeccapurple; */
  font-size: 1.4rem;
  padding: 1.5rem 0;
  border-top: 1px solid ${accentColor[300]};
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

const MinimalFooter = () => {
  return (
    <div>
      <BottomSection>
        <ExtraLinks>
          <ExtraLink to="/terms">terms & conditions</ExtraLink>
          <ExtraLink to="/privacy-policy">privacy policy</ExtraLink>
        </ExtraLinks>
        <DevSection>Developed by Stevie Designs</DevSection>
      </BottomSection>
    </div>
  );
};

export default MinimalFooter;
