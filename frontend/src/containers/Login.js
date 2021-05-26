import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  setNavSolid,
  setNavTransparent,
  switchHeroPresence,
  switchHeroVisibility,
} from "../store/actions";
import LoginForm from "../components/Forms/Login/LoginForm";
import heroImg from "../assets/soundtrap-5Wj_tk8_Ens-unsplash.jpg";

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100%;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = ({ setNavTransparent }) => {
  useEffect(() => {
    setNavTransparent();
  });

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("DOMContentLoaded", (e) => {
  //     setIsLoading(false);
  //   });
  // });

  // if (isLoading) {
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   );
  // }

  return (
    <>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </>
  );
};

export default connect(null, {
  setNavTransparent,
  setNavSolid,
  switchHeroVisibility,
  switchHeroPresence,
})(Login);
