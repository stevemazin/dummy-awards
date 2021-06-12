import { createGlobalStyle } from "styled-components";
import { accentColor, navyBlue, neutral } from "./Colors";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    @font-face {
        font-family: 'Mistral';
        font-style: normal;
        font-weight: normal;
        src: local('Mistral'), url('../../assets/fonts/MISTRAL.woff') format('woff');
    }

    @font-face {
        font-family: 'Gill Sans';
        font-style: normal;
        font-weight: normal;
        src: local('GILL-SANS'), url('../../assets/fonts/GILL-SANS.woff') format('woff');
    }

    html, body {
        font-size: 62.5%;
    }

    body {
        background-color: #EEEEEE;

        .inView {
            background-color: ${neutral[100]};
        }

        .notInView {
            background-color: transparent;
        }
        
        .fx-dark-btn {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            width: 100%;
            height: 4.2rem;
            background-color: ${navyBlue[300]};
            border-radius: 5px;
            border: 1px solid transparent;
            cursor: pointer;
            color: ${neutral[100]};
            transition: background-color 100ms ease-in;

            &:hover,
            &:active,
            &:focus {
                background-color: ${navyBlue[500]};
            }
        }

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
