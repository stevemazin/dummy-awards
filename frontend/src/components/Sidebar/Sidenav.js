import React from "react";
import { NavLink, Switch } from "react-router-dom";
import styled from "styled-components";
import { accentColor, navyBlue, neutral } from "../Utilities";
import { sideNavLinks } from "./SidenavData";

const Category = styled(NavLink)`
  text-decoration: none;
  color: ${navyBlue[300]};

  @media screen and (max-width: 960px) {
    font-size: 1.4rem;
    padding: 1rem 1rem;
    width: max-content;
    border-radius: 1rem;
    margin: 0.5rem 1rem;

    &:hover {
      background-color: ${neutral[300]};
    }

    &:active {
      background-color: ${neutral[300]};
    }
  }
`;

const HighlightSpan = styled.span`
  border-left: 2px solid red;
`;

const CategoryLinkGroup = styled.div`
  margin-top: 6rem;
  font-size: 1.4rem;
  line-height: 2;

  display: flex;
  flex-direction: column;
  z-index: 1;
  background: #eee;
  overflow-x: hidden;
  padding: 1rem 0;

  .active-cat {
    color: ${accentColor[300]};
  }

  @media screen and (max-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0;

    .active-cat {
      background-color: ${neutral[300]};
      color: ${navyBlue[300]};
    }
  }
`;

const Sidenav = () => {
  return (
    <CategoryLinkGroup>
      {sideNavLinks.map((singleCategory, index) => {
        return (
          <Category
            key={index}
            activeClassName="active-cat"
            to={singleCategory.to}
            exact
          >
            {singleCategory.catName}
          </Category>
        );
      })}
    </CategoryLinkGroup>
  );
};

export default Sidenav;
