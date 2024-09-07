// context/GlobalState.js
import React, { createContext, useState } from "react";

// Create a Context
export const GlobalContext = createContext<any>(null);

// Create a Provider component
export const GlobalProvider: React.FC<{ children: any }> = ({ children }) => {
  const [firstName, setFirstName] = useState(""); // Example global state

  return (
    <GlobalContext.Provider value={{ firstName, setFirstName }}>
      {children}
    </GlobalContext.Provider>
  );
};
