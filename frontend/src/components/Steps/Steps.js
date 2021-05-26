import React from "react";
import styled from "styled-components";
import { breakpoints, Container } from "../Utilities";
import stepOne from "../../assets/steps/1.svg";
import stepTwo from "../../assets/steps/2.svg";
import stepThree from "../../assets/steps/3.svg";
import stepFour from "../../assets/steps/4.svg";

const GetInvolved = styled.section`
  font-size: 1.6rem;
  height: 45rem;

  @media screen and (max-width: ${breakpoints.Medium}) {
    height: fit-content;
  }

  .stepHeader {
    text-align: center;
    line-height: 2;
  }
`;

const StepsContainer = styled(Container)`
  height: 100%;
`;

const StepsWrapper = styled.div`
  margin: 1rem auto;

  display: grid;
  grid-template-columns: repeat(2, 40rem);
  /* grid-template-rows: 100%; */

  gap: 2rem;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: ${breakpoints.Medium}) {
    grid-template-columns: 1fr;
    /* grid-template-rows: fit-content;
    grid-auto-rows: fit-content; */
  } ;
`;

const Step = styled.div`
  justify-self: start; // Grid stuff

  align-self: center; // Grid stuff

  height: 10rem;
  width: 90%;
  display: flex;
  align-items: center;

  .stepGfx {
    height: 6rem;
    margin-right: 2rem;
  }

  .stepHelperTxt {
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${breakpoints.Medium}) {
    /* justify-self: center; // Grid stuff */
  }
`;

const Steps = () => {
  return (
    <GetInvolved>
      <StepsContainer>
        <h1 className="stepHeader">How to Get Involved</h1>
        <StepsWrapper>
          <Step>
            <img className="stepGfx" src={stepOne} alt="" />
            <div className="stepHelperTxt">
              <h6>Create Account</h6>
              <p>You must have an account to vote.</p>
            </div>
          </Step>
          <Step>
            <img className="stepGfx" src={stepTwo} alt="" />
            <div className="stepHelperTxt">
              <h6>Login</h6>
              <p>Only authenticated user's can vote.</p>
            </div>
          </Step>
          <Step>
            <img className="stepGfx" src={stepThree} alt="" />
            <div className="stepHelperTxt">
              <h6>Cast your Vote</h6>
              <p>Make your vote count</p>
            </div>
          </Step>
          <Step>
            <img className="stepGfx" src={stepFour} alt="" />
            <div className="stepHelperTxt">
              <h6>Attend the Show</h6>
              <p>Don't miss the action.</p>
            </div>
          </Step>
        </StepsWrapper>
      </StepsContainer>
    </GetInvolved>
  );
};

export default Steps;
