import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { resetPassword } from "../store/actions/auth";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { neutral, accentColor, infoBlue } from "../components/Utilities";
import heroImg from "../assets/mega-concert.svg";

const ResetPasswordContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  font-size: 1.6rem;
  width: 30rem;

  .mt-1 {
    margin-top: 1rem;
  }

  .form-header {
    color: ${neutral[100]};
    margin-left: 1rem;
    margin-bottom: 1rem;
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

const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  .form-in {
    width: 100%;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 1.2rem 1rem;
    outline: none;
    background-color: ${neutral[100]};
    font-size: 1.5rem;

    &:active,
    &:focus {
      background-color: ${neutral[100]};
      border: 1px solid ${accentColor[300]};
    }

    &:valid {
      background-color: ${neutral[100]};
    }
  }

  .error-msg {
    color: red;
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

const ResetPassword = ({ resetPassword }) => {
  const [requestSent, setRequestSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data["email"]);
    const email = data["email"];
    resetPassword(email);
    setRequestSent(true);
  };

  // Is the user authenticated, redirect to home page
  if (requestSent) {
    return <Redirect to="/" />;
  }

  return (
    <ResetPasswordContainer>
      <FormWrapper>
        <h2 className="form-header">Request Password Reset</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup className="form-group mb-2">
            <input
              className="form-in"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="error-msg">Email is required.</p>}
          </FormGroup>

          <button className="fx-dark-btn" type="submit">
            Reset Password
          </button>
        </form>
      </FormWrapper>
    </ResetPasswordContainer>
  );
};

export default connect(null, { resetPassword })(ResetPassword);
