import React from "react";
import { Fragment } from "react";
import { Form, InputGroup, Card, Row, Col, FormControl } from "react-bootstrap";

function FormAccidentes() {
  return (
    <Fragment>
      <Form>
        <Card>
          <Card.Body>
            <Row>
              <Col sm={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      Cantidad
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Cantidad"
                    name="cantidad"
                    type="number"
                    autoComplete="off"
                  />
                </InputGroup>
              </Col>
              <Col sm={6}>jaja</Col>
            </Row>

            <Row>
              <Col sm={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      Comentarios
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Comentarios"
                    name="comentarios"
                    autoComplete="off"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Form>
    </Fragment>
  );
}

export default FormAccidentes;
