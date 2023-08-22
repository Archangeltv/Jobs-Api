import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export const Context = () => {
  return useContext(GlobalContext);
};
