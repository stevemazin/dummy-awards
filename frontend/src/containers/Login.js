import React, { useEffect } from "react";
import styled from "styled-components";
import { setNavSolid } from "../store/actions";
import LoginForm from "../components/Forms/Login/LoginForm";
import DummyAwardsLogo from "../components/Utilities/InlineSVGs/DALogo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginWrapper = styled.div`
  min-height: fit-content;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .utility-container {
    height: 100%;
    min-height: 65rem;
  }

  .home-link {
    margin-top: 6rem;
    text-align: center;
  }
`;

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavSolid());
  }, [dispatch]);

  return (
    <LoginWrapper>
      <div className="utility-container">
        <div className="home-link">
          <Link to="/">
            <DummyAwardsLogo />
          </Link>
        </div>
        <LoginForm />
      </div>
    </LoginWrapper>
  );
};

export default Login;
