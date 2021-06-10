import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { accentColor, secondary } from "../../Utilities";
import { connect } from "react-redux";
import { getSinglePost } from "../../../store/actions";

const Newscard = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 1.6rem;

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
  const { storyThumbnail, getSinglePost } = props;

  console.log(`URL: ${storyThumbnail}`);

  return (
    <Newscard>
      <NewsImg src={storyThumbnail} />
      <NewsLink
        to="/post"
        onClick={() => {
          getSinglePost(props.slug);
        }}
      >
        {props.newsHeading}
      </NewsLink>
      <p className="previewTxt">{props.previewTxt}...</p>
    </Newscard>
  );
};

export default connect(null, { getSinglePost })(NewsCard);
