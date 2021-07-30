import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setNavSolid } from "../store/actions";
import RegisterForm from "../components/Forms/Register/RegisterForm";
import { Link } from "react-router-dom";
import DummyAwardsLogo from "../components/Utilities/InlineSVGs/DALogo";
import { useDispatch } from "react-redux";

const RegisterWrapper = styled.div`
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

const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavSolid());
  }, [dispatch]);

  return (
    <RegisterWrapper>
      <div className="utility-container">
        <div className="home-link">
          <Link to="/">
            <DummyAwardsLogo />
          </Link>
        </div>
        <RegisterForm />
      </div>
    </RegisterWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    heroIsPresent: state.ui.heroIsPresent,
    navBgColor: state.ui.navBgColor,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {})(Register);
