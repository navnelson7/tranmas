import React, { useState, useEffect, Fragment } from "react";
import { Form } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenUnidadBySearch } from "../../../graphql/Suscription";

function BusquedaUnidad({ setData }) {
  const [TextSearch, setTextSearch] = useState(null);
  const { data, loading } = useSubscription(listenUnidadBySearch, {
    variables: {
      numero_unidad: TextSearch,
    },
  });
  useEffect(() => {
    if (data !== undefined && TextSearch !== null && loading === false) {
      setData(data.unidades_de_transporte);
    }
  }, [data, loading, TextSearch]);
  if (loading) {
    return <Fragment>Cargando busqueda...</Fragment>;
  }
  return (
    <div className="mr-3">
      <Form.Control
        type="number"
        placeholder="Buscar unidad"
        onChange={(e) => setTextSearch(parseInt(e.target.value))}
      />
    </div>
  );
}

export default BusquedaUnidad;
