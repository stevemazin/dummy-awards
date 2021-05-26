import React from "react";
import styled from "styled-components";
import { accentColor, neutral } from "../../Utilities";
import { Link } from "react-router-dom";

const LinkItemCombo = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: ${neutral[100]};
  transition: all 150ms ease-in;

  &:hover {
    transform: translateX(0.5rem);
    color: ${accentColor[300]};

    .line {
      stroke: ${neutral[100]};
    }
  }
`;

const LinkItem = (props) => {
  return (
    <LinkItemCombo to={props.destination}>
      <span>- </span>
      <span>{props.destinationTag}</span>
    </LinkItemCombo>
  );
};

export default LinkItem;
