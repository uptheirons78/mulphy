import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = props => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <GlobalContext.Provider
      value={{
        toggle,
        handleToggle,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
