import React from "react";
import styled from "styled-components";
import { breakpoints } from "../Utilities";

const HottestVectorWrapper = styled.div`
  width: 60vw;

  @media screen and (max-width: ${breakpoints.Medium}) {
    width: 65vw;
  }

  @media screen and (max-width: ${breakpoints.Tablet}) {
    width: 85vw;
  }

  @media screen and (max-width: ${breakpoints.Phone}) {
    width: 90vw;
  }
`;

const HottestVector = styled.svg`
  .st0 {
    fill: #2d5d78;
  }
  .st1 {
    fill: #f15a2d;
  }
  .st2 {
    fill: #f4f5f7;
  }
`;

const Hottest = () => {
  return (
    <HottestVectorWrapper>
      <HottestVector version="1.1" viewBox="0 0 540 235">
        <g>
          <g>
            <path
              className="st0"
              d="M60,134.9c0.7,0,1.2,0.4,1.5,1.1c0.3,0.8,0.4,1.9,0.4,3.4c0,0.9-0.2,2.7-0.5,5.2c-0.3,2.4-0.8,5.8-1.4,9.7
			l0.7,4.1c-0.3,0.9-0.7,2.1-1,3.4s-0.6,2.7-0.9,4.3c-0.3,1.7-0.6,3.2-0.9,4.5s-0.5,2.2-0.8,2.9c-0.3,1.3-0.6,2.5-0.9,3.7
			c-0.3,1.1-0.5,2.2-0.6,3.4c-0.3,2.6-0.7,5.2-1.1,7.5c-0.5,2.3-1.1,4.7-1.9,6.8c-0.5,1.6-1.4,4.7-2.4,9.1
			c-1.1,4.5-2.5,10.4-4.3,17.7c-0.7,3.2-1.6,5.7-2.5,7.3c-0.9,1.6-1.9,2.4-3,2.4c-0.5,0-0.9-0.1-1.2-0.4c-0.3-0.3-0.4-0.7-0.5-1.3
			c0-0.2-0.1-0.4,0-0.7c0-0.2,0-1,0-2.2c0-0.5-0.2-0.9-0.4-1.4l1.2-4.9c0-0.5-0.1-1.1-0.3-1.7c0-1.4,0.4-4.5,1.1-8.9
			c0.7-4.5,1.8-10.5,3.1-18c0.5-2.4,1-5.2,1.4-8.1c0-0.5,0-0.8-0.1-1.1c-0.1-0.3-0.2-0.3-0.5-0.3c-0.5,0.2-0.9,0.4-1.4,0.6l-1.5-0.7
			c-0.2,0.1-0.8,0.5-1.5,1.1c-0.8,0.7-1.3,1-1.7,1c-0.8,0-1.9-0.1-3.5-0.4c-1.5-0.3-2.6-0.4-3.5-0.4c-0.9,0-1.9,0.2-2.9,0.7
			c-1,0.5-2.1,1.2-3.2,2.1c-1.9,0.3-3.8,0.7-5.3,1.4c-1.5,0.6-2.8,1.5-4.1,2.4c-0.6,0.4-1.2,0.9-1.9,1.5c-0.3,0.3-0.6,1.3-0.7,3.1
			c-0.1,1.8-0.2,4.3-0.2,7.3c0,2.8,0.1,5,0.4,6.3c0.3,1.3,0.7,2,1.3,2c0.4,0,0.7-0.1,1-0.3c0.3-0.2,0.6-0.5,1.1-0.9
			c0.2-0.3,0.5-0.6,0.9-0.9c0.3-0.3,0.6-0.6,0.8-1l0.5-0.1c0.3,0,0.5,0,0.7,0.3c0.1,0.2,0.2,0.5,0.2,0.9c-0.4,0.9-0.8,1.7-1.2,2.5
			c-0.4,0.7-0.7,1.4-1,1.9c-1.3,1.9-2.5,4-3.9,5.9c-0.7,1-1.6,1.8-2.7,2.3c-1.1,0.5-2.2,0.8-3.7,0.8c-1.1,0-1.9-1.5-2.5-4.6
			c-0.6-3-0.8-7.6-0.8-13.7c0-2.3-0.1-4.4-0.4-6.1c-0.3-1.7-0.8-3.2-1.4-4.5c-0.6-1.1-1-2-1.3-2.8c-0.2-0.8-0.4-1.5-0.4-2.1
			c0-0.5,0.1-1,0.3-1.5c0.2-0.5,0.6-1.2,1-1.7c0.5-0.7,1-1.2,1.3-1.6c0.3-0.4,0.5-0.8,0.5-1.1c0.2-0.7,0.5-1.5,0.7-2.6
			c0.2-1.1,0.5-2.3,0.8-3.8c0.2-0.9,0.5-2.3,0.7-4.1s0.4-3.9,0.4-6.4c0.2-4.7,0.6-8.2,1.3-10.7c0.7-2.4,0.9-3.9,0.8-4.4l-0.4-1.5
			c0.1-0.9,0.2-2,0.4-3.4c0.2-1.3,0.4-2.9,0.7-4.8c0.4-0.2,0.8-0.6,1.2-1.1c0.5-0.5,0.9-1.1,1.4-1.8c2.8-1.1,4.5-1.6,4.7-1.6
			c1.5,0,2.6,0.4,3.4,1.2c0.7,0.8,1.1,1.9,1.1,3.4c0,0.4-0.1,1-0.3,1.7c-0.2,0.7-0.5,1.7-0.8,2.8c-0.4,0.9-0.8,2.7-1.2,5.4
			c-0.4,2.6-0.9,5.9-1.5,9.9c-0.4,2.9-0.8,5.7-1.2,8.2s-0.9,5-1.5,7.2c-0.1,0.3-0.1,0.6-0.2,1.1c0,0.6,0.1,1.1,0.3,1.3
			c0.2,0.3,0.5,0.4,0.9,0.4c1.5-0.1,2.9-0.2,4.3-0.4c0.4,0,1.8-0.5,4.4-1.4h4.9c0.7,0,1.6-0.1,2.9-0.2c1.3-0.1,2.2-0.2,2.8-0.2
			c0.6,0,1.5,0.1,2.6,0.4c1.2,0.3,2.1,0.4,2.8,0.4c0.5,0,1.1-0.1,1.9-0.2c0.8-0.1,1.7-0.5,2.8-0.9c0.5,0,1-0.1,1.4-0.2
			c0.4-0.1,0.6-0.3,0.6-0.6c0.2-0.5,0.4-1.2,0.7-2c0.3-0.8,0.5-1.7,0.8-2.7c0.1-0.9,0.2-2.1,0.3-3.5c0.1-1.3,0.3-2.9,0.6-4.7
			c0.6-3.4,1-6.1,1.3-8.2c0.3-2.1,0.4-3.7,0.4-4.6c0-0.3,0-0.6-0.1-0.9c-0.1-0.3-0.2-0.5-0.4-0.7c-0.3-0.4-0.7-0.8-1.1-1.4
			c0.3-0.8,0.6-1.5,0.9-1.9c0.9-1.4,1.8-2.7,2.4-3.7c0.7-1,1.2-1.7,1.6-2.1c0.7-0.7,1.5-1.4,2.4-2.1C57.4,136,58.6,135.6,60,134.9z"
            />
            <path
              className="st0"
              d="M60.2,204.1c0.3-0.3,0.6-0.7,0.9-1.1s0.7-1,1.1-1.6l4.9-3.4c0.6-0.7,1.5-1.6,2.7-2.7c1.2-1.1,2.7-2.4,4.6-4.1
			c0.2-0.5,0.5-1,1-1.6s1-1.2,1.7-1.8c0.6-0.5,1.2-1,1.7-1.5c0.5-0.5,1.1-0.9,1.6-1.4c0.6-0.6,1.2-1.2,1.8-1.9
			c0.6-0.6,1.1-1.2,1.7-1.8c0.7-0.6,1.3-1,2-1.4c0.7-0.3,1.5-0.5,2.3-0.5c0.9,0,1.6,0.1,2.1,0.3s0.7,0.5,0.8,1
			c-0.4,0.9-0.8,1.9-1.3,2.8l0.4,0.6c1.8-0.7,3.2-1.2,4.4-1.5c1-0.3,1.7-0.5,2-0.5c3,0,5.4,0.9,6.9,2.8c1.5,1.8,2.3,4.7,2.3,8.4
			c0,0.7-0.1,1.5-0.2,2.5c-0.2,0.9-0.4,2-0.8,3.1c-0.4,1.2-0.9,2.3-1.3,3.1c-0.4,0.8-0.9,1.4-1.3,1.8c0.2,0.5,0.4,0.9,0.6,1.1
			c0.2,0.2,0.5,0.3,0.8,0.3s0.7-0.1,1-0.3c0.4-0.2,0.8-0.5,1.3-0.9c0.4,0.9,0.8,1.8,1.2,2.8s0.8,1.9,1.2,2.9
			c-0.7,0.7-1.5,1.3-2.2,1.9c-0.7,0.6-1.4,1.2-2.2,1.8c-0.9,0.8-1.8,1.4-2.7,1.7c-0.9,0.3-1.7,0.5-2.5,0.5c-0.9,0-1.7-0.2-2.4-0.7
			c-0.6-0.5-1.1-1.1-1.5-1.9c-1,1.4-2.3,2.6-3.8,3.8c-1.5,1.1-3.1,2.1-5,2.8c-1,0.5-2,0.9-2.8,1.1c-0.8,0.3-1.6,0.4-2.3,0.4
			c-0.2,0-0.6,0.1-1.2,0.2c-0.6,0.1-1.1,0.2-1.5,0.2c-2.4,0-4.6-1-6.5-3c-1.9-2-2.8-4.3-2.8-6.7c0-1,0.2-2.3,0.7-4
			c0.5-1.6,0.7-2.6,0.7-2.9s-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.8-0.3c-0.2,0-0.7,0.3-1.5,0.9c-0.8,0.6-1.9,1.5-3.4,2.7
			c-0.1,0.2-0.3,0.4-0.4,0.7c-0.2,0.3-0.4,0.7-0.8,1.1c-0.3-0.9-0.7-1.9-1.1-2.9C61.2,205.9,60.7,205,60.2,204.1z M90.4,192.5
			c-0.2,0-0.5,0.3-0.9,0.7c-0.4,0.4-0.8,0.9-1.1,1.5c-0.6,0.9-1.2,2-2,3.1c-0.5,0.5-0.9,0.9-1.5,1.1c-0.5,0.3-1.1,0.5-1.8,0.6
			c-0.4,0-0.8,0.4-1.3,1.2c-0.5,0.8-0.9,1.9-1.4,3.4c-0.5,1.3-0.8,2.4-1,3.4s-0.3,1.7-0.3,2.3c0,1.2,0.3,2,0.9,2.6s1.5,0.9,2.7,0.9
			c1.9,0,3.7-0.5,5.3-1.6c1.6-1.1,3.1-2.6,4.6-4.8c0.7-0.8,1.3-1.5,1.9-2.2c0.3-0.2,0.6-0.7,0.8-1.2c0.2-0.6,0.4-1.2,0.6-2.1
			l1.1-3.6c-0.4-1.2-0.7-2.2-1.1-2.9c-0.3-0.7-0.7-1.2-1-1.3c-0.2-0.1-0.7-0.3-1.4-0.4C92.7,192.8,91.7,192.7,90.4,192.5z"
            />
            <path
              className="st0"
              d="M105.6,204.1l0.2-0.5c0.2-0.3,0.6-0.7,1-1.2c0.4-0.5,0.9-1.1,1.4-1.7c2.9-2.7,5.9-6.1,8.7-9.9
			c2.8-3.9,5.6-8.2,8.4-13.2c0.3-0.5,0.7-1.1,1.1-1.8c0.4-0.7,0.9-1.7,1.4-2.8c0-0.2-0.1-0.4-0.2-0.6s-0.3-0.2-0.6-0.2
			c-0.2,0-0.7,0.1-1.2,0.2c-0.6,0.1-1,0.2-1.3,0.2h-7.8c-0.3,0-0.9,0-1.6-0.1c-0.8,0-1.3-0.1-1.6-0.1c-0.4-0.2-0.8-0.4-1.1-0.5
			c-0.3-0.1-0.7-0.3-1-0.5c-0.5-0.2-0.9-0.4-1.1-0.7c-0.3-0.3-0.4-0.6-0.4-1c0-2.6,0.3-4.8,0.8-6.2s1.4-2.1,2.6-2.1
			c1.2,0,2.2,0.1,3.4,0.2c1,0.1,1.9,0.2,2.7,0.4c0.6-0.1,1.2-0.2,1.7-0.4c1.1,0,2.1,0,2.8,0.1c0.8,0.1,1.4,0.2,1.8,0.3
			c0.5-0.1,1.1-0.2,1.6-0.3c0.5-0.1,1.1-0.2,1.7-0.3l2,0.6c1.5-0.2,3-2.2,4.7-6.2c1.6-4,3.5-5.9,5.3-5.9c1,0,1.8,0.3,2.3,0.9
			c0.5,0.6,0.8,1.5,0.8,2.7c0,0.9-0.3,2.2-0.8,3.8c-0.6,1.5-0.9,2.7-1,3.6c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.4,0.4,0.6,0.7
			c0.2,0.2,0.4,0.4,0.5,0.8c0.1,0.4,0.2,0.9,0.2,1.5c0,2.5-0.1,4.5-0.3,5.8c-0.2,1.3-0.6,2-1.1,2.1l-4.3,0.9
			c-0.1,0.4-0.2,0.9-0.3,1.5c-0.1,0.6-0.3,1.3-0.5,2.1c-0.7,2.1-1.5,4.8-2.4,8c-0.9,3.2-1.8,7-2.9,11.5c-0.7,3.6-1.2,6.4-1.5,8.5
			c-0.4,2.1-0.5,3.7-0.5,4.4c0,0.7,0.1,1.2,0.3,1.5c0.2,0.3,0.5,0.5,0.9,0.5c0.2,0,1.1-0.6,2.7-1.8c1.6-1.2,3.8-3,6.6-5.4l2.4,5.8
			c-0.4,0.5-1,1-1.7,1.6c-0.7,0.6-1.6,1.3-2.7,2c-0.4,0.5-0.9,1-1.5,1.5c-0.6,0.6-1.3,1.2-2,2c-0.7,0.8-1.5,1.7-2.2,2.5
			c-0.7,0.8-1.5,1.6-2.2,2.4c-1,1.1-2,1.8-2.9,2.3c-0.9,0.5-1.8,0.7-2.7,0.7c-1.8,0-3.2-0.5-4.2-1.6c-0.9-1.1-1.3-2.7-1.3-5
			c0-2.4,0.1-4.6,0.2-6.3c0.2-1.8,0.4-3.2,0.8-4.3c0.2-0.3,0.3-0.6,0.4-0.9c0-0.4,0.1-1,0.2-1.7c0.1-0.7,0.3-1.5,0.4-2.5
			c0.2-1.6,0.5-3.2,0.8-4.9c0.5-1,0.9-2,1.4-3.2c0-0.2-0.2-0.4-0.5-0.6l-0.6,0.4c-0.6,1-1.4,2-2.4,3.1c-1,1.1-2.2,2.2-3.6,3.5
			c-2.1,2-4.4,4.2-6.5,6.2c-0.1,0.2-0.4,0.5-0.7,0.9c-0.3,0.4-0.7,0.9-1.1,1.5c-0.2-0.5-0.5-1.1-0.8-1.9c-0.3-0.8-0.6-1.6-1-2.6
			c-0.1-0.2-0.2-0.5-0.3-0.7C105.9,204.3,105.8,204.2,105.6,204.1z"
            />
            <path
              className="st0"
              d="M140.5,204.1l0.2-0.5c0.2-0.3,0.6-0.7,1-1.2c0.4-0.5,0.9-1.1,1.4-1.7c2.9-2.7,5.9-6.1,8.7-9.9
			c2.8-3.9,5.6-8.2,8.4-13.2c0.3-0.5,0.7-1.1,1.1-1.8c0.4-0.7,0.9-1.7,1.4-2.8c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.2-0.6-0.2
			c-0.2,0-0.7,0.1-1.2,0.2c-0.6,0.1-1,0.2-1.3,0.2h-7.8c-0.3,0-0.9,0-1.6-0.1c-0.7-0.1-1.3-0.1-1.6-0.1c-0.4-0.2-0.8-0.4-1.1-0.5
			c-0.3-0.1-0.7-0.3-1-0.5c-0.5-0.2-0.9-0.4-1.1-0.7c-0.3-0.3-0.4-0.6-0.4-1c0-2.6,0.3-4.8,0.8-6.2c0.5-1.4,1.4-2.1,2.6-2.1
			s2.2,0.1,3.4,0.2c1,0.1,1.9,0.2,2.7,0.4c0.6-0.1,1.2-0.2,1.7-0.4c1.1,0,2.1,0,2.8,0.1c0.8,0.1,1.4,0.2,1.8,0.3
			c0.5-0.1,1.1-0.2,1.6-0.3c0.5-0.1,1.1-0.2,1.7-0.3l2,0.6c1.5-0.2,3-2.2,4.7-6.2c1.6-4,3.5-5.9,5.3-5.9c1,0,1.8,0.3,2.3,0.9
			c0.5,0.6,0.8,1.5,0.8,2.7c0,0.9-0.3,2.2-0.8,3.8c-0.6,1.5-0.9,2.7-1,3.6c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.4,0.4,0.6,0.7
			c0.2,0.2,0.4,0.4,0.5,0.8c0.1,0.4,0.2,0.9,0.2,1.5c0,2.5-0.1,4.5-0.3,5.8c-0.2,1.3-0.6,2-1.1,2.1l-4.3,0.9
			c-0.1,0.4-0.2,0.9-0.3,1.5c-0.1,0.6-0.3,1.3-0.5,2.1c-0.7,2.1-1.5,4.8-2.4,8c-0.9,3.2-1.8,7-2.9,11.5c-0.7,3.6-1.2,6.4-1.5,8.5
			c-0.4,2.1-0.5,3.7-0.5,4.4c0,0.7,0.1,1.2,0.3,1.5c0.2,0.3,0.5,0.5,0.9,0.5c0.2,0,1.1-0.6,2.7-1.8c1.6-1.2,3.8-3,6.6-5.4l2.4,5.8
			c-0.4,0.5-1,1-1.7,1.6c-0.7,0.6-1.6,1.3-2.7,2c-0.4,0.5-0.9,1-1.5,1.5c-0.6,0.6-1.3,1.2-2,2c-0.7,0.8-1.5,1.7-2.2,2.5
			c-0.7,0.8-1.5,1.6-2.2,2.4c-1,1.1-2,1.8-2.9,2.3c-0.9,0.5-1.8,0.7-2.7,0.7c-1.8,0-3.2-0.5-4.2-1.6c-0.9-1.1-1.3-2.7-1.3-5
			c0-2.4,0.1-4.6,0.2-6.3c0.2-1.8,0.4-3.2,0.8-4.3c0.2-0.3,0.3-0.6,0.4-0.9c0-0.4,0.1-1,0.2-1.7c0.1-0.7,0.3-1.5,0.4-2.5
			c0.2-1.6,0.5-3.2,0.8-4.9c0.5-1,0.9-2,1.4-3.2c0-0.2-0.2-0.4-0.5-0.6l-0.6,0.4c-0.6,1-1.4,2-2.4,3.1c-1,1.1-2.2,2.2-3.6,3.5
			c-2.1,2-4.4,4.2-6.5,6.2c-0.1,0.2-0.4,0.5-0.7,0.9s-0.7,0.9-1.1,1.5c-0.2-0.5-0.5-1.1-0.8-1.9c-0.3-0.8-0.6-1.6-1-2.6
			c-0.1-0.2-0.2-0.5-0.3-0.7C140.8,204.3,140.7,204.2,140.5,204.1z"
            />
            <path
              className="st0"
              d="M175.3,204.1c0.5-0.9,1.1-1.7,1.9-2.6c0.8-0.9,1.8-1.8,3-2.8c0.1-0.8,0.2-1.6,0.4-2.4s0.2-1.6,0.2-2.4
			c0.1-0.6,0.3-1.3,0.6-2c0.3-0.8,0.6-1.6,0.9-2.5c0.4-0.9,0.9-2,1.5-3.5c0.6-1.4,1.5-2.9,2.5-4.7c0.9-0.9,1.8-2,2.7-3.1
			c0.9-1.1,1.9-2.3,2.8-3.5c0.5-0.4,0.9-0.7,1.5-1.1s1.1-0.7,1.6-1.1c0.5-0.2,1.1-0.3,1.7-0.4c0.6-0.1,1.3-0.2,2-0.2
			c1,0,1.9,0.1,2.5,0.3s1.2,0.6,1.6,1.1c0.3,0.3,0.6,0.8,0.8,1.5c0.3,0.7,0.5,1.5,0.8,2.4c0.1,0.8,0.3,1.7,0.4,2.7
			c0-0.2-0.1-0.1-0.2,0.3c-0.1,0.5-0.4,1.2-0.7,2.2l-0.6,2c-0.6,2-1.9,4.4-4,7c-2,2.6-4.8,5.7-8.3,9c-0.3,0.3-0.5,0.7-0.7,1.1
			c-0.2,0.4-0.3,0.9-0.3,1.4c0,0.9,0.2,1.6,0.5,2.3c0.3,0.7,0.8,1.2,1.3,1.5c0.3,0.2,0.9,0.5,1.6,0.7s1.6,0.5,2.6,0.7
			c1.6-0.1,3.1-0.4,4.5-0.8c1.3-0.4,2.5-0.9,3.6-1.5c0.2-0.1,0.5-0.3,1-0.5c0.5-0.2,0.9-0.5,1.4-0.9c0.5,1.2,1,2.3,1.4,3.2
			c0.4,0.9,0.7,1.8,1,2.5c-2.4,2.3-4.6,4.2-6.5,5.3c-1.9,1.1-3.8,1.8-5.4,1.8c-0.7,0.4-1.4,0.7-2.3,0.9c-0.9,0.2-1.8,0.3-3,0.3
			c-1.5,0-2.9-0.2-4.2-0.7c-1.2-0.5-2.2-1.1-2.9-2c-0.4-0.4-0.8-1-1.2-1.8s-0.8-1.8-1.3-2.9c-0.4-0.9-0.7-1.6-1.1-2
			c-0.3-0.4-0.7-0.7-1.1-0.7c-0.3,0-0.7,0.2-1.1,0.5c-0.4,0.3-0.9,0.8-1.4,1.4c-0.2-0.6-0.5-1.4-0.9-2.3
			C176.3,206.9,176,205.4,175.3,204.1z M195.4,183.6c-0.9,0-2.1,1.2-3.8,3.7c-1.5,2.4-2.3,4.2-2.3,5.3c0,0.2,0.1,0.4,0.2,0.5
			c0.1,0.1,0.3,0.2,0.7,0.2c0.5,0,0.8-0.2,1.1-0.7c0.3-0.5,0.6-0.9,0.8-1.3c0.5-0.4,0.9-0.9,1.3-1.3c0.4-0.5,0.9-0.9,1.3-1.4
			c0.5-0.6,0.9-1.2,1.1-1.7c0.2-0.6,0.4-1.2,0.4-1.7c0-0.4-0.1-0.7-0.2-0.9C196,183.7,195.7,183.6,195.4,183.6z"
            />
            <path
              className="st0"
              d="M207,204.1l0.4-0.4c0.2-0.6,0.5-1.2,1.1-1.9c0.6-0.7,1.4-1.3,2.4-2c1.4-0.9,2.4-1.6,3.2-2.1
			c0.8-0.5,1.2-0.9,1.4-1.2c0.4-0.5,0.6-0.8,0.7-1.1c0.5-0.3,1-0.8,1.7-1.4c0.7-0.6,1.4-1.3,2.2-2.1c0.3-0.2,0.6-0.5,0.9-1
			c0.3-0.5,0.7-1,1-1.5c0.5-0.4,1.1-0.8,1.8-1.4c0.7-0.6,1.5-1.3,2.4-2.2c1-1.1,2.2-2.3,3.6-3.8c1.3-1.4,2.8-2.7,4.5-4.3
			c0.5-0.2,1-0.4,1.5-0.6c0.5-0.1,0.9-0.2,1.4-0.2c1.9,0,3.4,0.4,4.3,1.3c0.9,0.9,1.4,2.2,1.4,3.9c0,0.4-0.1,1.1-0.2,2
			c-0.1,0.9-0.3,2.2-0.5,3.7c-0.6,4.3-1,6.8-1.2,7.7s-1.1,3.9-2.6,8.6c-0.3,0.8-0.7,1.8-1,2.9c-0.4,1.2-0.8,2.6-1.3,4.3
			c0.1,0.2,0.3,0.3,0.6,0.5c0.3,0,0.8-0.3,1.5-0.8c0.7-0.6,1.7-1.4,3-2.5c1.4-1.3,2.6-2.3,3.5-3c0.8-0.7,1.3-1.1,1.5-1.2
			c0.5,1.1,0.9,2.1,1.4,3.1c0.4,0.9,0.8,1.8,1.1,2.6c-0.5,0.3-1,0.7-1.5,1.1c-0.4,0.4-0.8,0.9-1.2,1.4c-0.9,0.6-1.9,1.2-3,2
			c-1.1,0.7-2.4,1.5-3.8,2.4c-0.6,0.6-1.5,1.4-2.5,2.3c-1.1,0.9-2.2,1.9-3.7,3l-1.2,0.2c-0.6,0.8-1.1,1.4-1.6,1.8
			c-0.5,0.4-1,0.7-1.4,0.9c-0.7,0.2-1.3,0.5-2,0.7c-0.7,0.2-1.4,0.5-2.1,0.7c-0.5-0.1-0.8-0.4-1-0.8c-0.2-0.4-0.3-0.9-0.2-1.6
			c-0.6-1.1-1.1-2.4-1.5-3.9c-0.4-1.4-0.6-3.1-0.6-4.9c0-0.3,0-0.7,0.1-1.1c0-0.4,0.1-0.7,0.1-1c-0.3-1.1-0.4-1.7-0.4-1.9
			c0-1.2,0.5-2.3,1.4-3.1c0.9-0.8,2-1.2,3.2-1.2c0.6,0,1.1,0.3,1.3,1c0.3,0.6,0.5,1,0.8,1c0.3,0,0.6-0.6,0.9-1.7
			c0.3-1.1,0.6-2.8,0.9-5.1c0.3-1.9,0.5-3.7,0.6-5.1c0.1-1.4,0.1-2.5,0.1-3.2c0-0.5-0.1-0.9-0.3-1.2c-0.2-0.3-0.6-0.4-1.1-0.4
			c-0.5,0-2.3,1.2-5.3,3.8c-2.9,2.5-7.1,6.3-12.5,11.3c-0.2,0.3-0.4,0.6-0.7,1.1c-0.3,0.5-0.7,0.9-1.1,1.5c-0.2-0.6-0.5-1.4-0.9-2.3
			C208.2,206.5,207.6,205.4,207,204.1z"
            />
            <path
              className="st0"
              d="M246.3,204.1l0.2-0.5c0.2-0.3,0.6-0.7,1-1.2c0.4-0.5,0.9-1.1,1.4-1.7c2.9-2.7,5.9-6.1,8.7-9.9
			c2.8-3.9,5.6-8.2,8.4-13.2c0.3-0.5,0.7-1.1,1.1-1.8c0.4-0.7,0.9-1.7,1.4-2.8c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.1-0.3-0.2-0.6-0.2
			c-0.2,0-0.7,0.1-1.2,0.2c-0.6,0.1-1,0.2-1.3,0.2h-7.8c-0.3,0-0.9,0-1.6-0.1c-0.7-0.1-1.3-0.1-1.6-0.1c-0.4-0.2-0.8-0.4-1.1-0.5
			c-0.4-0.1-0.7-0.3-1-0.5c-0.5-0.2-0.9-0.4-1.1-0.7c-0.3-0.3-0.4-0.6-0.4-1c0-2.6,0.3-4.8,0.8-6.2c0.5-1.4,1.4-2.1,2.6-2.1
			s2.2,0.1,3.4,0.2c1,0.1,1.9,0.2,2.7,0.4c0.6-0.1,1.2-0.2,1.7-0.4c1.1,0,2.1,0,2.8,0.1c0.8,0.1,1.4,0.2,1.8,0.3
			c0.5-0.1,1.1-0.2,1.6-0.3c0.5-0.1,1.1-0.2,1.7-0.3l2,0.6c1.5-0.2,3-2.2,4.7-6.2c1.6-4,3.5-5.9,5.3-5.9c1,0,1.8,0.3,2.3,0.9
			c0.5,0.6,0.8,1.5,0.8,2.7c0,0.9-0.3,2.2-0.8,3.8c-0.6,1.5-0.9,2.7-1,3.6c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.4,0.4,0.6,0.7
			c0.2,0.2,0.4,0.4,0.5,0.8c0.1,0.4,0.2,0.9,0.2,1.5c0,2.5-0.1,4.5-0.3,5.8c-0.2,1.3-0.6,2-1.1,2.1l-4.3,0.9
			c-0.1,0.4-0.2,0.9-0.3,1.5c-0.1,0.6-0.3,1.3-0.5,2.1c-0.7,2.1-1.5,4.8-2.4,8c-0.9,3.2-1.8,7-2.9,11.5c-0.7,3.6-1.2,6.4-1.5,8.5
			c-0.4,2.1-0.5,3.7-0.5,4.4c0,0.7,0.1,1.2,0.3,1.5c0.2,0.3,0.5,0.5,0.9,0.5c0.2,0,1.1-0.6,2.7-1.8c1.6-1.2,3.8-3,6.6-5.4l2.4,5.8
			c-0.4,0.5-1,1-1.7,1.6c-0.7,0.6-1.6,1.3-2.7,2c-0.4,0.5-0.9,1-1.5,1.5c-0.6,0.5-1.3,1.2-2,2c-0.7,0.8-1.5,1.7-2.2,2.5
			s-1.5,1.6-2.2,2.4c-1,1.1-2,1.8-2.9,2.3c-0.9,0.5-1.8,0.7-2.7,0.7c-1.8,0-3.2-0.5-4.2-1.6c-0.9-1.1-1.3-2.7-1.3-5
			c0-2.4,0.1-4.6,0.2-6.3c0.2-1.8,0.4-3.2,0.8-4.3c0.2-0.3,0.3-0.6,0.4-0.9c0-0.4,0.1-1,0.2-1.7c0.1-0.7,0.3-1.5,0.4-2.5
			c0.2-1.6,0.5-3.2,0.8-4.9c0.5-1,0.9-2,1.4-3.2c0-0.2-0.2-0.4-0.5-0.6l-0.6,0.4c-0.6,1-1.4,2-2.4,3.1c-1,1.1-2.2,2.2-3.6,3.5
			c-2.1,2-4.4,4.2-6.5,6.2c-0.1,0.2-0.4,0.5-0.7,0.9c-0.3,0.4-0.7,0.9-1.1,1.5c-0.2-0.5-0.5-1.1-0.8-1.9c-0.3-0.8-0.6-1.6-1-2.6
			c-0.1-0.2-0.2-0.5-0.3-0.7C246.7,204.3,246.4,204.2,246.3,204.1z"
            />
          </g>
          <g>
            <path
              className="st1"
              d="M368.3,204.1l2.4,5.8c-0.5,0.4-1,0.9-1.6,1.3c-0.6,0.5-1.4,1-2.3,1.5c-0.9,0.3-1.9,0.7-3.1,1.2
			c-1.2,0.5-2.6,1.2-4.3,1.9c-1.2,0.7-2.2,1.3-2.9,1.7c-0.7,0.4-1.3,0.6-1.6,0.6c-0.5,0-1.5,0.2-2.9,0.7c-1.4,0.5-3.4,1.1-5.7,2
			c-1.2,0.5-2.5,0.9-4,1.4c-1.4,0.5-2.8,0.9-4.4,1.3l-3.9-0.8l-2.4,1.1c-0.8,0-1.6,0-2.4,0s-1.6-0.1-2.3-0.2c-1.2,0-2.1-0.2-2.7-0.5
			c-0.6-0.3-0.9-0.7-0.9-1.2l0.4-2.4l-0.4-0.4c-1.4,0-2.3-0.2-2.8-0.6c-0.5-0.4-0.7-1.2-0.7-2.6c0-0.6,0-1.7,0.1-3.1
			s0.2-3.4,0.3-5.7c0-0.2,0.1-0.6,0.4-1.3s0.4-1.1,0.4-1.4c-0.2-0.4-0.3-0.7-0.4-1c0-0.2-0.1-0.5-0.1-0.7c0.1-1.6,0.3-3.7,0.5-6
			c0.3-2.4,0.6-5.2,1-8.5c0.5-1.9,0.9-4.2,1.2-6.7c-0.1-1.8-0.2-3.8-0.2-5.7c1.5-7,3.1-14,4.8-21c0.2-1.2,0.7-2.4,1.4-3.6
			c0.7-1.1,1.5-2.2,2.4-3.2c0.4-0.3,0.7-0.5,0.8-0.7c0.2-0.4,0.5-0.8,0.8-1.4c0.3-0.6,0.7-1.2,1.2-1.9c0.2-0.2,0.7-0.4,1.2-0.7
			c0.5-0.3,1.3-0.8,2.3-1.4c0.4-0.3,0.9-0.7,1.4-1.2c0.5-0.5,1.2-1,1.9-1.6c1.6-0.9,3-2,4.5-3c1.4-1,3-1.7,5.1-2
			c0.9,0,1.9-0.1,2.8-0.2c0.9-0.1,1.9-0.1,2.7-0.2c0.8-0.2,1.5-0.3,2.2-0.3c0.4-0.1,0.8-0.2,1.1-0.2c0.3-0.1,0.6-0.1,0.8-0.1
			c0.2,0,0.6,0,1,0.1c0.4,0.1,1,0.2,1.8,0.3c0.6,0,1.1,0.1,1.5,0.1s0.8,0,1.2-0.1c1.7,0.5,2.9,1.2,3.8,2.2c0.8,0.9,1.2,2.1,1.2,3.5
			c0,2.8-0.3,5.1-0.8,6.4c-0.5,1.3-1.4,2.1-2.6,2.1c-0.9,0-1.9-0.5-3.1-1.4c-1.2-0.9-4.4-1.4-9.5-1.4c-2.1,0.4-4.3,0.8-6.4,1.2
			c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.5,0.3-0.7,0.4l-2.2-0.8c-0.7,0.2-1.4,0.9-2.2,2c-0.8,1.1-1.7,2.6-2.6,4.7
			c-0.2,0.4-0.4,0.9-0.5,1.5s-0.2,1.3-0.2,2.2c-0.7,3-1.5,5.9-2.2,8.7c-0.7,3-1.3,5.3-1.7,6.9c-0.4,1.5-0.7,2.5-0.8,2.8
			c-0.1,0.4-0.2,0.8-0.3,1.2s-0.1,0.7-0.1,1.1c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.4,0.9,0.4s1.3-0.7,2.7-2
			c1.4-1.4,2.5-2.1,3.2-2.3c0.9-0.2,1.7-0.5,2.6-0.8c0.9-0.3,1.8-0.6,2.8-1.1c0.4-0.1,1.4-0.3,2.9-0.5s3.9-0.5,6.8-0.7l1.7,0.5
			l3.4-0.6l1.7,0.8c0.4,0.4,0.8,0.9,1.1,1.5c0.4,0.6,0.7,1.2,1,2c0,2.5-0.3,4.5-0.8,5.7c-0.5,1.3-1.3,1.9-2.4,1.9l-3.5-1.4
			c-2.8,0.3-5.7,0.6-8.4,0.8c-2.7,0.3-5.6,0.5-8.5,0.8c-3.6,0.7-6.2,1.8-8.1,3.5c-1.9,1.6-2.9,3.7-3.1,6.3c0,0.5-0.2,1.4-0.4,2.5
			c-0.2,1.1-0.5,2.5-0.9,4.3l0.4,1.9c-0.4,1.8-0.7,3.5-0.9,5.1s-0.3,3-0.3,4.3c0,0.4,0.1,0.7,0.2,0.9c0.1,0.2,0.3,0.2,0.4,0.2
			c2-0.2,3.7-0.3,4.9-0.4c1.2-0.1,2-0.1,2.5-0.1c1.1,0.1,2.2,0.2,3.4,0.2l4-0.3c0.4-0.1,1.3-0.4,2.7-1s2.6-0.9,3.8-0.9
			c1.2,0,2.4-0.1,3.7-0.4c1.2-0.3,2.4-0.6,3.6-1c1.1-0.4,2.2-0.8,3.4-1.3c1.1-0.4,2.2-0.9,3.4-1.3c0.4-0.1,1-0.4,1.6-0.7
			C366.5,205,367.4,204.6,368.3,204.1z"
            />
            <path
              className="st1"
              d="M368,204.1c0.2-0.3,0.5-0.9,1.1-1.7c0.6-0.8,1.5-1.8,2.6-3c1.2-1.2,2.1-2.2,2.9-3.4c0.8-1,1.3-1.9,1.6-2.7
			c0.5-0.9,1.1-2.1,1.8-3.7c0.7-1.4,1.4-3.1,2.3-5.1c0.1-0.2,1-0.9,2.7-2c1.7-1.1,2.7-1.7,3.1-1.7c0.5,0,0.9,0.4,1.2,1.1
			c0.3,0.8,0.4,1.9,0.4,3.6c0,2.3,0,4.3-0.1,5.9c-0.1,1.5-0.2,2.8-0.5,3.8c0.1,0.2,0.2,0.5,0.2,0.7c0.1,0.3,0.2,0.6,0.3,1
			c-0.1,0.4-0.2,0.8-0.3,1.3c0,5,0.2,8.7,0.6,11.2c0.4,2.4,0.9,3.7,1.5,3.7c0.8,0,1.9-1,3.4-3.1c1.4-2.1,3.2-5.3,5.4-9.5
			c2.1-4.2,3.7-7.5,4.8-10.3s1.7-4.7,1.9-6c0.4-2.3,1-4.2,1.8-5.3c0.8-1.1,2-1.8,3.5-1.8c0.4,0,0.7,0.1,0.9,0.3
			c0.2,0.2,0.2,0.6,0.2,1c0,1.7-0.2,3.4-0.7,5.1c-0.5,1.7-1.1,3.5-2,5.2c0,1.1-0.3,2.4-0.8,3.9s-1.3,3-2.4,4.7
			c-0.4,1.1-0.7,2.2-0.9,3.4c-0.1,0.5-1,2.4-2.8,5.8c-1.8,3.4-2.9,5.3-3.5,5.8c0,1-0.5,2.2-1.4,3.7s-2.4,3-4.5,4.8
			c-0.4,0.5-0.8,1.1-1.3,1.5c-0.5,0.5-0.9,1-1.3,1.5c-0.5,0.6-1,1-1.5,1.3c-0.5,0.3-1.2,0.5-2,0.5c-2.2,0-4-0.8-5.2-2.5
			s-1.7-4.3-1.7-7.7c0.1-0.6,0.2-1.2,0.2-1.6c-0.2-0.5-0.4-1.1-0.6-2c-0.2-0.8-0.4-1.7-0.4-2.7c0-1.3,0-2.4,0-3.2
			c0-0.8-0.1-1.4-0.2-1.7l0.4-1.4l-0.6-0.4c-0.3,0.1-1.1,0.8-2.3,2.1c-1.2,1.3-3,3.2-5.4,5.7c-0.3-0.9-0.6-1.8-1.1-2.7
			C369,206.1,368.5,205.1,368,204.1z"
            />
            <path
              className="st1"
              d="M409.4,204.1c0.5-0.9,1.1-1.7,1.9-2.6c0.8-0.9,1.8-1.8,3-2.8c0.1-0.8,0.2-1.6,0.4-2.4
			c0.1-0.8,0.2-1.6,0.2-2.4c0.1-0.6,0.3-1.3,0.6-2c0.3-0.8,0.6-1.6,0.9-2.5c0.4-0.9,0.9-2,1.5-3.5c0.6-1.4,1.5-2.9,2.5-4.7
			c0.9-0.9,1.8-2,2.7-3.1s1.9-2.3,2.8-3.5c0.5-0.4,0.9-0.7,1.5-1.1c0.5-0.3,1.1-0.7,1.6-1.1c0.5-0.2,1.1-0.3,1.7-0.4
			c0.6-0.1,1.3-0.2,2-0.2c1,0,1.9,0.1,2.5,0.3c0.6,0.2,1.2,0.6,1.6,1.1c0.3,0.3,0.6,0.8,0.8,1.5c0.3,0.7,0.5,1.5,0.8,2.4
			c0.1,0.8,0.3,1.7,0.4,2.7c0-0.2-0.1-0.1-0.2,0.3c-0.1,0.5-0.4,1.2-0.7,2.2l-0.6,2c-0.6,2-1.9,4.4-4,7c-2,2.6-4.8,5.7-8.3,9
			c-0.3,0.3-0.5,0.7-0.7,1.1c-0.2,0.4-0.3,0.9-0.3,1.4c0,0.9,0.2,1.6,0.5,2.3s0.8,1.2,1.3,1.5c0.3,0.2,0.9,0.5,1.6,0.7
			c0.7,0.2,1.6,0.5,2.6,0.7c1.6-0.1,3.1-0.4,4.5-0.8c1.3-0.4,2.5-0.9,3.6-1.5c0.2-0.1,0.5-0.3,1-0.5c0.5-0.2,0.9-0.5,1.4-0.9
			c0.5,1.2,1,2.3,1.4,3.2c0.4,0.9,0.7,1.8,1,2.5c-2.4,2.3-4.6,4.2-6.5,5.3c-1.9,1.2-3.8,1.8-5.4,1.8c-0.7,0.4-1.4,0.7-2.3,0.9
			c-0.9,0.2-1.8,0.3-3,0.3c-1.5,0-2.9-0.2-4.2-0.7c-1.2-0.5-2.2-1.1-2.9-2c-0.4-0.4-0.8-1-1.2-1.8s-0.8-1.8-1.3-2.9
			c-0.4-0.9-0.7-1.6-1.1-2c-0.3-0.4-0.7-0.7-1.1-0.7c-0.3,0-0.7,0.2-1.1,0.5c-0.4,0.3-0.9,0.8-1.4,1.4c-0.2-0.6-0.5-1.4-0.9-2.3
			C410.4,206.9,410,205.4,409.4,204.1z M429.5,183.6c-0.9,0-2.1,1.2-3.8,3.7c-1.5,2.4-2.3,4.2-2.3,5.3c0,0.2,0.1,0.4,0.2,0.5
			c0.1,0.1,0.3,0.2,0.7,0.2c0.5,0,0.8-0.2,1.1-0.7c0.3-0.5,0.6-0.9,0.8-1.3c0.5-0.4,0.9-0.9,1.3-1.3c0.4-0.5,0.9-0.9,1.3-1.4
			c0.5-0.6,0.9-1.2,1.1-1.7c0.2-0.6,0.4-1.2,0.4-1.7c0-0.4-0.1-0.7-0.2-0.9C430,183.7,429.8,183.6,429.5,183.6z"
            />
            <path
              className="st1"
              d="M441,204.1c0.2-0.3,0.4-0.6,0.7-1s0.6-0.8,1-1.3c0.4-0.3,0.9-0.8,1.6-1.4c0.7-0.6,1.4-1.3,2.2-2.2
			c0.7-0.8,1.7-1.8,2.7-3.1c1-1.3,2.4-2.7,4-4.5c0.7-0.7,1.5-1.6,2.5-2.7c1-1.1,2.2-2.4,3.6-4c1.2-1.4,2.4-2.4,3.8-3
			c1.3-0.7,2.7-1,4.3-1s2.6,0.5,3.4,1.4c0.7,0.9,1.1,2.3,1.1,4.2c0,1-0.4,2.8-1.1,5.6c-0.7,2.7-1.8,6.3-3.4,10.9
			c-0.4,0.8-0.7,1.6-1.1,2.4c-0.2,0.5-0.4,1-0.5,1.4s-0.1,0.7-0.1,0.9s0.1,0.6,0.4,0.9c0.2-0.1,0.4-0.3,0.6-0.5
			c0.2-0.2,0.4-0.5,0.7-0.7c0.3-0.6,0.8-1.3,1.5-2c0.7-0.7,1.5-1.4,2.4-2.3c0.4-0.7,0.9-1.4,1.5-2.1c0.6-0.7,1.3-1.3,2-1.9
			c0.2-0.2,0.4-0.4,0.7-0.8c0.3-0.4,0.6-0.8,1-1.2c0.5-0.5,1.2-1.1,1.9-1.7s1.6-1.2,2.6-1.8c1.1-0.6,2.1-1,3-1.4
			c0.9-0.4,1.7-0.5,2.3-0.5c1.3,0,2.4,0.3,3.5,0.9c1,0.6,1.8,1.6,2.5,2.9c0.8,2.6,1.6,5,2.4,7.2c0.5,1.3,1,2.2,1.5,2.8
			c0.6,0.6,1.2,0.9,1.9,0.9c0.5,0,1-0.1,1.5-0.3c0.4-0.2,0.8-0.5,1.2-0.9l2.5,5.8c-0.7,0.6-1.4,1.2-2.2,1.8
			c-0.7,0.6-1.5,1.2-2.2,1.8c-0.9,0.9-1.8,1.5-2.7,1.8c-0.8,0.4-1.7,0.5-2.5,0.5c-0.9,0-1.9-0.2-2.7-0.6c-0.9-0.4-1.6-1-2.2-1.9
			c-0.3-0.3-0.7-0.9-1.2-1.8c-0.5-0.9-1.1-2-1.7-3.4c-0.5-0.5-1.1-1.2-1.8-2.1c-0.7-0.9-1.5-1.9-2.4-3.1l-0.6-0.2
			c-0.8,0.2-1.6,0.6-2.3,1.1c-0.8,0.5-1.6,1.1-2.4,1.9c-1.9,1.7-3.2,2.7-4.1,3.1c-0.8,0.4-1.4,0.9-1.7,1.4c-0.6,1-1.6,2.3-3,3.9
			c-1.4,1.6-3.2,3.5-5.4,5.7c-0.5,0.5-1.1,1.1-1.6,1.6s-1.1,1-1.6,1.5c-0.5,0.5-1.1,0.8-1.8,1c-0.7,0.2-1.4,0.3-2.3,0.3
			c-1.7,0-2.5-0.6-2.7-1.7c-0.1-1.1-0.3-2.3-0.4-3.5c0.6-1.7,1.3-4,2.1-6.6s1.7-5.7,2.7-9.2c0-0.2,0.1-0.5,0.2-0.8
			c0.1-0.3,0.3-0.8,0.5-1.4c0.2-0.5,0.3-1,0.4-1.4c0.1-0.4,0.1-0.7,0.1-1c0-0.3-0.1-0.5-0.3-0.7s-0.5-0.2-1-0.2
			c-0.4,0-1,0.2-1.6,0.7c-0.7,0.5-1.5,1.3-2.4,2.4c-1.2,1.2-2.1,2.2-2.8,2.9c-0.7,0.7-1.2,1.1-1.4,1.2c-0.4,0.3-0.9,0.7-1.5,1.2
			c-0.6,0.5-1.2,1.1-1.9,1.8c-0.1,0.2-0.2,0.4-0.4,0.7c-0.2,0.3-0.4,0.7-0.8,1.1c-0.2-0.6-0.5-1.4-0.9-2.3
			C442.1,206.4,441.7,205.4,441,204.1z"
            />
            <path
              className="st1"
              d="M501.1,204.1l0.2-0.5c0.2-0.3,0.6-0.7,1-1.2c0.4-0.5,0.9-1.1,1.4-1.7c2.9-2.7,5.9-6.1,8.7-9.9
			c2.8-3.9,5.6-8.2,8.4-13.2c0.3-0.5,0.7-1.1,1.1-1.8c0.4-0.7,0.9-1.7,1.4-2.8c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.1-0.3-0.2-0.6-0.2
			c-0.2,0-0.7,0.1-1.2,0.2c-0.6,0.1-1,0.2-1.3,0.2h-7.8c-0.3,0-0.9,0-1.6-0.1c-0.8,0-1.3-0.1-1.6-0.1c-0.4-0.2-0.8-0.4-1.1-0.5
			c-0.4-0.1-0.7-0.3-1-0.5c-0.5-0.2-0.9-0.4-1.1-0.7c-0.3-0.3-0.4-0.6-0.4-1c0-2.6,0.3-4.8,0.8-6.2s1.4-2.1,2.6-2.1
			c1.2,0,2.2,0.1,3.4,0.2c1,0.1,1.9,0.2,2.7,0.4c0.6-0.1,1.2-0.2,1.7-0.4c1.1,0,2.1,0,2.8,0.1c0.8,0.1,1.4,0.2,1.8,0.3
			c0.5-0.1,1.1-0.2,1.6-0.3c0.5-0.1,1.1-0.2,1.7-0.3l2.1,0.6c1.4-0.2,3-2.2,4.7-6.2c1.6-4,3.5-5.9,5.3-5.9c1,0,1.8,0.3,2.3,0.9
			c0.5,0.6,0.8,1.5,0.8,2.7c0,0.9-0.3,2.2-0.8,3.8c-0.6,1.5-0.9,2.7-1,3.6c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.4,0.4,0.6,0.7
			c0.2,0.2,0.4,0.4,0.5,0.8s0.2,0.9,0.2,1.5c0,2.5-0.1,4.5-0.3,5.8c-0.2,1.3-0.6,2-1.1,2.1l-4.3,0.9c-0.1,0.4-0.2,0.9-0.3,1.5
			s-0.3,1.3-0.5,2.1c-0.7,2.1-1.5,4.8-2.4,8c-0.9,3.2-1.8,7-2.9,11.5c-0.7,3.6-1.2,6.4-1.5,8.5c-0.4,2.1-0.5,3.7-0.5,4.4
			c0,0.7,0.1,1.2,0.3,1.5c0.2,0.3,0.5,0.5,0.9,0.5c0.2,0,1.1-0.6,2.7-1.8c1.6-1.2,3.8-3,6.6-5.4l2.4,5.8c-0.4,0.5-1,1-1.7,1.6
			s-1.6,1.3-2.7,2c-0.4,0.5-0.9,1-1.5,1.5c-0.6,0.6-1.3,1.2-2,2s-1.5,1.7-2.2,2.5s-1.5,1.6-2.2,2.4c-1,1.1-2,1.8-2.9,2.3
			c-0.9,0.5-1.8,0.7-2.7,0.7c-1.8,0-3.2-0.5-4.2-1.6c-0.9-1.1-1.3-2.7-1.3-5c0-2.4,0.1-4.6,0.2-6.3c0.2-1.8,0.4-3.2,0.8-4.3
			c0.2-0.3,0.3-0.6,0.4-0.9c0-0.4,0.1-1,0.2-1.7c0.1-0.7,0.3-1.5,0.4-2.5c0.2-1.6,0.5-3.2,0.8-4.9c0.5-1,0.9-2,1.4-3.2
			c0-0.2-0.2-0.4-0.5-0.6l-0.6,0.4c-0.6,1-1.4,2-2.4,3.1c-1,1.1-2.2,2.2-3.6,3.5c-2.1,2-4.4,4.2-6.5,6.2c-0.1,0.2-0.4,0.5-0.7,0.9
			s-0.7,0.9-1.1,1.5c-0.2-0.5-0.5-1.1-0.8-1.9c-0.3-0.8-0.6-1.6-1-2.6c-0.1-0.2-0.2-0.5-0.3-0.7
			C501.5,204.3,501.3,204.2,501.1,204.1z"
            />
          </g>
          <g>
            <path
              className="st2"
              d="M80,64.2l-12.1-7.1c-5.2-3-9-5.9-11.3-8.6c-2.1-2.5-3.2-5.1-3.2-7.9c0-3.1,1.3-5.5,4.1-7.5
			c3.1-2.1,6.8-3.2,11.5-3.2c8.5,0,16.6,3.7,24.2,10.9c0.4,0.4,0.9,0.6,1.4,0.6c0.3,0,0.5-0.1,0.8-0.2c0.7-0.3,1.2-1.1,1.2-1.9V21.5
			c0-0.7-0.3-1.3-0.9-1.7c-7.9-5.4-16.8-8.1-26.4-8.1c-10.1,0-18.4,2.9-24.8,8.6c-6.4,5.8-9.7,13.4-9.7,22.6
			c0,6.1,1.7,11.7,5.2,16.5c3.4,4.6,8.9,9.4,16.6,14l12,7.3c9,5.6,13.6,11.3,13.6,17.1c0,3.6-1.4,6.4-4.2,8.8
			c-2.9,2.5-6.5,3.7-11,3.7c-10.5,0-19.9-5.2-28-15.4c-0.4-0.5-1-0.8-1.6-0.8c-0.2,0-0.4,0-0.7,0.1c-0.8,0.3-1.4,1.1-1.4,1.9v20
			c0,0.6,0.3,1.2,0.8,1.6c9.2,6.9,19.5,10.5,30.9,10.5c10,0,18.2-3,24.4-8.8c6.3-6,9.5-13.7,9.5-23C101.1,83.5,94,72.6,80,64.2z"
            />
            <path
              className="st2"
              d="M157.8,106.5c-0.3-0.2-0.7-0.3-1-0.3c-0.4,0-0.7,0.1-1,0.3c-5.6,3.2-10.6,4.8-15.3,4.8
			c-3.9,0-8.3-1.2-8.3-10.4V67.6h20.9c1.1,0,2-0.9,2-2V52.6c0-1.1-0.9-2-2-2h-20.9V37.7c0-0.8-0.5-1.6-1.2-1.9
			c-0.3-0.1-0.5-0.2-0.8-0.2c-0.5,0-1,0.2-1.4,0.6l-26.9,26.5c-0.6,0.5-0.7,1.4-0.5,2.1v0.8c0,1.1,0.9,2,2,2h10.6v29.9
			c0,6.8,0.3,11.4,1,13.9c0.7,2.7,1.5,4.7,2.5,6.2c0.9,1.5,2.1,3,3.7,4.3c4.8,4.2,10.6,6.3,17.7,6.3c7,0,13.4-1.7,19.1-4.9
			c0.6-0.4,1-1,1-1.8v-13.4C158.8,107.5,158.5,106.9,157.8,106.5z"
            />
            <path
              className="st2"
              d="M221.3,58.1c-6.2-5.8-12.4-8.8-18.3-8.8c-6.7,0-13.3,4.5-19.6,13.3v-9.9c0-1.1-0.9-2-2-2h-14.3
			c-1.1,0-2,0.9-2,2v72.5c0,1.1,0.9,2,2,2h14.4c1.1,0,2-0.9,2-2V87.3c0-5.5,1.6-10.4,4.7-14.4c3-3.9,6.4-5.8,10.4-5.8
			c3.8,0,8,2.2,12.5,6.5c0.4,0.4,0.9,0.6,1.4,0.6c0.1,0,0.2,0,0.3,0c0.6-0.1,1.2-0.4,1.5-1l7.5-12.6C222.2,59.9,222,58.8,221.3,58.1
			z"
            />
            <path
              className="st2"
              d="M256.8,49.3c-10.6,0-19.3,3.7-25.9,11c-6.5,7.3-9.9,16.8-9.9,28.3c0,7.6,1.6,14.4,4.7,20.3
			c3.1,5.9,7.2,10.5,12.5,14.2c5.3,3.6,12,5.3,20.5,5.3c5.7,0,11-0.7,15.8-2c4.5-1.3,9.1-3.5,13.7-6.6c0.6-0.4,0.9-1,0.9-1.7v-14
			c0-0.8-0.4-1.5-1.1-1.8c-0.3-0.1-0.6-0.2-0.9-0.2c-0.4,0-0.8,0.1-1.2,0.4c-7.6,5.6-16,8.4-25,8.4c-6.1,0-11.2-1.9-15.1-5.6
			c-3.4-3.3-5.5-7.6-6.2-13h48.8c1.1,0,2-0.9,2-2v-1.8c0-11.7-3.1-21.2-9.1-28.3C275.2,52.9,267,49.3,256.8,49.3z M267.8,69.9
			c2.2,2.2,3.7,5.5,4.3,9.7h-31.7c1-4.2,2.7-7.3,5.3-9.7c3-2.8,6.6-4.1,11.3-4.1C261.5,65.8,265.1,67.2,267.8,69.9z"
            />
            <path
              className="st2"
              d="M334.1,49.3c-10.6,0-19.3,3.7-25.9,11c-6.5,7.3-9.9,16.8-9.9,28.3c0,7.6,1.6,14.4,4.7,20.3
			c3.1,5.9,7.2,10.5,12.5,14.2c5.3,3.6,12,5.3,20.5,5.3c5.7,0,11-0.7,15.8-2c4.5-1.3,9.1-3.5,13.7-6.6c0.6-0.4,0.9-1,0.9-1.7v-14
			c0-0.8-0.4-1.5-1.1-1.8c-0.3-0.1-0.6-0.2-0.9-0.2c-0.4,0-0.8,0.1-1.2,0.4c-7.6,5.6-16,8.4-25,8.4c-6.1,0-11.2-1.9-15.1-5.6
			c-3.4-3.3-5.5-7.6-6.2-13h48.8c1.1,0,2-0.9,2-2v-1.8c0-11.7-3.1-21.2-9.1-28.3C352.5,52.9,344.2,49.3,334.1,49.3z M349.3,79.6
			h-31.7c1-4,2.8-7.3,5.3-9.7c3-2.8,6.6-4.1,11.3-4.1c4.6,0,8.2,1.3,10.8,4.1C347.2,72.1,348.7,75.4,349.3,79.6z"
            />
            <path
              className="st2"
              d="M425.6,106.5c-0.3-0.2-0.7-0.3-1-0.3c-0.4,0-0.7,0.1-1,0.3c-5.6,3.2-10.6,4.8-15.3,4.8
			c-3.9,0-8.3-1.2-8.3-10.4V67.6h20.9c1.1,0,2-0.9,2-2V52.6c0-1.1-0.9-2-2-2h-20.9V37.7c0-0.8-0.5-1.6-1.2-1.9
			c-0.3-0.1-0.5-0.2-0.8-0.2c-0.5,0-1,0.2-1.4,0.6l-26.9,26.5c-0.6,0.5-0.7,1.4-0.5,2.1v0.8c0,1.1,0.9,2,2,2h10.6v29.9
			c0,6.8,0.3,11.4,1,13.9c0.7,2.7,1.5,4.7,2.5,6.2c0.9,1.5,2.1,3,3.7,4.3c4.8,4.2,10.6,6.3,17.7,6.3c7,0,13.4-1.7,19.1-4.9
			c0.6-0.4,1-1,1-1.8v-13.4C426.6,107.5,426.3,106.9,425.6,106.5z"
            />
            <path
              className="st2"
              d="M450.1,16.8c-2.6-3.4-5.7-5.1-9.5-5.1c-3.2,0-6,1.2-8.3,3.7c-2.2,2.3-3.4,5.4-3.4,8.8c0,5.6,2.8,9.5,8.3,11.7
			c-0.2,3.6-0.9,5.9-1.4,7.2c-0.7,1.8-2.2,3.8-4.5,6.1c-0.4,0.4-0.6,0.9-0.6,1.4v3c0,0.6,0.3,1.3,0.8,1.6c0.4,0.3,0.8,0.4,1.2,0.4
			c0.2,0,0.4,0,0.6-0.1c6.1-1.9,11.1-5.3,14.8-10.1c3.6-4.8,5.5-10.4,5.5-16.7C453.5,24.1,452.4,20,450.1,16.8z"
            />
            <path
              className="st2"
              d="M485.8,81.6l-5.2-3c-3.7-2.1-6.3-3.8-7.7-5.1c-1.5-1.5-1.7-2.6-1.7-3.3c0-1.3,0.5-2.2,1.7-3
			c1.3-0.9,3.3-1.4,5.6-1.4c5.1,0,11.7,2.5,19.9,7.4c0.3,0.2,0.7,0.3,1.1,0.3c0.3,0,0.7-0.1,1-0.3c0.6-0.4,1-1,1-1.8V57.3
			c0-0.8-0.4-1.4-1.1-1.8c-7.9-4.2-15.4-6.2-22.8-6.2c-7.3,0-13.4,1.9-18,5.7c-4.8,3.8-7.3,8.9-7.3,15.2c0,4.8,1.6,9.2,4.7,13.2
			c3,3.8,9.1,8.3,18.8,13.7c4.6,2.6,7.4,4.4,8.6,5.7c1,1,1.5,2.3,1.5,3.8c0,1.3-0.8,2.6-2.4,3.6c-1.7,1.2-3.9,1.9-6.5,1.9
			c-2.5,0-6-0.9-9.9-2.5c-4-1.6-8-3.9-12-6.7c-0.3-0.2-0.8-0.4-1.2-0.4c-0.3,0-0.6,0.1-0.9,0.2c-0.7,0.3-1.1,1-1.1,1.8V120
			c0,0.8,0.4,1.5,1.2,1.8c5.9,2.8,9.8,4.3,13.1,5c3.6,1,7.6,1.5,11.9,1.5c7.6,0,14.1-2.1,19.2-6.2c5.1-4.2,7.7-9.7,7.7-16.2
			C504.9,97,498.5,88.8,485.8,81.6z"
            />
          </g>
          <g>
            <path
              className="st1"
              d="M105.7,4.3c0.6-0.2,1.3-0.3,2-0.4c0.7-0.1,1.5-0.1,2.4-0.1c0.2,0,0.4,0,0.7,0.1c0.3,0.1,0.6,0.1,0.8,0.1
			c0.3,0,0.5,0.1,0.6,0.1c0.2,0,0.4,0.1,0.7,0.2l0.6-0.2c0.1,0,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.2,0.6,0.3c0.1-0.1,0.3-0.2,0.5-0.3
			c0.2,0,0.4,0.1,0.5,0.3c0.1,0.2,0.2,0.4,0.3,0.7c0,0.2,0,0.5,0,0.7s0,0.5,0,0.7c0,0.1,0,0.3,0,0.5s0,0.4,0,0.6
			c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.3,0.1c-0.6,0-1.1,0-1.6-0.1c-0.5-0.1-1.1-0.2-1.6-0.4c-0.5,0.1-0.9,0.2-1.2,0.2
			s-0.5,0.1-0.6,0.1c-0.1,0.1-0.2,0.1-0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.4,0.5
			c0.1,0.2,0.3,0.6,0.4,1c0.1,0.2,0.1,0.3,0.1,0.5s0,0.3,0,0.4c0,0.3,0,0.7-0.1,1.2s-0.1,0.8-0.2,1.1c-0.1,0.6-0.2,1-0.3,1.4
			s-0.1,0.7-0.2,0.8c0,0.1-0.1,0.3-0.1,0.5s0,0.4,0,0.7c0,0.2-0.1,0.5-0.2,0.8c-0.1,0.3-0.2,0.7-0.3,1.1c0,0.2,0,0.4-0.1,0.7
			c-0.1,0.3-0.1,0.5-0.2,0.9c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.2,0.5-0.3,0.8c0,0.2,0.1,0.4,0.1,0.7c-0.1,0.4-0.1,0.8-0.2,1.3
			c-0.1,0.6-0.2,1.3-0.3,1.9c-0.1,0.6-0.2,1.3-0.2,1.9c-0.1,0.2-0.2,0.4-0.3,0.6c0,0.1,0,0.3,0.1,0.5c0,0.2,0.1,0.4,0.1,0.5
			c0,0.2,0,0.4-0.1,0.7c-0.1,0.3-0.1,0.5-0.1,0.7c0,0.3,0,0.7,0,1.3c0,0.6,0,1,0,1.3c0.1,0.2,0.1,0.5,0.2,0.7c0,0.2-0.1,0.4-0.1,0.5
			c-0.1,0.1-0.1,0.2-0.2,0.3c-0.3,0.2-0.5,0.3-0.7,0.4c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.2,0.1-0.3,0.1c-0.3,0-0.5,0-0.7-0.1
			c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.5,0.1-0.9,0.2-1.4c0-0.1-0.1-0.1-0.1-0.3c0-0.1-0.1-0.3-0.2-0.4c-0.1-1.1-0.2-2.3-0.3-3.6
			c0-0.9,0.1-1.7,0.1-2.6c0-0.4,0-0.9,0.1-1.5c0-0.6,0.1-1.3,0.2-2.2c0.1-0.8,0.2-1.5,0.2-2.1c0-0.6,0.1-1.1,0.1-1.5
			c0-0.2,0-0.4,0.1-0.7c0-0.3,0.1-0.6,0.1-1c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0.1-0.5,0.1-0.7c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4
			c0.1-0.4,0.3-0.7,0.3-0.9c0-0.2,0.1-0.4,0.1-0.4c-0.1-0.2-0.1-0.4-0.2-0.6c0.1-0.2,0.2-0.6,0.3-1.1s0.2-1.2,0.3-2.1
			c0-0.2,0-0.4,0-0.6s0-0.5,0-0.9l-0.1-0.4c-0.1,0-0.2-0.1-0.3-0.1s-0.3-0.1-0.6-0.1l-0.3,0.2c-0.2,0-0.4,0.1-0.6,0.1
			s-0.4,0.1-0.6,0.2c-1.5,0.4-3,0.8-4.6,1.2c-0.1,0-0.2,0-0.3-0.1s-0.1-0.2-0.1-0.4c0-0.1,0-0.2,0.1-0.5c0.1-0.2,0.2-0.5,0.4-0.9
			c0-0.5,0.1-0.9,0.1-1.3c0-0.3,0.1-0.6,0.2-0.8c0.1-0.3,0.3-0.6,0.5-0.8c0.2-0.2,0.5-0.4,0.9-0.5c0.7-0.2,1.3-0.4,1.9-0.4
			C104.6,4.3,105.2,4.3,105.7,4.3z"
            />
            <path
              className="st1"
              d="M113.8,29.2c0.3-0.3,0.6-0.5,0.7-0.7s0.3-0.3,0.4-0.4c0.2-0.2,0.4-0.4,0.6-0.6c0.1-0.2,0.2-0.4,0.2-0.5
			c0.1-0.5,0.3-1.1,0.5-1.9c0.2-0.8,0.4-1.6,0.7-2.6c0.1-0.3,0.3-0.7,0.4-1.1c0.1-0.4,0.3-0.9,0.5-1.5c0.2-0.7,0.4-1.4,0.7-2
			c0.3-0.6,0.6-1.1,0.9-1.6c0.1-0.1,0.2-0.3,0.3-0.5s0.2-0.4,0.3-0.7c0.1-0.2,0.2-0.5,0.4-0.8s0.4-0.7,0.6-1.1
			c0.6-0.9,1.1-1.6,1.6-2.3c0.5-0.6,0.8-1.1,1.1-1.5c0.5-0.6,1.1-1.2,1.6-1.8c0.5-0.5,1.1-1.1,1.6-1.5s0.9-0.7,1.3-0.9
			c0.4-0.2,0.7-0.3,0.9-0.3c0.2,0.2,0.4,0.3,0.4,0.5c0.1,0,0.2,0,0.3,0c0.4,0,0.7,0.2,0.8,0.5c0.2,0.3,0.3,0.8,0.3,1.4
			c0,0.1,0,0.3-0.1,0.5c0,0.2-0.1,0.5-0.2,0.8c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.2-0.1,0.3-0.1,0.5c0,0.2,0,0.4-0.1,0.5
			c0,0.1-0.1,0.3-0.1,0.4c-0.2,0.4-0.4,0.8-0.6,1.3c-0.2,0.5-0.5,1.1-0.7,1.8c-0.1,0.2-0.3,0.6-0.5,1c-0.2,0.4-0.5,0.9-0.8,1.4
			c-0.1,0.3-0.3,0.6-0.6,1c-0.2,0.4-0.5,0.9-0.9,1.4c-0.1,0.2-0.2,0.4-0.4,0.7c-0.2,0.2-0.5,0.5-0.8,0.8c-0.1,0.2-0.3,0.6-0.7,1.2
			c-0.4,0.6-1,1.3-1.7,2.2c-0.4,0.5-0.8,1-1.4,1.7c-0.6,0.7-1.2,1.5-1.9,2.4c-0.3,1.1-0.5,2.1-0.6,2.9c-0.1,0.9-0.2,1.6-0.2,2.2
			c0,0.2,0,0.4,0.1,0.6c0,0.1,0.1,0.2,0.2,0.2c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.1,0.3-0.3,0.4-0.5c0.3-0.2,0.6-0.7,1-1.4
			s0.8-1.5,1.3-2.6c0.4-1,0.8-1.7,1.1-2.2c0.3-0.5,0.6-0.8,0.8-0.9l0.8-0.3c0.1-0.1,0.3-0.1,0.4-0.2c0.1,0,0.2-0.1,0.3-0.1
			c0.2,0,0.4,0.1,0.5,0.4c0.2,0.2,0.3,0.6,0.4,1c0.2,0.7,0.3,1.3,0.5,1.7c0.1,0.4,0.2,0.6,0.2,0.7c0.2,0.4,0.4,0.8,0.7,1
			c0.3,0.2,0.6,0.3,1,0.3c0.5-0.1,1-0.2,1.6-0.3c0.1,0.3,0.3,0.6,0.4,0.9c0.2,0.3,0.3,0.7,0.5,1.1c-0.4,0.2-0.7,0.5-1.1,0.7
			c-0.4,0.2-0.7,0.4-1.1,0.7c-0.2,0.1-0.6,0.2-1,0.3c-0.4,0.1-1,0.1-1.5,0.1c-0.9,0-1.6-0.4-2.1-1.3c-0.5-0.8-0.8-1.3-0.9-1.2h-0.1
			c-0.2,0.3-0.5,0.6-0.7,0.9c-0.3,0.3-0.5,0.6-0.8,1c-0.2,0.3-0.4,0.7-0.7,1.2c-0.3,0.4-0.6,0.9-1.1,1.4c-0.5,0.6-0.9,1-1.3,1.3
			c-0.4,0.3-0.7,0.4-0.9,0.4c-0.6,0-1-0.1-1.3-0.2c-0.3-0.1-0.5-0.3-0.6-0.6c-0.2-0.8-0.3-1.5-0.4-2.1c-0.1-0.6-0.1-1.1-0.1-1.5
			c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.3c0-0.2,0.1-0.4,0.2-0.6c0-0.1,0-0.1-0.1-0.2c0,0-0.1-0.1-0.2-0.1c0,0.1-0.1,0.1-0.2,0.2
			c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1-0.2-0.2-0.5-0.3-0.8C114.2,30.1,114.1,29.7,113.8,29.2z M128.3,8.6c-0.2,0-0.5,0.3-1,0.9
			s-1.1,1.4-1.8,2.6c-0.4,0.6-0.8,1.3-1.2,1.9c-0.4,0.6-0.8,1.2-1.2,1.8c-0.2,0.2-0.3,0.4-0.4,0.5c-0.1,0.2-0.1,0.4-0.1,0.5
			c-0.3,0.8-0.6,1.6-0.9,2.3c-0.3,0.8-0.5,1.4-0.6,1.8c-0.1,0.4-0.3,0.7-0.3,0.7l0.1,0.1c0.3-0.3,0.5-0.5,0.7-0.8
			c0.3-0.3,0.6-0.8,1.1-1.3c0.4-0.5,0.9-1.2,1.4-1.9c0.5-0.7,1.1-1.5,1.6-2.6c0.6-1,1.2-2.2,1.8-3.7c0.4-0.7,0.6-1.3,0.8-1.8
			c0.2-0.4,0.3-0.7,0.3-0.9c0-0.1,0-0.2-0.1-0.3C128.5,8.7,128.4,8.6,128.3,8.6z"
            />
            <path
              className="st1"
              d="M130.1,29.2c0.2-0.3,0.4-0.6,0.7-0.9c0.3-0.3,0.6-0.6,1.1-1c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0.1-0.6,0.1-0.9
			c0-0.2,0.1-0.4,0.2-0.7c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.3,0.3-0.7,0.5-1.2c0.2-0.5,0.5-1,0.9-1.6c0.3-0.3,0.6-0.7,1-1.1
			c0.3-0.4,0.7-0.8,1-1.2c0.2-0.1,0.3-0.3,0.5-0.4c0.2-0.1,0.4-0.2,0.6-0.4c0.2-0.1,0.4-0.1,0.6-0.2c0.2,0,0.5-0.1,0.7-0.1
			c0.4,0,0.7,0,0.9,0.1s0.4,0.2,0.6,0.4c0.1,0.1,0.2,0.3,0.3,0.5c0.1,0.2,0.2,0.5,0.3,0.9c0,0.3,0.1,0.6,0.2,1c0-0.1,0-0.1-0.1,0.1
			c-0.1,0.2-0.1,0.4-0.2,0.8l-0.2,0.7c-0.2,0.7-0.7,1.5-1.4,2.4c-0.7,0.9-1.7,2-2.9,3.2c-0.1,0.1-0.2,0.2-0.3,0.4
			c-0.1,0.2-0.1,0.3-0.1,0.5c0,0.3,0.1,0.6,0.2,0.8c0.1,0.2,0.3,0.4,0.5,0.5c0.1,0.1,0.3,0.2,0.6,0.3c0.3,0.1,0.6,0.2,0.9,0.2
			c0.6,0,1.1-0.1,1.6-0.3c0.5-0.1,0.9-0.3,1.2-0.5c0.1,0,0.2-0.1,0.4-0.2c0.2-0.1,0.3-0.2,0.5-0.3c0.2,0.4,0.4,0.8,0.5,1.1
			c0.1,0.3,0.3,0.6,0.4,0.9c-0.8,0.8-1.6,1.4-2.3,1.9c-0.7,0.5-1.3,0.6-1.9,0.6c-0.2,0.1-0.5,0.3-0.8,0.3c-0.3,0.1-0.7,0.1-1.1,0.1
			c-0.5,0-1-0.1-1.4-0.2c-0.4-0.2-0.8-0.4-1-0.7c-0.1-0.1-0.3-0.4-0.4-0.6c-0.1-0.3-0.3-0.6-0.5-1c-0.1-0.3-0.3-0.6-0.4-0.7
			c-0.1-0.2-0.2-0.2-0.4-0.2c-0.1,0-0.2,0.1-0.4,0.2c-0.1,0.1-0.3,0.3-0.5,0.5c-0.1-0.2-0.2-0.5-0.3-0.8
			C130.5,30.1,130.3,29.7,130.1,29.2z M137.2,22c-0.3,0-0.8,0.4-1.3,1.3c-0.5,0.8-0.8,1.5-0.8,1.9c0,0.1,0,0.1,0.1,0.2
			c0,0,0.1,0.1,0.2,0.1c0.2,0,0.3-0.1,0.4-0.3c0.1-0.2,0.2-0.3,0.3-0.5c0.2-0.1,0.3-0.3,0.5-0.5c0.2-0.2,0.3-0.3,0.4-0.5
			c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.1-0.4,0.1-0.6c0-0.1,0-0.2-0.1-0.3C137.4,22,137.3,22,137.2,22z"
            />
          </g>
        </g>
      </HottestVector>
    </HottestVectorWrapper>
  );
};

export default Hottest;
