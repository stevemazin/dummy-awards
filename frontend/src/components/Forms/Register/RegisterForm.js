import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import {
  accentColor,
  neutral,
  breakpoints,
  danger,
  navyBlue,
} from "../../Utilities";
import { signUp } from "../../../store/actions/auth";
import googleLogo from "../../../assets/google-logo.svg";
import {
  clearAuthMessage,
  setShowLoader,
  showAuthMessage,
} from "../../../store/actions/ui";
import AuthMessage from "../AuthMessage";

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
    margin-bottom: 1rem;
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
    color: ${danger[200]};
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

const RegisterForm = ({
  isAuthenticated,
  authMessage,
  showAuthMessage,
  clearAuthMessage,
  signUpStatus,
}) => {
  // Validation Stuff
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    re_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const [accountCreated, setAccountCreated] = useState(false);
  const dispatch = useDispatch();

  // Submit the register form
  const onSubmit = (data) => {
    const first_name = data["first_name"];
    const last_name = data["last_name"];
    const email = data["email"];
    const password = data["password"];
    const re_password = data["re_password"];

    console.log("Password Ok");
    console.log(data["password"]);

    const attemptSignup = async () => {
      dispatch(setShowLoader(true));
      await dispatch(
        signUp(first_name, last_name, email, password, re_password)
      );
      // make loader spin for atleast 2 seconds for improved user experience
      setTimeout(() => {
        dispatch(setShowLoader(false));
        setAccountCreated(true);
      }, [2000]);
    };
    attemptSignup();
  };

  // Check if there is a message and show it
  const showMessage = (authMessage) => {
    if (authMessage !== "") {
      const message = authMessage;
      return message;
    }
  };

  if (accountCreated && signUpStatus === "success") {
    return <Redirect to="/" />;
  }

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

  return (
    <FormWrapper>
      <div className="form-container">
        <h2 className="form-header">Register</h2>
        {authMessage && showMessage && <AuthMessage message={authMessage} />}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-2">
            <FormGroup className="form-in-sm">
              <input
                className="form-in "
                type="text"
                name="first_name"
                placeholder="First name"
                {...register("first_name")}
              />
              {errors.first_name && (
                <span className="error-msg">{errors.first_name.message}</span>
              )}
            </FormGroup>
            <FormGroup className="form-in-sm">
              <input
                className="form-in form-in-sm"
                type="text"
                name="last_name"
                placeholder="Last name"
                {...register("last_name")}
              />
              {errors.last_name && (
                <span className="error-msg">{errors.last_name.message}</span>
              )}
            </FormGroup>
          </div>
          <FormGroup
            onClick={() => {
              // wait 5 seconds befor clearing the unique email error
              setTimeout(() => {
                clearAuthMessage();
              }, [5000]);
            }}
          >
            <input
              className="form-in"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className="error-msg">{errors.email.message}</span>
            )}
          </FormGroup>
          <FormGroup>
            <input
              className="form-in"
              type="password"
              name="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <span className="error-msg">{errors.password.message}</span>
            )}
          </FormGroup>
          <FormGroup>
            <input
              className="form-in"
              type="password"
              name="re_password"
              placeholder="Confirm Password"
              {...register("re_password")}
            />

            {errors.re_password && (
              <span className="error-msg">{errors.re_password.message}</span>
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
  signUpStatus: state.auth.signUpStatus,
  showAuthMessage: state.ui.showAuthMessage,
  authMessage: state.ui.authMessage,
});

export default connect(mapStateToProps, {
  showAuthMessage,
  clearAuthMessage,
})(RegisterForm);
