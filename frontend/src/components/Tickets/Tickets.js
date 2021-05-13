import React from "react";
import styled from "styled-components";
import { Container } from "../Utilities/Container";
import ticketsBack from "../../assets/tickets-back.png";
import {
  Header3,
  Header4,
  Paragraph,
  Paragraph2,
} from "../Utilities/Typography";
import { MainButton } from "../Utilities/Buttons/MainBtn";
import { Link } from "react-router-dom";
import hottestEvent from "../../assets/hottest-event.svg";
import { accentColor, neutral, secondary } from "../Utilities";

const TicketContainer = styled(Container)``;

const TicketSection = styled.section`
  font-size: 1.6rem;
  height: 100vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ticketsBack});
  background-position: top;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TicketsWrapper = styled.div`
  margin: 2rem 0;
  text-align: center;

  .streets {
    font-family: "Gill Sans";
    font-weight: 1000;
    font-size: 15rem;
    line-height: 0.75;
    color: ${secondary[300]};
  }

  .hottest {
    font-family: "Mistral";
    /* font-weight: 900; */
    font-size: 14rem;
    color: ${accentColor[300]};
  }

  .event {
    font-family: "Mistral";
    /* font-weight: 900; */
    font-size: 14rem;
    color: ${neutral[300]};
  }
`;

const BuyTicketsLink = styled(Link)`
  text-decoration: none;
`;

const CTATxt = styled(Header3)`
  line-height: 2;
`;

const Tickets = () => {
  return (
    <TicketSection>
      <TicketContainer>
        <TicketsWrapper>
          <Header4>10,356 tickects remaining</Header4>
          <h1 className="streets">Street's</h1>
          <div>
            <span className="hottest">Hottest </span>
            <span className="event">Event</span>
          </div>
          <BuyTicketsLink to="/buy-tickets">
            <MainButton>Buy Tickets</MainButton>
          </BuyTicketsLink>
        </TicketsWrapper>
      </TicketContainer>
    </TicketSection>
  );
};

export default Tickets;
