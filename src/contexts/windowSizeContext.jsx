import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const [menuHamIsActive, setMenuHamIsActive] = useState(false);

  function menuHamChange() {
    setMenuHamIsActive(!menuHamIsActive)
  }

  return (
    <AppContext.Provider value={{ isMobileView, setIsMobileView, menuHamIsActive, menuHamChange }}>
      {children}
    </AppContext.Provider>
  );
};