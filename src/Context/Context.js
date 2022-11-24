import React from "react";

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  let meets = [];

  return (
    <AppContext.Provider
      value={{ meets }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AppContext);
}