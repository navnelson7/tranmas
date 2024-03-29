import React from "react";
import { Fragment } from "react";
import { Form, Card, Row, InputGroup, Col, FormControl } from "react-bootstrap";
import ButtonsDesitions from "../../../ButtonsDesitions";
import styled from "styled-components";
import ListBoxRepuestos from "../../../listbox/ListBoxRepuestos";
import { useHistory } from "react-router";

function FormFacturaRepuesto({
  NuevaFactura,
  changeFactura,
  submitFactura,
  repuestoSeleccionado = "",
}) {
  const { location } = useHistory();
  return (
    <Fragment>
      <StyleCarwash>
        <div className="container-form">
          <h1>
            {location.pathname.includes("/registro/facturas/repuestos")
              ? "Registro de facturas de repuestos"
              : "Edición de factura de repuesto"}
          </h1>

          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <ListBoxRepuestos
                      changeRepuesto={changeFactura}
                      respuestoSeleccionado={repuestoSeleccionado}
                    />
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Cantidad Comprada
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Cantidad Comprada"
                        name="cantidad_comprada"
                        type="number"
                        onChange={(e) => changeFactura(e)}
                        value={NuevaFactura.cantidad_comprada}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          N° de factura
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="N° de factura"
                        name="numero_factura"
                        type="number"
                        onChange={(e) => changeFactura(e)}
                        value={NuevaFactura.numero_factura}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Fecha de factura
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Fecha de factura"
                        name="fecha"
                        type="date"
                        onChange={(e) => changeFactura(e)}
                        value={NuevaFactura.fecha}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Precio de factura
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Precio de factura"
                        name="precio_repuesto"
                        type="text"
                        onChange={(e) => changeFactura(e)}
                        value={NuevaFactura.precio_repuesto}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleCarwash>
      <ButtonsDesitions linkCancel="/facturas/repuestos" submitSave={submitFactura} />
    </Fragment>
  );
}

export default FormFacturaRepuesto;

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
