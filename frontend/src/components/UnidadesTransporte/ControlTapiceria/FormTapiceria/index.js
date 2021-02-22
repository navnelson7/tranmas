import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import ButtonsDesitions from "../../../ButtonsDesitions";
import ListBoxMotorista from "../../../listbox/ListBoxMotorista";

function FormTapiceria({
  changeTapiceria,
  EstadoTapiceria,
  submitSave,
  data = {},
  idUnidadTransporte
}) {
  const { location } = useHistory();
  return (
    <div>
      <h5>
        {location.pathname.includes("/registro/tapiceria/")
          ? "Formulario para registro de control de tapiceria"
          : "Formulario para editar control de tapiceria"}
      </h5>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            Descripción del daño
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          name="descripcion_dano"
          placeholder="Descripción del daño"
          required
          autoComplete="off"
          value={EstadoTapiceria.descripcion_dano}
          onChange={(e) => changeTapiceria(e)}
        />
      </InputGroup>
      <ListBoxMotorista
        motoristaSeleccionado={
          data.control_tapiceria_carroceria_by_pk.empleado_motorista.nombres +
          " " +
          data.control_tapiceria_carroceria_by_pk.empleado_motorista.apellidos
        }
        changeMotorista={changeTapiceria}
      />
      <br />
      <ButtonsDesitions
        linkCancel={`/tabla/tapiceria/${idUnidadTransporte}`}
        submitSave={submitSave}
      /> 
    </div>
  );
}

export default FormTapiceria;
