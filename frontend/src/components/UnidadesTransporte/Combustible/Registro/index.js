import React, { Fragment } from "react";
import styled from "styled-components";
import { Form, InputGroup, Card, Row, Col, FormControl } from "react-bootstrap";

function RegistroCombustible() {
  return (
    <Fragment>
      <StyleCombustible>
        <div className="container-form">
          <h1>Formulario para Ingreso de Combustible</h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Galones servidos
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Galones servidos"
                        name="galones_servidos"
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Kilometraje actual
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Kilometraje actual"
                        aria-label="nombre"
                        aria-describedby="basic-addon1"
                        name="kilometraje_actual"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Motorista
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl as="select" name="id_empleado_motorista">
                        <option>Selecciona un motorista</option>
                        <option value="test">test</option>
                      </FormControl>
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Comentarios
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Comentarios"
                        name="comentarios"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleCombustible>
    </Fragment>
  );
}

export default RegistroCombustible;

const StyleCombustible = styled.div`
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
