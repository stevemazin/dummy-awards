import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  setNavTransparent,
  setNavSolid,
  switchHeroPresence,
  switchHeroVisibility,
} from "../store/actions";
import RegisterForm from "../components/Forms/Register/RegisterForm";
import heroImg from "../assets/soundtrap-5Wj_tk8_Ens-unsplash.jpg";

const RegisterWrapper = styled.div`
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
`;

const Register = ({ setNavTransparent }) => {
  useEffect(() => {
    setNavTransparent();
  });

  return (
    <RegisterWrapper>
      <RegisterForm />
    </RegisterWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    heroIsPresent: state.ui.heroIsPresent,
    navBgColor: state.ui.navBgColor,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {
  setNavTransparent,
  setNavSolid,
  switchHeroVisibility,
  switchHeroPresence,
})(Register);
