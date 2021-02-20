import React from "react";
import { Fragment } from "react";
import { Form, Card, Row, InputGroup, Col, FormControl } from "react-bootstrap";
import ListBoxMotorista from "../../../listbox/ListBoxMotorista";
import ButtonsDesitions from "../../../ButtonsDesitions";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function FormAireAcondicionado({
  changeAireAcondicionado,
  NuevoAireAcondicionado,
  submitAireAcondicionado,
}) {
  const { location } = useHistory();
  return (
    <Fragment>
      <StyleAireAcondicionado>
        <div className="container-form">
          <h1>
            {location.pathname.includes("/registro/aire/acondicionado/")
              ? "Formulario para registro de aire acondicionado"
              : "Formulario para editar de aire acondicionado"}
          </h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Descripción
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Descripción"
                        name="descripcion"
                        type="text"
                        value={NuevoAireAcondicionado.descripcion}
                        autoComplete="off"
                        onChange={(e) => changeAireAcondicionado(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <ListBoxMotorista
                      changeMotorista={changeAireAcondicionado}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleAireAcondicionado>
      <ButtonsDesitions
        linkCancel={`/tabla/aire/acondicionado/${NuevoAireAcondicionado.id_unidad_transporte}`}
        submitSave={submitAireAcondicionado}
      />
    </Fragment>
  );
}

export default FormAireAcondicionado;

const StyleAireAcondicionado = styled.div`
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
