import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setNavSolid } from "../store/actions";
import RegisterForm from "../components/Forms/Register/RegisterForm";
import heroImg from "../assets/mega-concert.svg";
import { Link } from "react-router-dom";
import SliqLogo from "../components/Utilities/SliqLogo";

const RegisterWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  .utility-container {
    height: 100vh;
    min-height: 75rem;
  }

  .home-link {
    margin-top: 6rem;
    text-align: center;
  }
`;

const Register = ({ setNavSolid }) => {
  useEffect(() => {
    setNavSolid();
  }, []);

  return (
    <RegisterWrapper>
      <div className="utility-container">
        <div className="home-link">
          <Link to="/">
            <SliqLogo />
          </Link>
        </div>
        <RegisterForm />
      </div>
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
  setNavSolid,
})(Register);
