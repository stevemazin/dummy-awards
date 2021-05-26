import { createGlobalStyle } from "styled-components";
import { accentColor, neutral } from "./Colors";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    html, body {
        font-size: 62.5%;
    }

    body {
        background-color: #EEEEEE;
        
        .btn {
            text-decoration: none;
            cursor: pointer;
            padding: 0 2rem;
            margin: 1rem 0;
            height: 4.2rem;
            background-color: transparent;

            color: ${accentColor[100]};
            font-size: 1.6rem;
            border: 2px solid ${accentColor[300]};
            border-radius: 5px;
            outline: none;
            transition: all 200ms ease-in;

            &:hover {
                background-color: ${accentColor[300]};
                color: ${neutral[100]};
                border: 2px solid transparent;
            }
        }
    }
`;

export default GlobalStyles;
