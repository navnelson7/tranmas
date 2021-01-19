import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenRepuestosListbox } from "../../graphql/Suscription";

const ListBoxRepuestos = ({ changeRepuesto, respuestoSeleccionado = "" }) => {
  const { data, loading, error } = useSubscription(listenRepuestosListbox);

  if (loading) return "Cargando...";
  if (error) return `Error! ${error.message}`;
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Repuesto</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        as="select"
        name="id_repuesto"
        onChange={changeRepuesto}
      >
        <option>
          {respuestoSeleccionado === ""
            ? "Seleccione un repuesto"
            : respuestoSeleccionado}
        </option>
        {data.repuestos.lenght === 0 ? (
          <option>No hay data</option>
        ) : (
          data.repuestos.map((repuesto) => (
            <option key={repuesto.id} value={repuesto.id}>
              {repuesto.nombre}
            </option>
          ))
        )}
      </FormControl>
    </InputGroup>
  );
};
export default ListBoxRepuestos;
