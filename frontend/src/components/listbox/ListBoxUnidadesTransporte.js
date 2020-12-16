import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenMarcasTransporte } from "../../graphql/Suscription";

const ListBoxMarcasTransporte = ({ changeMarca, marcaSeleccionada="" }) => {
  const [marcas] = useState([
    {
      id: "",
      marca: "",
    },
  ]);

  const { id } = marcas;

  const { data, loading, error } = useSubscription(listenMarcasTransporte);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Marca</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        as="select"
        name="id_marca"
        value={id}
        onChange={changeMarca}
      >
        <option>
          {marcaSeleccionada === ""
            ? "Seleccione una Marca"
            : marcaSeleccionada}
        </option>
        {data.marca_transporte.lenght === 0 ? (
          <option id="">No hay data</option>
        ) : (
          data.marca_transporte.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.marca}
            </option>
          ))
        )}
      </FormControl>
    </InputGroup>
  );
};
export default ListBoxMarcasTransporte;
