import React from "react";
import styled from "styled-components";
import rapper from "../../../assets/sq-rapper-2.jpg";
import { breakpoints, navyBlue } from "../../Utilities";

const NominationContainer = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
`;

const NomineeImg = styled.img`
  border-radius: 0.5rem;
  height: auto;
  width: 100%;
  max-width: 32rem;

  @media screen and (max-width: ${breakpoints.Tablet}) {
    align-self: center;
    justify-self: center;
  }
`;

const NomineeInfo = styled.h6`
  font-size: 1.6rem;
  color: ${navyBlue[500]};
`;

const Nomination = (props) => {
  return (
    <NominationContainer>
      <NomineeImg src={props.nomineeImg} />
      <NomineeInfo>{props.nomineeName}</NomineeInfo>
    </NominationContainer>
  );
};

export default Nomination;
