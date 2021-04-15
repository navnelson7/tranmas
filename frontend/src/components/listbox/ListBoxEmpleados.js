import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenEmpleadosListBox } from "../../graphql/Suscription";

const ListBoxEmpleados = ({ changeEmpleado, empleadoSeleccionado = "" }) => {
  const { data, loading, error } = useSubscription(listenEmpleadosListBox);

  if (loading) return "Cargando...";
  if (error) return `Error! ${error.message}`;
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Empleado</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl as="select" name="id_empleado" onChange={changeEmpleado}>
        <option>
          {empleadoSeleccionado === ""
            ? "Seleccione un empleado"
            : empleadoSeleccionado}
        </option>
        {data.empleados.map((empleado) => (
          <option key={empleado.id} value={empleado.id}>
            {empleado.nombres} {empleado.apellidos}
          </option>
        ))}
      </FormControl>
    </InputGroup>
  );
};
export default ListBoxEmpleados;
