import React from "react";
import { Fragment } from "react";
import { Form, Card, Row, InputGroup, Col, FormControl } from "react-bootstrap";
import ButtonsDesitions from "../../../ButtonsDesitions";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import ListBoxMotorista from "../../../listbox/ListBoxMotorista";

function FormViajes({ NuevoViaje, changeViaje, submitViaje }) {
  const { location } = useHistory();
  const { idUnidadTransporte } = useParams();
  return (
    <Fragment>
      <StyleCarwash>
        <div className="container-form">
          <h1>
            {location.pathname.includes("/registro/viajes/")
              ? "Registro de viajes"
              : "Edición de viaje"}
          </h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Numero de viajes realizados
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Numero de viajes realizados"
                        name="numero_de_viajes_realizados"
                        type="number"
                        autoComplete="off"
                        value={NuevoViaje.numero_de_viajes_realizados}
                        onChange={(e) => changeViaje(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Kilometrajes recogidos
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Kilometrajes recogidos"
                        name="kilometrajes_recogidos"
                        type="text"
                        autoComplete="off"
                        value={NuevoViaje.kilometrajes_recogidos}
                        onChange={(e) => changeViaje(e)}
                      />
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Fecha
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Fecha"
                        name="fecha"
                        type="date"
                        autoComplete="off"
                        value={NuevoViaje.fecha}
                        onChange={(e) => changeViaje(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <ListBoxMotorista changeMotorista={changeViaje} />
                  </Col>
                  <Col sm={6}>
                    <FormControl
                      as="select"
                      name="tipo_viaje"
                      onChange={changeViaje}
                    >
                      <option>
                        {NuevoViaje.tipo_viaje === ""
                          ? "Seleccione un tipo de viaje"
                          : NuevoViaje.tipo_viaje}
                      </option>

                      <option value={"Libre"}>Libre</option>
                    </FormControl>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleCarwash>
      <ButtonsDesitions
        linkCancel={`/control/viajes/${idUnidadTransporte}`}
        submitSave={submitViaje}
      />
    </Fragment>
  );
}

export default FormViajes;

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
