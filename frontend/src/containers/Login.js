import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setNavSolid } from "../store/actions";
import LoginForm from "../components/Forms/Login/LoginForm";
import heroImg from "../assets/mega-concert.svg";
import SliqLogo from "../components/Utilities/InlineSVGs/SliqLogo";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  .utility-container {
    height: 100vh;
    min-height: 65rem;
  }

  .home-link {
    margin-top: 6rem;
    text-align: center;
  }
`;

const Login = ({ setNavSolid }) => {
  useEffect(() => {
    setNavSolid();
  }, []);

  return (
    <LoginWrapper>
      <div className="utility-container">
        <div className="home-link">
          <Link to="/">
            <SliqLogo />
          </Link>
        </div>
        <LoginForm />
      </div>
    </LoginWrapper>
  );
};

export default connect(null, {
  setNavSolid,
})(Login);
