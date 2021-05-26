import React from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { accentColor, neutral, breakpoints } from "../../Utilities";
import { login } from "../../../store/actions";

const FormWrapper = styled.div`
  font-size: 1.6rem;
  width: 35rem;
  padding: 2rem;
  border-radius: 1rem;

  @media screen and (max-width: ${breakpoints.Tablet}) {
    width: 32.5rem;
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
    margin: 1rem;
    text-align: center;
    font-size: 1.4rem;
    color: ${neutral[100]};
  }

  .form-header {
    color: ${accentColor[300]};
    margin-left: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-primary {
    background-color: ${accentColor[300]};

    &:active {
      background-color: ${accentColor[400]};
    }
  }

  .btn-google {
    background-color: #cc3333;

    &:active {
      background-color: #cc3333;
    }
  }

  .btn {
    border-radius: 5px;
    outline: none;
    border: none;
    height: 4.2rem;
    width: 100%;
    color: ${neutral[100]};
    font-size: 1.3rem;
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
const LoginForm = ({ login, isAuthenticated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const email = data["email"];
    const password = data["password"];

    console.log("Password Ok");
    console.log(data["password"]);
    login(email, password);
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}`
      );
      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  // If the user authenticated, redirect to home page
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <FormWrapper>
      <h2 className="form-header">Log In</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
        </FormGroup>

        <input className="btn btn-primary  mt-1" value="Login" type="submit" />
      </form>

      <p className="alt-txt">Or</p>
      <button className="btn btn-google" onClick={continueWithGoogle}>
        Continue With Google
      </button>

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
    </FormWrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
