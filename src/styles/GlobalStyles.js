import { createGlobalStyle } from "styled-components";
import { ColorPalette, Spacing } from "./Variables";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Breakpoints */
    --screen-sm: 640px;
    --screen-md: 768px;
    --screen-lg: 1024px;
    --screen-xl: 1280px;
    --screen-2xl: 1536px;
    /* Container Width */
    --container-width: 1024px;
    /* Fonts */
    --font-primary: 'Open Sans', sans-serif;
    --font-secondary: 'Lato', sans-serif;
    /* Theme Colors */
    --clr-primary: #F31F53;
    --clr-secondary: #156096;
    ${Spacing}
    ${ColorPalette}
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
    font-family: var(--font-primary);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-secondary);
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
