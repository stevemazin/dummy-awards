import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { accentColor, breakpoints, neutral, secondary } from "../../Utilities";

const Newscard = styled.div`
  width: 90%;
  font-size: 1.6rem;
  margin: 0 auto;

  img {
    height: auto;
    width: 100%;
    border-radius: 1rem;
  }

  .previewTxt {
    color: #fff;
  }
`;

const NewsImg = styled.img`
  margin-bottom: 1rem;
`;

const NewsLink = styled(Link)`
  font-size: 1.6rem;
  text-decoration: none;
  color: ${accentColor[300]};

  &:hover {
    color: ${secondary[300]};
  }
`;

const NewsCard = (props) => {
  const imgUrl = props.storyImg;
  console.log(`URL: ${imgUrl}`);

  return (
    <Newscard>
      <NewsImg src={imgUrl} />
      <NewsLink to="/post">{props.newsHeading}</NewsLink>
      <p className="previewTxt">{props.previewTxt}...</p>
    </Newscard>
  );
};

export default NewsCard;
