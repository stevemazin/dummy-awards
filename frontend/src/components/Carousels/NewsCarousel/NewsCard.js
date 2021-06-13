import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { accentColor, neutral } from "../../Utilities";
import { useDispatch } from "react-redux";
import { getSinglePost, setShowLoader } from "../../../store/actions";
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
  const { storyThumbnail } = props;

  const dispatch = useDispatch();

  return (
    <Newscard>
      <NewsImg src={storyThumbnail || <Skeleton />} />
      <NewsLink
        to="/post"
        onClick={() => {
          const attemptFetch = async () => {
            dispatch(setShowLoader(true));
            await dispatch(getSinglePost(props.slug));
            setTimeout(() => {
              dispatch(setShowLoader(false));
            }, [1200]);
          };
          attemptFetch();
        }}
      >
        {props.newsHeading || <Skeleton />}
      </NewsLink>
      <p className="previewTxt">{props.previewTxt || <Skeleton />}...</p>
    </Newscard>
  );
};

export default NewsCard;
