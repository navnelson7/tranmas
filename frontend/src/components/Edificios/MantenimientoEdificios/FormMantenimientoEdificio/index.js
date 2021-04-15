import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useLocation } from "react-router";
import ButtonsDesitions from "../../../ButtonsDesitions";
import ListBoxEdificios from "../../../listbox/ListBoxEdificios";
import ListBoxEmpleados from "../../../listbox/ListBoxEmpleados";

function FormMantenimientoEdificio({
  NuevoMantenimiento,
  changeMantenimiento,
  submitSave,
}) {
  const location = useLocation();
  return (
    <div>
      <h5>
        {location.pathname.includes("/registro/matenimiento/edificio")
          ? "Registro de mantenimiento de edificio"
          : "Editar mantenimiento de edificio"}
      </h5>
      <br />
      <ListBoxEdificios
        changeEdificio={changeMantenimiento}
        edificioSeleccionado={
          NuevoMantenimiento.edificio === undefined
            ? ""
            : NuevoMantenimiento.edificio.nombre
        }
      />
      <ListBoxEmpleados
        changeEmpleado={changeMantenimiento}
        empleadoSeleccionado={
          NuevoMantenimiento.empleado == undefined
            ? ""
            : NuevoMantenimiento.empleado.nombres +
              " " +
              NuevoMantenimiento.empleado.apellidos
        }
      />
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Fecha</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          value={NuevoMantenimiento.fecha}
          type="date"
          name="fecha"
          placeholder="Fecha"
          onChange={(e) => changeMantenimiento(e)}
        />
      </InputGroup>
      <br />
      <ButtonsDesitions
        linkCancel={"/tabla/matenimiento/edificios"}
        submitSave={(e) => submitSave(e)}
      />
    </div>
  );
}

export default FormMantenimientoEdificio;
