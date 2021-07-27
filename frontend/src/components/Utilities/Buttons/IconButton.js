import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { navyBlue, neutral } from "../Colors";

const ButtonWrapper = styled.button`
  height: 4.2rem;
  width: 100%;
  background: ${navyBlue[300]};
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${neutral[100]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: ${navyBlue[400]};
  }

  .hide {
    display: none;
  }

  .spinner {
    width: 1.6rem;
    height: 1.6rem;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`;

const IconButton = (props) => {
  const { showLoader, children } = props;
  return (
    <ButtonWrapper onClick={props.clicked}>
      <span className={showLoader ? "hide" : '"btn_text"'}>{children}</span>
      <span className={showLoader ? "spinner" : '"hide"'}></span>
    </ButtonWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoader: state.ui.showLoader,
  };
};

export default connect(mapStateToProps, {})(IconButton);
