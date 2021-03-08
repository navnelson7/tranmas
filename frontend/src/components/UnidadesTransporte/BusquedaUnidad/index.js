import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenUnidadBySearch } from "../../../graphql/Suscription";

function BusquedaUnidad({ setData }) {
  const [TextSearch, setTextSearch] = useState(null);
  const { data } = useSubscription(listenUnidadBySearch, {
    variables: {
      numero_unidad: TextSearch,
    },
  });
  useEffect(()=> {
    if (data !== undefined) {
      console.log(data);
      setData(data.unidades_de_transporte)
    }
  }, [data])
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
