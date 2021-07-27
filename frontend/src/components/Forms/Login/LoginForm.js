import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";
import styled from "styled-components";
import {
  accentColor,
  neutral,
  breakpoints,
  navyBlue,
  danger,
} from "../../Utilities";
import { login } from "../../../store/actions";
import AuthMessage from "../AuthMessage";
import { clearAuthMessage, setShowLoader } from "../../../store/actions/ui";
import { useDispatch } from "react-redux";
import IconButton from "../../Utilities/Buttons/IconButton";

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
    margin: 0.75rem 0;
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
const LoginForm = ({ isAuthenticated, authMessage }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data["email"];
    const password = data["password"];
    dispatch(login(email, password));
    dispatch(setShowLoader(true));
    console.log("loggin in ");
  };

  // const continueWithGoogle = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}`
  //     );
  //     window.location.replace(res.data.authorization_url);
  //   } catch (err) {}
  // };

  // Check if there is a message and show it
  const showMessage = (authMessage) => {
    if (authMessage !== "") {
      const message = authMessage;
      return message;
    }
  };

  // Clear error message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      dispatch(clearAuthMessage());
    }, [6000]);
  }, [dispatch, authMessage]);

  // If the user authenticated, redirect to home page
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <FormWrapper>
      <div className="form-container">
        <h2 className="form-header">Log In</h2>
        {authMessage && showMessage && <AuthMessage message={authMessage} />}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <input
              className="form-in"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error-msg">Email is required</span>
            )}
          </FormGroup>
          <FormGroup>
            <input
              className="form-in"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="error-msg">Password is required</span>
            )}
          </FormGroup>
          <IconButton>Login</IconButton>
        </form>
        <p className="alt-txt">
          Don't have an account?{" "}
          <Link className="alt-link" to="/sign-up">
            Sign Up
          </Link>
        </p>

        <p className="alt-txt">
          Forgot your password?{" "}
          <Link className="alt-link" to="/reset-password">
            Reset Password
          </Link>
        </p>
      </div>
      {/* <button className="google-btn" onClick={continueWithGoogle}>
        <img className="google-logo" src={googleLogo} alt="google" />
        Continue With Google
      </button> */}
    </FormWrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  authMessage: state.ui.authMessage,
});

export default connect(mapStateToProps, {})(LoginForm);
