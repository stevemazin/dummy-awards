import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { activateUser } from "../store/actions/auth";
import styled from "styled-components";
import { accentColor, infoBlue, neutral } from "../components/Utilities";

const ActivateWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .form-header {
    margin-left: 1rem;
    margin-bottom: 1.5rem;
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
        <h3 className="form-header">Verify your account</h3>
        <button
          onClick={verifyAccount}
          className="btn btn-primary"
          type="button"
        >
          Activate Account
        </button>
      </div>
    </ActivateWrapper>
  );
};

export default connect(null, { activateUser })(Activate);
