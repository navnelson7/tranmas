import React, { createContext, useState } from "react";

const Context = createContext({});

//Nuestro context de descargas

export function SearchContextProvider({ children }) {
  //LO QUE ESCRIBE EL USUARIO EN EL INPUT
  const [StateSearch, setStateSearch] = useState("");

  //BOOLEAN PARA CUANDO LE DE ENTER AL INPUT EJECUTE LA QUERY
  const [ExecuteFilter, setExecuteFilter] = useState(false);

  //CAMPO SELECCIONA EL USUARIO EN EL DROPDOWN
  const [SelectField, setSelectField] = useState("nombre_proveedor");

  //STATE PARA MOSTRAR LO SELECCIONADO EN EL INPUT SEARCH
  const [NombreField, setNombreField] = useState("Buscar");
  return (
    <Context.Provider
      value={{
        StateSearch,
        setStateSearch,
        ExecuteFilter,
        setExecuteFilter,
        SelectField,
        setSelectField,
        NombreField,
        setNombreField,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
