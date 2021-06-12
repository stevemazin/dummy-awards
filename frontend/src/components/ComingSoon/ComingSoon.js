import React, { useEffect } from "react";
import styled from "styled-components";
import { neutral } from "../Utilities";
import { setNavTransparent } from "../../store/actions";
import { connect } from "react-redux";
import heroImg from "../../assets/mega-concert.svg";

const DevWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  p {
    color: ${neutral[100]};
  }
`;

const ComingSoon = ({ setNavTransparent }) => {
  useEffect(() => {
    setNavTransparent();
  });

  return (
    <DevWrapper>
      <div>
        <p>Feature Coming Soon!</p>
      </div>
    </DevWrapper>
  );
};

export default connect(null, {
  setNavTransparent,
})(ComingSoon);
