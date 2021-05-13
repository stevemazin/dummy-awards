import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { resetPassConfirm } from "../store/actions/auth";
import styled from "styled-components";

const FormWrapper = styled.div`
  font-size: 1.6rem;
  width: 30rem;

  .mt-1 {
    margin-top: 1rem;
  }

  .form-header {
    margin-left: 1rem;
    margin-bottom: 1.5rem;
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

const ResetPasswordConfirm = ({ match, resetPassConfirm }) => {
  const [requestSent, setRequestSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const uid = match.params.uid;
    const token = match.params.token;

    new_password = data["new_password"];
    re_new_password = data["re_new_password"];

    resetPassConfirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/" />;
  }

  return (
    <FormWrapper>
      <h1 className="form-header">Enter new password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <input
            className="form-in"
            type="password"
            placeholder="Password"
            {...register("new_password", { required: true })}
          />
          {errors.new_password && (
            <p className="error-msg">Password is required.</p>
          )}
        </FormGroup>{" "}
        <FormGroup>
          <input
            className="form-in"
            type="password"
            placeholder="Confirm Password"
            {...register("re_new_password", { required: true })}
          />
          {errors.re_new_password && (
            <p className="error-msg">Password must match.</p>
          )}
        </FormGroup>
        <button className="btn btn-primary" type="submit">
          Reset Password
        </button>
      </form>
    </FormWrapper>
  );
};

export default connect(null, { resetPassConfirm })(ResetPasswordConfirm);
