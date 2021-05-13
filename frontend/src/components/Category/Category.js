import React from "react";
import styled from "styled-components";
import { nominees } from "./CategoryData";
import { breakpoints, navyBlue, accentColor } from "../Utilities";
import CustomBtn from "../Utilities/Buttons/CustomBtn";
import Nomination from "./Nomination/Nomination";

const MainSection = styled.div``;

const NominationGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 2rem;

  @media screen and (max-width: ${breakpoints.Tablet}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
  }

  @media screen and (max-width: ${breakpoints.Phone}) {
    grid-template-columns: 1fr;
  }
`;

const CatHeader = styled.h4`
  font-size: 1.6rem;
  color: ${navyBlue[500]};
  margin-bottom: 2rem;
  text-align: center;
`;

const Category = () => {
  return (
    <MainSection>
      <CatHeader>New Artists on the block</CatHeader>
      <NominationGroup>
        {nominees.map((nominee, index) => {
          return (
            <Nomination
              key={index}
              nomineeImg={nominee.nomineeImg}
              nomineeName={nominee.nomineeName}
            />
          );
        })}
      </NominationGroup>
      <button>sadas</button>
    </MainSection>
  );
};

export default Category;
