import { navyBlue, accentColor, neutral } from "../index";

import styled from "styled-components";
import { Link } from "react-router-dom";

// Main Button
export const MainButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  padding: 0 2rem;
  margin: 1rem 0;
  height: 4.2rem;
  /* width: 144px; */
  background-color: transparent;

  color: ${neutral[100]};
  font-size: 1.6rem;
  border: 2px solid ${accentColor[300]};
  border-radius: 5px;
  outline: none;
  transition: all 200ms ease-in;

  &:hover {
    background-color: ${accentColor[300]};
    color: ${neutral[100]};
    border: 2px solid transparent};
  }
`;

// Main Button Small
export const SmallButton = styled.button`
  cursor: pointer;
  margin: 1rem 0;
  height: 3.6rem;
  background-color: ${accentColor[300]};
  padding: 0 2rem;
  color: ${neutral[100]};
  font-size: 1.4rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  transition: all 200ms ease-in;

  &:hover {
    background-color: transparent;
    border: 2px solid ${accentColor[300]};
  }
`;
