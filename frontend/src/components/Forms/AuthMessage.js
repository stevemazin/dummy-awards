import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { navyBlue } from "../Utilities";

const MessageWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  text-align: center;
  border-radius: 5px;
  color: ${navyBlue[300]};
  display: ${({ showing }) => {
    if (showing) {
      return "inline-block";
    } else {
      return "none";
    }
  }};

  .auth-message {
    line-height: 1.4;
    padding: 0.5rem 0.25rem;
    font-size: 1.2rem;
  }
`;

const AuthMessage = ({ message, showAuthMessage }) => {
  return (
    <MessageWrapper showing={showAuthMessage}>
      <p className="auth-message">{message}</p>
    </MessageWrapper>
  );
};

const mapStateToProps = (state) => ({
  showAuthMessage: state.ui.showAuthMessage,
});

export default connect(mapStateToProps, {})(AuthMessage);
