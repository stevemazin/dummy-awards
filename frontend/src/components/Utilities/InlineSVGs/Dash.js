import React from "react";
import styled from "styled-components";
import { neutral } from "../Colors";

const DashVector = styled.svg`
  margin-right: 0.75rem;
  height: 0.6rem;
  width: 0.75rem;

  .st0 {
    fill: ${neutral[100]};
  }
`;

const Dash = () => {
  return (
    <DashVector version="1.1" viewBox="0 0 8 1.5">
      <g id="Line_2">
        <path
          className="st0"
          d="M7.4,1.5H0.6C0.2,1.5,0,1.2,0,0.8S0.2,0,0.6,0h6.8C7.7,0,8,0.3,8,0.8S7.7,1.5,7.4,1.5z"
        />
      </g>
    </DashVector>
  );
};

export default Dash;
