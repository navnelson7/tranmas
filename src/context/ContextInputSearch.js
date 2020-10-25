import React, { createContext, useState } from "react";

const Context = createContext({});

//Nuestro context de descargas

export function SearchContextProvider({ children }) {
  const [StateSearch, setStateSearch] = useState("");
  return <Context.Provider value={{StateSearch, setStateSearch}}>{children}</Context.Provider>;
}

export default Context;
