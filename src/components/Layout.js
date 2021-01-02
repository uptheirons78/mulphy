import React from "react";
// import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

const Layout = props => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <main>{props.children}</main>
    </ThemeProvider>
  );
};

export default Layout;
