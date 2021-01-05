import { createGlobalStyle } from "styled-components";
import { Colors } from "./Variables";

const GlobalStyle = createGlobalStyle`
  :root {
    ${Colors}
    --primaryColor: #f31f53;
    --secondaryColor: #156096;
    --black: #393939;
    --lightBlack: #666666;
    --grey: #F7F7F7;
    --metaColor: #A7A7A7;
    --white: #FFFFFF;
    --pmd: 1rem;
    --max-width: 1100px;
    --bsl:
      0px 70px 40px -50px rgba(0, 0, 0, 0.4), 0px 3px 20px 8px rgba(0, 0, 0, 0.2);
    --bsh:
      0px 70px 40px -50px rgba(0, 0, 0, 0.6), 0px 3px 20px 8px rgba(0, 0, 0, 0.3);
  }


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

  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;
