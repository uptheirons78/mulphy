import React from "react";
/** Import GlobalStyles and Theme from styled-components */
import GlobalStyle from "../styles/GlobalStyles";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
