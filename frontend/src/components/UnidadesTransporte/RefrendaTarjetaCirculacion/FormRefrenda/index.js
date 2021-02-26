import React from "react";
import { Fragment } from "react";
import { Form, Card, Row, InputGroup, Col, FormControl } from "react-bootstrap";
import ButtonsDesitions from "../../../ButtonsDesitions";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function FormRefrenda({
  NuevoRefrendaCirculacion,
  submitRefrendaCirculacion,
  changeNuevoRefrendaCirculacion,
  idTransporte = "",
}) {
  const { location } = useHistory();
  return (
    <Fragment>
      <StyleRefrenda>
        <div className="container-form">
          <h1>
            {location.pathname.includes("/registro/refrenda/")
              ? "Registro de refrenda para tarjeta de circulación"
              : "Edición de refrenda para tarjeta de circulación"}
          </h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Costo de refrenda
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Costo de refrenda"
                        name="costo_refrenda"
                        type="number"
                        autoComplete="off"
                        value={NuevoRefrendaCirculacion.costo_refrenda}
                        onChange={(e) => changeNuevoRefrendaCirculacion(e)}
                      />
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Número de tarjeta de circulación
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder=""
                        name="numero_tarjeta_circulacion"
                        type="text"
                        autoComplete="off"
                        value={
                          NuevoRefrendaCirculacion.numero_tarjeta_circulacion
                        }
                        onChange={(e) => changeNuevoRefrendaCirculacion(e)}
                      />
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Fecha de emisión
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Fecha de emisión"
                        name="fecha_emision"
                        type="date"
                        autoComplete="off"
                        value={NuevoRefrendaCirculacion.fecha_emision}
                        onChange={(e) => changeNuevoRefrendaCirculacion(e)}
                      />
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Fecha de refrenda
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Fecha de refrenda"
                        name="fecha_refrenda"
                        type="date"
                        autoComplete="off"
                        value={NuevoRefrendaCirculacion.fecha_refrenda}
                        onChange={(e) => changeNuevoRefrendaCirculacion(e)}
                      />
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <Row>
                      <Col sm={3}>
                        <p>Refrendado</p>
                      </Col>
                      <Col sm={3}>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          name="refrendado"
                          checked={NuevoRefrendaCirculacion.refrendado}
                          value={NuevoRefrendaCirculacion.refrendado}
                          onChange={(e) => changeNuevoRefrendaCirculacion(e)}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleRefrenda>
      <ButtonsDesitions
        linkCancel={`/tabla/refrenda/circulacion/${
          NuevoRefrendaCirculacion.id_unidad_transporte || idTransporte
        }`}
        submitSave={submitRefrendaCirculacion}
      />
    </Fragment>
  );
}

export default FormRefrenda;

const StyleRefrenda = styled.div`
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
