import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import {
  accentColor,
  neutral,
  breakpoints,
  red,
  navyBlue,
} from "../../Utilities";
import { signUp } from "../../../store/actions/auth";
import googleLogo from "../../../assets/google-logo.svg";

const FormWrapper = styled.div`
  font-size: 1.6rem;
  margin-top: 2rem;

  .form-container {
    background-color: ${neutral[100]};
    width: 35rem;
    padding: 2rem;
    border-radius: 1rem;

    @media screen and (max-width: ${breakpoints.Tablet}) {
      width: 32.5rem;
    }
  }

  .google-btn {
    margin-top: 2rem;
    background-color: ${neutral[200]};
    border: none;
    cursor: pointer;
    height: 4.2rem;
    width: 35rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${neutral[300]};
    }

    .google-logo {
      height: 2rem;
      margin-right: 1rem;
    }

    @media screen and (max-width: ${breakpoints.Tablet}) {
      width: 32.5rem;
    }
  }

  .col-2 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media screen and (max-width: ${breakpoints.Tablet}) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  .form-in-sm {
    width: 100%;
  }

  .p-2 {
    margin: 1rem;
  }

  .mt-1 {
    margin-top: 1rem;
  }

  .alt-link {
    color: ${accentColor[300]};
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      color: ${accentColor[400]};
    }
  }

  .alt-txt {
    margin: 1rem auto;
    text-align: center;
    font-size: 1.4rem;
    color: ${navyBlue[300]};
  }

  .form-header {
    color: ${navyBlue[300]};
    margin-left: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-google {
    background-color: #cc3333;

    &:active {
      background-color: #cc3333;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  .form-in {
    width: 100%;
    border: 1px solid ${neutral[300]};
    border-radius: 5px;
    padding: 1rem 1rem;
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
    color: ${red[200]};
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

const RegisterForm = ({ signUp, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit the register form
  const onSubmit = (data) => {
    if (data["password"] === data["re_password"]) {
      const first_name = data["first_name"];
      const last_name = data["last_name"];
      const email = data["email"];
      const password = data["password"];
      const re_password = data["re_password"];

      console.log("Password Ok");
      console.log(data["password"]);

      signUp(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  // Register using google
  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}`
      );
      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  // Is the user authenticated, redirect to home page
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  // Is the account is created, redirect to login
  if (accountCreated) {
    return <Redirect to="/login" />;
  }

  return (
    <FormWrapper>
      <div className="form-container">
        <h2 className="form-header">Register</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-2">
            <FormGroup className="form-in-sm">
              <input
                className="form-in "
                type="text"
                placeholder="First name"
                {...register("first_name", { required: true })}
              />
              {errors.first_name && (
                <p className="error-msg">First name is required.</p>
              )}
            </FormGroup>
            <FormGroup className="form-in-sm">
              <input
                className="form-in form-in-sm"
                type="text"
                placeholder="Last name"
                {...register("last_name", { required: true })}
              />
              {errors.last_name && (
                <p className="error-msg">Last name is required.</p>
              )}
            </FormGroup>
          </div>
          <FormGroup>
            <input
              className="form-in"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="error-msg">Email is required.</p>}
          </FormGroup>
          <FormGroup>
            <input
              className="form-in"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="error-msg">Password is required.</p>
            )}
          </FormGroup>{" "}
          <FormGroup>
            <input
              className="form-in"
              type="password"
              placeholder="Confirm Password"
              {...register("re_password", { required: true })}
            />
            {errors.re_password && (
              <p className="error-msg">Password is required.</p>
            )}
          </FormGroup>
          <input className="fx-dark-btn" value="Register" type="submit" />
        </form>

        <p className="alt-txt">
          Already have an account?{" "}
          <Link className="alt-link" to="/login">
            Sign In
          </Link>
        </p>
      </div>

      <button className="google-btn" onClick={continueWithGoogle}>
        <img className="google-logo" src={googleLogo} alt="google" />
        Continue With Google
      </button>
    </FormWrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signUp })(RegisterForm);
