import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import ListBoxMotorista from "../../../listbox/ListBoxMotorista";
import { Form, InputGroup, Card, Row, Col, FormControl } from "react-bootstrap";
import ButtonDesitions from "../../../ButtonsDesitions";
import { useMutation } from "@apollo/client";
import { saveRegistroCombustibleDaily } from "../../../../graphql/Mutations";
import { useParams, useHistory } from "react-router-dom";
import { ToastComponent } from "../../../Toast";

function RegistroCombustible() {
  const { id } = useParams();
  const { push } = useHistory();
  const [addCombustible] = useMutation(saveRegistroCombustibleDaily);

  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [NuevoCombustible, setNuevoCombustible] = useState({
    comentarios: "",
    fecha:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    galones_servidos: 0,
    id_empleado_motorista: "",
    kilometraje_actual: 0,
    id_unidad_transporte: id,
  });
  const changeCombustible = (e) => {
    if (
      e.target.name === "galones_servidos" ||
      e.target.name === "kilometraje_actual"
    ) {
      setNuevoCombustible({
        ...NuevoCombustible,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setNuevoCombustible({
        ...NuevoCombustible,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submitCombustible = (e) => {
    e.preventDefault();
    setLoading(true);
    addCombustible({
      variables: NuevoCombustible,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/unidades-transporte");
          }, 2000);
        }
      })
      .catch((error) => {
        setLoading(false);
        setTextAlert(error.message);
        setIconType("error");
        setshowAlert(true);
      });
  };
  if (Loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
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
                        type="number"
                        onChange={(e) => changeCombustible(e)}
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
                        type="number"
                        onChange={(e) => changeCombustible(e)}
                        value={NuevoCombustible.kilo}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <ListBoxMotorista changeCombustible={changeCombustible} />
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
                        value={NuevoCombustible.comentarios}
                        onChange={(e) => changeCombustible(e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleCombustible>
      <ButtonDesitions
        linkCancel={"/unidades-transporte"}
        submitSave={submitCombustible}
      />
    </Fragment>
  );
}

export default RegistroCombustible;

export const StyleCombustible = styled.div`
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
