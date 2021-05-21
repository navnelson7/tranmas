import React from "react";
import { Fragment } from "react";
import { Form, Card, Row, InputGroup, Col, FormControl } from "react-bootstrap";
import ButtonsDesitions from "../../../ButtonsDesitions";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ListBoxRepuestos from "../../../listbox/ListBoxRepuestos";

function FormCompatibilidad({
  NuevoCompatibilidadTransporte,
  changeCompatibilidadTransporte,
  submitCompatibilidadTransporte,
  idUnidadTransporte = "",
}) {
  const { location } = useHistory();
  return (
    <Fragment>
      <StyleCarwash>
        <div className="container-form">
          <h1>
            {location.pathname.includes("/registro/compatibilidad/repuesto/")
              ? "Registro de compatibilidad de repúestos"
              : "Edición de compatibilidad de repúestos"}
          </h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <ListBoxRepuestos
                      changeRepuesto={changeCompatibilidadTransporte}
                      respuestoSeleccionado={
                        NuevoCompatibilidadTransporte.repuesto.nombre
                      }
                    />
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Fecha
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Descripción de trabajo"
                        name="fecha"
                        type="date"
                        autoComplete="off"
                        value={NuevoCompatibilidadTransporte.fecha}
                        onChange={changeCompatibilidadTransporte}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleCarwash>
      <ButtonsDesitions
        linkCancel={`/tabla/compatibilidad/repuesto/${idUnidadTransporte}`}
        submitSave={submitCompatibilidadTransporte}
      />
    </Fragment>
  );
}

export default FormCompatibilidad;

const StyleCarwash = styled.div`
  /* MOBILE */

  @media (max-width: 1025px) {
    .container-form {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
    }
  }

  /* DESKTOP */

  @media (min-width: 720px) {
    .container-form {
      margin-left: 5%;
      margin-top: 50px;
    }
  }

  /* DESKTOP */

  @media (min-width: 1025px) {
    .container-form {
      margin-left: 20%;
      margin-top: 50px;
    }
  }
`;
