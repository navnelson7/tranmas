import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenEdificiosListBox } from "../../graphql/Suscription";

const ListBoxEdificios = ({ changeEdificio, edificioSeleccionado = "" }) => {
  const { data, loading, error } = useSubscription(listenEdificiosListBox);

  if (loading) return "Cargando...";
  if (error) return `Error! ${error.message}`;
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Edificio</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl as="select" name="id_edificio" onChange={changeEdificio}>
        <option>
          {edificioSeleccionado === ""
            ? "Seleccione un edificio"
            : edificioSeleccionado}
        </option>
        {data.registro_edificios.map((edificio) => (
          <option key={edificio.id} value={edificio.id}>
            {edificio.nombre}
          </option>
        ))}
      </FormControl>
    </InputGroup>
  );
};
export default ListBoxEdificios;
