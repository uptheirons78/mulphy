/** Import Fonts */
import "typeface-open-sans";
import "typeface-lato";

/** Wrap App in Global Context */
import React from "react";
import GlobalContextProvider from "./src/context/GlobalContext";
export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);
