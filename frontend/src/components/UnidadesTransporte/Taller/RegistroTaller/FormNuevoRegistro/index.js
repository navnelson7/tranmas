import React, { Fragment, useEffect, useState } from "react";
import { Form, InputGroup, Card, Row, Col, FormControl } from "react-bootstrap";
import styled from "styled-components";
import ButtonDesitions from "../../../../ButtonsDesitions";
import EstadoTaller from "./EstadoTaller";
import { useSubscription, useMutation } from "@apollo/client";
import { useParams } from "react-router";
import { listenKilomatrajeMax } from "../../../../../graphql/Suscription";
import { setRegistroTallerOne } from "../../../../../graphql/Mutations";
import ListBoxMotorista from "../../../../listbox/ListBoxMotorista";
import ListBoxMecanico from "../../../../listbox/ListboxMecanico";
import { ToastComponent } from "../../../../Toast";

function FormNuevoRegistro() {
  const { id } = useParams();
  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [RegistroTaller, setRegistroTaller] = useState({
    kilometraje: 0,
    id_empleado_mecanico: "",
    id_empleado_motorista: "",
    id_estado: "",
    comentarios: "",
    id_unidad_transporte: id,
  });
  const [ExecuteEstadoTaller, setExecuteEstadoTaller] = useState(false);
  const [ExecuteRegistroTaller, setExecuteRegistroTaller] = useState(false);
  const { data, loading, error } = useSubscription(listenKilomatrajeMax, {
    variables: { id: id },
  });

  const [addRegistroTaller] = useMutation(setRegistroTallerOne);

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
    if (e.target.name === "kilometraje") {
      setRegistroTaller({
        ...RegistroTaller,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setRegistroTaller({
        ...RegistroTaller,
        [e.target.name]: e.target.value,
      });
    }
  };

  const executeSaveEstadoTaller = () => {
    if (
      RegistroTaller.id_empleado_mecanico === "" ||
      RegistroTaller.id_empleado_mecanico === "Seleccione un motorista"
    ) {
      setLoading(false);
      setTextAlert("Selecciona un empleado mecanico");
      setIconType("error");
      setshowAlert(true);
    }
    if (
      RegistroTaller.id_empleado_motorista === "" ||
      RegistroTaller.id_empleado_motorista === "Seleccione un motorista"
    ) {
      setLoading(false);
      setTextAlert("Selecciona un empleado motorista");
      setIconType("error");
      setshowAlert(true);
    }
    setExecuteEstadoTaller(true);
  };

  useEffect(() => {
    if (ExecuteRegistroTaller) {
      addRegistroTaller({
        variables: RegistroTaller,
      })
        .then((res) => {
          if (res.data) {
            setLoading(false);
            setIconType("success");
            setTextAlert("Registrado correctamente");
            setshowAlert(true);
            setExecuteRegistroTaller(false);
            setRegistroTaller({
              ...RegistroTaller,
              kilometraje: 0,
              id_estado: "",
              comentarios: "",
              id_unidad_transporte: id,
            });
            setExecuteEstadoTaller(false);
          }
        })
        .catch((error) => {
          if (error !== null || error !== undefined) {
            setTextAlert(error.message);
            setIconType("error");
            setLoading(false);
            setshowAlert(true);
          }
        });
    }
    // eslint-disable-next-line
  }, [ExecuteRegistroTaller, id, addRegistroTaller]);

  if (loading || Loading)
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
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
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
                        value={RegistroTaller.kilometraje === null ? 0 : RegistroTaller.kilometraje}
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
                        value={RegistroTaller.comentarios}
                        onChange={(e) => changeTaller(e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <h5>Estado en taller</h5>
                <Row>
                  <EstadoTaller
                    RegistroTaller={RegistroTaller}
                    setRegistroTaller={setRegistroTaller}
                    ExecuteEstadoTaller={ExecuteEstadoTaller}
                    setExecuteRegistroTaller={setExecuteRegistroTaller}
                    //ALERTS
                    setLoading={setLoading}
                    setshowAlert={setshowAlert}
                    setIconType={setIconType}
                    setTextAlert={setTextAlert}
                  />
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
      <br />
      <br />
      <br />
      <br />
      <br />
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
