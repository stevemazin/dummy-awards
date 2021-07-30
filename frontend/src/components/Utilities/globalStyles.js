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

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
        background-color: #EEEEEE;

        .inView {
            background-color: ${neutral[100]};
        }

        .sticky-nav-styles {
            position: sticky;
            top: 0;
        }

        .fluid-nav-styles {
            background-color: purple;
        }

        .notInView {
            background-color: transparent;
        }


        .icon-navigator-btn {
            z-index: 99;
            outline: none;
            border: none;
            background-color: ${neutral[100]};
            height: 4.5rem;
            width: 4.5rem;
            border-radius: 5px;
            cursor: pointer;

            &:not(:last-child) {
            margin-right: 2rem;
            }

            @media (hover) {
            &:hover {
                background-color: ${neutral[200]};
            }
            }

            &:acitve {
            background-color: ${neutral[200]};
            }

            .section-nav-icons {
            fill: ${accentColor[300]};

            @media (hover) {
                &:hover {
                fill: ${accentColor[400]};
                }
            }
            }
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

        .link-btn {
            cursor: pointer;
            font-size: 1.6rem;
            text-decoration: none;
        }

        .mobi-link-btn {
            font-size: 1.4rem;
            background-color: ${accentColor[300]};
            padding: 1rem;
            color: ${neutral[100]};
            border: none;
            border-radius: 4px;


            &:focus {
                background-color: ${accentColor[400]};
            }
        }


        .dsk-link-btn {
            color: ${neutral[100]};
            background-color: transparent;
            border: 2px solid ${accentColor[300]};
            padding: 1rem;
            border-radius: 5px;

            &:hover {
                background-color: ${accentColor[300]};
                border: 2px solid transparent;
            }
        }

        .ghost-btn {
            background-color: transparent;
            color: ${accentColor[100]};
            border: 2px solid ${accentColor[300]};

            &:hover {
                background-color: ${accentColor[300]};
                color: ${neutral[100]};
                border: 2px solid transparent;
            }
        }

        .dsk-solid-btn {
            background-color: ${accentColor[300]};
            color: ${neutral[100]};
            border: 2px solid transparent;

            &:hover {
                background-color: ${accentColor[400]};
            }
        }

        .mobi-btn {
            height: 3.6rem;
            padding: 0 1.25rem;
            transition: all 200ms ease-in;
            outline: none;
            font-size: 1.6rem;
            border-radius: 5px;
            margin: 0.5rem 0;
        }

        .btn {
            cursor: pointer;
            padding: 0 2rem;
            margin: 0.5rem 0;
            height: 4.2rem;
            font-size: 1.6rem;
            border-radius: 5px;
            outline: none;
            transition: all 200ms ease-in;
        }

        // Utility Margins
        .mt-1 {
            margin-top: 0.5rem;
        }

        .mt-2 {
            margin-top: 1rem;
        }

        .mt-3 {
            margin-top: 1.5rem;
        }


    }
`;

export default GlobalStyles;
