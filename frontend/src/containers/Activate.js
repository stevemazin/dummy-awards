import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { activateUser } from "../store/actions/auth";
import styled from "styled-components";
import { accentColor, infoBlue, neutral } from "../components/Utilities";
import heroImg from "../assets/mega-concert.svg";

const ActivateWrapper = styled.div`
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
  text-align: center;

  .form-header {
    color: ${neutral[100]};
    font-size: 2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .activate-container {
    width: 30rem;
    height: auto;
  }

  .btn-primary {
    background-color: ${accentColor[300]};

    &:active {
      background-color: ${accentColor[400]};
    }
  }

  .btn-google {
    background-color: ${infoBlue[200]};

    &:active {
      background-color: ${infoBlue[300]};
    }
  }

  .btn {
    border-radius: 5px;
    outline: none;
    border: none;
    height: 4.2rem;
    width: 100%;
    color: ${neutral[100]};
    margin-bottom: 1rem;
  }
`;

const Activate = ({ activateUser, match }) => {
  const [verfied, setVerified] = useState(false);

  const verifyAccount = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    activateUser(uid, token);
    setVerified(true);
  };

  // Is the user is verified, redirect to home page
  if (verfied) {
    return <Redirect to="/" />;
  }

  return (
    <ActivateWrapper>
      <div className="activate-container">
        <h3 className="form-header">Activate your account</h3>
        <button onClick={verifyAccount} className="fx-dark-btn" type="button">
          Activate Account
        </button>
      </div>
    </ActivateWrapper>
  );
};

export default connect(null, { activateUser })(Activate);
