import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { accentColor, neutral } from "../../Utilities";
import { connect } from "react-redux";
import { getSinglePost } from "../../../store/actions";
import Skeleton from "react-loading-skeleton";

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
    font-size: 1.4rem;
    color: ${neutral[200]};
  }
`;

const NewsImg = styled.img`
  margin-bottom: 1rem;
`;

const NewsLink = styled(Link)`
  font-size: 1.6rem;
  text-decoration: none;
  color: ${neutral[100]};

  &:hover {
    color: ${accentColor[300]};
  }
`;

const NewsCard = (props) => {
  const { storyThumbnail, getSinglePost } = props;

  console.log(`URL: ${storyThumbnail}`);

  return (
    <Newscard>
      <NewsImg src={storyThumbnail || <Skeleton />} />
      <NewsLink
        to="/post"
        onClick={() => {
          getSinglePost(props.slug);
        }}
      >
        {props.newsHeading || <Skeleton />}
      </NewsLink>
      <p className="previewTxt">{props.previewTxt || <Skeleton />}...</p>
    </Newscard>
  );
};

export default connect(null, { getSinglePost })(NewsCard);
