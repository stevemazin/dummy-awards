import React from "react";
import styled from "styled-components";
import { Container } from "../Utilities/Container";
import ticketsBack from "../../assets/tickets-back.png";
import { Link } from "react-router-dom";
import { breakpoints, neutral } from "../Utilities";
import { isMobile } from "react-device-detect";
import Hottest from "./Hottest";

const TicketSection = styled.section`
  font-size: 1.6rem;
  height: 70rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ticketsBack});
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TicketsWrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
  height: 100%;

  #buy-tickets {
    margin-top: 6rem;
  }

  #remaining-tickets {
    color: ${neutral[300]};
    font-weight: 300;
    transform: translateY(40px);
    font-size: 2rem;

    @media screen and (max-width: ${breakpoints.Laptop}) {
      font-size: 2rem;
      transform: translateY(28px);
    }

    @media screen and (max-width: ${breakpoints.Medium}) {
      font-size: 1.8rem;
      transform: translateY(25px);
    }

    @media screen and (max-width: ${breakpoints.Tablet}) {
      font-size: 1.6rem;
      transform: translateY(25px);
    }

    @media screen and (max-width: ${breakpoints.Phone}) {
      font-size: 1.5rem;
      transform: translateY(25px);
    }

    @media screen and (max-width: ${breakpoints.ExtraSmallPhone}) {
      display: none;
    }
  }
`;

const Tickets = () => {
  return (
    <TicketSection>
      <Container>
        <TicketsWrapper>
          <h3 id="remaining-tickets">10,356 tickects remaining</h3>
          <Hottest />
        </TicketsWrapper>
        <Link
          id="buy-tickets"
          className={
            isMobile
              ? "link-btn mobi-link-btn mt-2"
              : "link-btn dsk-link-btn mt-2"
          }
          to="/buy-tickets"
        >
          Buy Tickets
        </Link>
      </Container>
    </TicketSection>
  );
};

export default Tickets;
