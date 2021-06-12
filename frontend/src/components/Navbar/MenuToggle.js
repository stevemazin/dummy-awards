import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { navyBlue, neutral } from "../Utilities/Colors";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  fill: red;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.15 };

const MenuToggle = (props) => {
  return (
    <Button onClick={props.toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={props.isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: navyBlue[100] },
            open: { d: "M 3 16.5 L 17 2.5", stroke: navyBlue[100] },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke={navyBlue[100]}
          animate={props.isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={props.isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: navyBlue[100] },
            open: { d: "M 3 2.5 L 17 16.346", stroke: navyBlue[100] },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
};

export default MenuToggle;