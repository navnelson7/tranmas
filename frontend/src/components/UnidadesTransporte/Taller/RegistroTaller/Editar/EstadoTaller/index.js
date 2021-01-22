import React, { Fragment, useState } from "react";
import { InputGroup, Col, FormControl } from "react-bootstrap";
import { StyleSwitch } from "../../FormNuevoRegistro/EstadoTaller";
function EstadoTaller({ changeTaller, RegistroTaller }) {
  return (
    <Fragment>
      <Col sm={6}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Estado</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="select"
            name="estado"
            value={RegistroTaller.estado}
            onChange={(e) => changeTaller(e)}
          >
            <option>Reparación</option>
            <option>Prueba</option>
            <option>Finalizado</option>
          </FormControl>
        </InputGroup>
      </Col>
      <Col sm={6}>
        <StyleSwitch>
          <div className="grid-toggle">
            <div>
              <p>Activo</p>
            </div>
            {/* Rounded switch */}
            <label className="switch">
              <input
                type="checkbox"
                name="activo"
                checked={RegistroTaller.activo}
                onChange={(e) => changeTaller(e)}
              />
              <span className="slider round" />
            </label>
          </div>
        </StyleSwitch>
      </Col>
    </Fragment>
  );
}

export default EstadoTaller;
