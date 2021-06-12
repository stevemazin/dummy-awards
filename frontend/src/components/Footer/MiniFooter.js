import React from "react";
import styled from "styled-components";
import { neutral } from "../Utilities";

const FooterWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.6rem;
  color: ${neutral[100]};
`;

const MiniFooter = () => {
  return (
    <FooterWrapper>
      <p>Copyright Sliq Awards 2021</p>
    </FooterWrapper>
  );
};

export default MiniFooter;
