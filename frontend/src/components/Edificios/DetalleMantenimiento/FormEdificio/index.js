import React from "react";
import { Fragment } from "react";
import { Form, Card, Row, InputGroup, Col, FormControl } from "react-bootstrap";
import ButtonsDesitions from "../../../ButtonsDesitions";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function FormDetalleEdificio({
  NuevoEdificio,
  changeEdificio,
  submitRegistroEdificio,
  idMantenimiento = "",
}) {
  const { location } = useHistory();
  return (
    <Fragment>
      <StyleFormEdificio>
        <div className="container-form">
          <h1>
            {location.pathname.includes(
              "/registro/detalle/matenimiento/edificios/"
            )
              ? "Registro detalle de edificios"
              : "Edición detalle de edificio"}
          </h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Descripción de trabajo
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Descripción de trabajo"
                        name="descripcion_de_trabajo"
                        type="text"
                        autoComplete="off"
                        value={
                          NuevoEdificio
                            ? NuevoEdificio.descripcion_de_trabajo
                            : ""
                        }
                        onChange={(e) => changeEdificio(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Material
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Material"
                        name="material"
                        type="text"
                        autoComplete="off"
                        value={NuevoEdificio ? NuevoEdificio.material : ""}
                        onChange={(e) => changeEdificio(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Número de factura
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Número de factura"
                        name="numero_factura"
                        type="number"
                        autoComplete="off"
                        value={NuevoEdificio ? NuevoEdificio.numero_factura : ""}
                        onChange={(e) => changeEdificio(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Costo
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Costo"
                        name="costo"
                        type="number"
                        autoComplete="off"
                        value={NuevoEdificio ? NuevoEdificio.costo : ""}
                        onChange={(e) => changeEdificio(e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleFormEdificio>
      <ButtonsDesitions
        linkCancel={`/tabla/detalle/matenimiento/edificios/${idMantenimiento}`}
        submitSave={submitRegistroEdificio}
      />
    </Fragment>
  );
}

export default FormDetalleEdificio;

const StyleFormEdificio = styled.div`
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
