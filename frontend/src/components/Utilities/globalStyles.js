import { createGlobalStyle } from "styled-components";

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
    }
`;

export default GlobalStyles;
