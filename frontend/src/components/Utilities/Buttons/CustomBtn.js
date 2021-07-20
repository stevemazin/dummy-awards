import React from "react";
import styled from "styled-components";
import CircularSpinner from "./Spinner/CircularSpinner";

const Btn = styled.button`
  width: fit-content;
  padding: 0 1rem;
  height: 4.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconButton = (props) => {
  return (
    <Btn>
      <span>{props.children}</span>
      <CircularSpinner />
    </Btn>
  );
};

export default IconButton;
