import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/logo.svg";
import { neutral } from "./Colors";

const LoaderContainer = styled.div`
  background-color: ${neutral[600]};
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 30vw;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <img className="logo" src={logoImg} alt="Sliq Logo" />
    </LoaderContainer>
  );
};

export default Loader;
