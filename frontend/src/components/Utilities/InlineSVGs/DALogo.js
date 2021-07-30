import React from "react";
import styled from "styled-components";
import { accentColor } from "../Colors";

const LogoWrapper = styled.svg`
  fill: red;
  z-index: 9999999;

  height: 4.2rem;

  .st0 {
    fill: ${accentColor[300]};
  }
`;

const DummyAwardsLogo = () => {
  return (
    <LogoWrapper
      version="1.1"
      id="dummy_awards_logo"
      x="0px"
      y="0px"
      viewBox="0 0 60 60"
    >
      <g>
        <path
          class="st0"
          d="M0,0.4c12.7,0,25.1-1.2,37.1,0.3c11.4,1.4,18.6,10,21.7,21c3.1,10.9,0.2,20.5-8.3,29.5
		c-9-15.6-17.8-30.7-27-46.6C15.6,18.1,8.2,30.9,0,45C0,29.1,0,14.6,0,0.4z"
        />
        <path
          class="st0"
          d="M23.4,25c6.4,11.1,12.3,21.4,18.5,32.1C29.2,61.8,16.7,59,3.2,60C10.2,47.9,16.5,36.9,23.4,25z"
        />
      </g>
    </LogoWrapper>
  );
};

export default DummyAwardsLogo;
