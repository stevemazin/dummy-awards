import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { clearMessage } from "../../store/actions/ui";
import { accentColor, neutral } from "../Utilities";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;
  overflow: hidden;

  .msg-holder {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MessageContainer = styled.div`
  text-align: center;
  height: fit-content;
  padding: 3rem 1rem;
  font-size: 1.6rem;
  min-width: 35vw;
  background-color: ${neutral[200]};
  border-radius: 5px;
  color: ${accentColor[100]};

  transform: ${({ showing }) =>
    showing ? "translateY(0)" : "translateY(-200%)"};
  transition: all 100ms ease-in-out;
  z-index: 888;
`;

const Popup = (props) => {
  const { currrentMessage, clearMessage, showMessage } = props;

  return (
    <Backdrop
      onClick={() => {
        clearMessage();
      }}
    >
      <div className="msg-holder">
        <MessageContainer showing={showMessage}>
          <p>{currrentMessage}</p>
        </MessageContainer>
      </div>
    </Backdrop>
  );
};

const mapStateToProps = (state) => {
  return {
    showMessage: state.ui.showMessage,
    currrentMessage: state.ui.msg,
  };
};

export default connect(mapStateToProps, { clearMessage })(Popup);
