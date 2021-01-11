import React, { Fragment, useEffect, useState } from "react";
import { Form, InputGroup, Card, Row, Col, FormControl } from "react-bootstrap";
import styled from "styled-components";
import ButtonDesitions from "../../../../ButtonsDesitions";
import EstadoTaller from "./EstadoTaller";
import { useSubscription } from "@apollo/client";
import { useParams } from "react-router";
import { listenKilomatrajeMax } from "../../../../../graphql/Suscription";
import ListBoxMotorista from "../../../../listbox/ListBoxMotorista";
import ListBoxMecanico from "../../../../listbox/ListboxMecanico";

function FormNuevoRegistro() {
  const { id } = useParams();
  const [RegistroTaller, setRegistroTaller] = useState({
    kilometraje: 0,
  });
  const [ExecuteEstadoTaller, setExecuteEstadoTaller] = useState(false);
  const { data, loading, error } = useSubscription(listenKilomatrajeMax, {
    variables: { id: id },
  });
  useEffect(() => {
    let kilometrajeData = 0;
    kilometrajeData =
      data === undefined
        ? 0
        : data.registro_combustible_aggregate.aggregate.max.kilometraje_actual;

    setRegistroTaller({
      ...RegistroTaller,
      kilometraje: kilometrajeData,
    });
    // eslint-disable-next-line
  }, [data]);
  const changeTaller = (e) => {
    setRegistroTaller({
      ...RegistroTaller,
      [e.target.name]: e.target.value,
    });
  };

  const executeSaveEstadoTaller = () => {
    setExecuteEstadoTaller(true);
  };
  if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return `Error! ${error.message}`;
  return (
    <Fragment>
      <StyleRegistroTaller>
        <div className="container-form">
          <h2>Formulario para registro de taller</h2>
          <Form>
            <Card>
              <Card.Body>
                <h5>Unidad de Transporte</h5>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Kilometraje actual
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Kilometraje actual"
                        name="kilometraje"
                        type="number"
                        value={RegistroTaller.kilometraje}
                        onChange={(e) => changeTaller(e)}
                      />
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
                        onChange={(e) => changeTaller(e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <h5>Estado en taller</h5>
                <Row>
                  <EstadoTaller ExecuteEstadoTaller={ExecuteEstadoTaller} />
                </Row>

                <h5>Empleados</h5>
                <Row>
                  <Col sm={6}>
                    <ListBoxMotorista changeMotorista={changeTaller} />
                  </Col>
                  <Col sm={6}>
                    <ListBoxMecanico changeMecanico={changeTaller} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleRegistroTaller>
      <ButtonDesitions
        linkCancel={"/unidades-transporte"}
        submitSave={executeSaveEstadoTaller}
      />
    </Fragment>
  );
}

export default FormNuevoRegistro;

export const StyleRegistroTaller = styled.div`
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
      margin-right: 1%;
      margin-top: 50px;
    }
  }
`;
