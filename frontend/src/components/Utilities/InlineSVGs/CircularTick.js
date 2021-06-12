import React from "react";
import styled from "styled-components";

const VecotorCircularTick = styled.svg``;

const CircularTick = () => {
  return (
    <VecotorCircularTick version="1.1" id="circularTick" viewBox="0 0 24 24">
      <g>
        <path
          d="M12.2,23.6h-0.4C5.4,23.6,0.2,18.4,0.2,12c0-6.4,5.2-11.6,11.6-11.6h0.4c6.4,0,11.6,5.2,11.6,11.6
C23.8,18.4,18.6,23.6,12.2,23.6z M11.8,1.7C6.1,1.7,1.5,6.3,1.5,12c0,5.7,4.6,10.3,10.3,10.3h0.4c5.7,0,10.3-4.6,10.3-10.3
c0-5.7-4.6-10.3-10.3-10.3H11.8z"
        />
        <polygon points="16.7,7.5 10.6,13.6 8.2,11.2 6.6,12.9 10.6,16.9 18.4,9.2" />
      </g>
    </VecotorCircularTick>
  );
};

export default CircularTick;
