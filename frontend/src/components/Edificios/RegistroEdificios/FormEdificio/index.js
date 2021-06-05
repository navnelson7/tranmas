import React from "react";
import { Fragment } from "react";
import { Form, Card, Row, InputGroup, Col, FormControl } from "react-bootstrap";
import ButtonsDesitions from "../../../ButtonsDesitions";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function FormEdificio({
  NuevoEdificio,
  changeEdificio,
  submitRegistroEdificio,
}) {
  const { location } = useHistory();
  return (
    <Fragment>
      <StyleFormEdificio>
        <div className="container-form">
          <h1>
            {location.pathname.includes("/registro/edificios")
              ? "Registro de edificios"
              : "Edición de edificio"}
          </h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Nombre de edificio
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Nombre de edificio"
                        name="nombre"
                        type="text"
                        autoComplete="off"
                        value={NuevoEdificio.nombre}
                        onChange={(e) => changeEdificio(e)}
                      />
                    </InputGroup>
                  </Col>
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
                        autoComplete="off"
                        value={NuevoEdificio.descripcion}
                        onChange={(e) => changeEdificio(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Extensión
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Extensión"
                        name="extension"
                        type="text"
                        autoComplete="off"
                        value={NuevoEdificio.extension}
                        onChange={(e) => changeEdificio(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Función de edificio
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Función de edificio"
                        name="funcion_edificio"
                        type="text"
                        autoComplete="off"
                        value={NuevoEdificio.funcion_edificio}
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
        linkCancel={"/edificios"}
        submitSave={submitRegistroEdificio}
      />
    </Fragment>
  );
}

export default FormEdificio;

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
