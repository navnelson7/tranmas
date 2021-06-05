import React from "react";
import { Fragment } from "react";
import { Form, Card, Row, InputGroup, Col, FormControl } from "react-bootstrap";
import ButtonsDesitions from "../../../ButtonsDesitions";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function FormCarWash({
  NuevoCarwash,
  submitControlCarwash,
  changeControlTransporte,
  idTransporte = "",
}) {
  const { location } = useHistory();
  return (
    <Fragment>
      <StyleCarwash>
        <div className="container-form">
          <h1>
            {location.pathname.includes("/registro/consumo/carwash/")
              ? "Registro de consumo de carwash"
              : "Edición de consumo de carwash"}
          </h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Costo
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Costo de refrenda"
                        name="costo"
                        type="number"
                        autoComplete="off"
                        value={NuevoCarwash.costo}
                        onChange={(e) => changeControlTransporte(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Descripción de trabajo
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Descripción de trabajo"
                        name="descripcion_trabajo"
                        type="text"
                        autoComplete="off"
                        value={NuevoCarwash.descripcion_trabajo}
                        onChange={(e) => changeControlTransporte(e)}
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
        linkCancel={`/tabla/refrenda/circulacion/${
          NuevoCarwash.id_unidad_transporte || idTransporte
        }`}
        submitSave={submitControlCarwash}
      />
    </Fragment>
  );
}

export default FormCarWash;

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
