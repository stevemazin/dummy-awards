import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { accentColor, neutral } from "../../Utilities";
import { useDispatch } from "react-redux";
import { getSinglePost, setShowLoader } from "../../../store/actions";

const Newscard = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 1.6rem;
  height: 40rem;

  .previewTxt {
    font-size: 1.4rem;
    color: ${neutral[200]};
  }
`;

const NewsImg = styled.img`
  width: 100%;
  border-radius: 1rem;
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
  const { storyThumbnail } = props;

  const dispatch = useDispatch();

  return (
    <Newscard>
      <NewsLink
        to="/post"
        onClick={() => {
          const attemptFetch = async () => {
            await dispatch(getSinglePost(props.slug));
          };
          attemptFetch();
        }}
      >
        <NewsImg src={storyThumbnail} />
        {props.newsHeading}
      </NewsLink>
      <p className="previewTxt">{props.previewTxt}...</p>
    </Newscard>
  );
};

export default NewsCard;
