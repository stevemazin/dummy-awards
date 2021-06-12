import React from "react";
import styled from "styled-components";

const VectorSimpleTick = styled.svg``;

const SimpleTick = () => {
  return (
    <VectorSimpleTick version="1.1" id="smallTick" viewBox="0 0 10 10">
      <g>
        <polygon
          className="tickArtwork"
          points="10,2.1 3.3,8.8 1.7,7.1 0,5.4 1.2,4.2 3.3,5.8 9.2,1.2"
        />
      </g>
    </VectorSimpleTick>
  );
};

export default SimpleTick;
