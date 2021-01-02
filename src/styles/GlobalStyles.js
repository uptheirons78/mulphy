import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    @media screen and (max-width: 650px) {
    font-size: 15px;
    }
    @media screen and (max-width: 480px) {
    font-size: 14px;
    }
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    letter-spacing: 1px;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
