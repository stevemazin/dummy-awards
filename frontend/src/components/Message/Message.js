import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  height: 10rem;
  background-color: black;
  border-radius: 0 5px 5px 0;
`;

const Message = ({ message }) => {
  return (
    <MessageContainer>
      <p>{message}</p>
    </MessageContainer>
  );
};

export default Message;
