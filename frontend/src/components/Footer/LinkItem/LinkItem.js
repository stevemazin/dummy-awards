import React from "react";
import styled from "styled-components";
import { accentColor, neutral } from "../../Utilities";
import { Link } from "react-router-dom";
import Dash from "../../Utilities/InlineSVGs/Dash";

const LinkItemCombo = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: ${neutral[100]};
  transition: transform 100ms ease-in;

  &:hover {
    color: ${accentColor[300]};

    .st0 {
      fill: ${accentColor[300]};
    }
  }
`;

const LinkItem = (props) => {
  return (
    <LinkItemCombo to={props.destination}>
      <Dash />
      <span>{props.destinationTag}</span>
    </LinkItemCombo>
  );
};

export default LinkItem;
