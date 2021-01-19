import React from "react";
import { Fragment } from "react";
import { Form, InputGroup, Card, Row, Col, FormControl } from "react-bootstrap";
import ListBoxRepuestos from "../../../../listbox/ListBoxRepuestos";

function FormDetalleEnTaller({ changeTaller, stateDetalleTaller }) {
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
                    onChange={(e) => changeTaller(e)}
                    autoComplete="off"
                    value={stateDetalleTaller.cantidad}
                  />
                </InputGroup>
              </Col>
              <Col sm={6}>
                <ListBoxRepuestos
                  respuestoSeleccionado={
                    stateDetalleTaller.repuesto === undefined
                      ? ""
                      : stateDetalleTaller.repuesto.nombre
                  }
                  changeRepuesto={changeTaller}
                />
              </Col>
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
                    onChange={(e) => changeTaller(e)}
                    autoComplete="off"
                    value={stateDetalleTaller.comentarios}
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

export default FormDetalleEnTaller;
