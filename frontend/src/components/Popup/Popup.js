import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { clearPopupMessage, showPopupMessage } from "../../store/actions/ui";
import { navyBlue, neutral } from "../Utilities";
// import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9999;
  overflow: hidden;

  .msg-holder {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;

const MessageContainer = styled(motion.div)`
  text-align: center;
  height: fit-content;
  padding: 3rem 2rem;
  font-size: 1.6rem;
  min-width: 35vw;
  background-color: ${neutral[200]};
  border-radius: 5px;
  color: ${navyBlue[300]};

  transform: ${({ showing }) =>
    showing ? "translateY(0)" : "translateY(-200%)"};
  transition: all 100ms ease-in-out;
  z-index: 888;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Popup = (props) => {
  const { currrentMessage, clearPopupMessage, showPopupMessage } = props;

  // const nextVariants = {
  //   hidden: { y: "-100vh" },
  //   visible: { y: 0, transition: { type: "spring", stiffness: 100 } },
  // };

  return (
    <Backdrop
      onClick={() => {
        clearPopupMessage();
      }}
    >
      <div className="msg-holder">
        <MessageContainer
          // variants={nextVariants}
          // initial="hidden"
          // animate="visible"
          showing={showPopupMessage}
        >
          <span>{currrentMessage}</span>
        </MessageContainer>
      </div>
    </Backdrop>
  );
};

const mapStateToProps = (state) => {
  return {
    showPopupMessage: state.ui.showPopupMessage,
    currrentMessage: state.ui.popupMessage,
  };
};

export default connect(mapStateToProps, { clearPopupMessage })(Popup);
