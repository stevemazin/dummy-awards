import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import { accentColor, Container } from "../Utilities";

const PostDetail = styled.div`
  font-size: 1.6rem;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .post-main-img {
    width: 100%;
    margin-top: 7rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  p > strong {
    color: ${accentColor[300]};
    margin-top: 1rem;
  }
`;

const SinglePost = (props) => {
  const { postData } = props;
  console.log(postData);

  const setDangerousPost = () => {
    return { __html: postData.body };
  };

  return (
    <>
      {postData && (
        <PostDetail>
          <Container>
            <img className="post-main-img" src={postData.photo_main} alt="" />
            <h3>{postData.headline}</h3>
            <div dangerouslySetInnerHTML={setDangerousPost()}></div>
          </Container>
        </PostDetail>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.blog.singlePostInView,
  };
};

export default connect(mapStateToProps)(SinglePost);
