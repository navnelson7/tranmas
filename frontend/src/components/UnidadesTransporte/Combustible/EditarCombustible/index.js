import React, { Fragment, useEffect, useState } from "react";
import { Form, InputGroup, Card, Row, Col, FormControl } from "react-bootstrap";
import { StyleCombustible } from "../Registro";
import ListBoxMotorista from "../../../listbox/ListBoxMotorista";
import ButtonDesitions from "../../../ButtonsDesitions";
import { useMutation, useSubscription } from "@apollo/client";
import { registroCombustibleById } from "../../../../graphql/Queries";
import { updateRegistroCombustibleById } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router-dom";
import { ToastComponent } from "../../../Toast";

function EditarCombustible() {
  const { push } = useHistory();
  // STATES OF ALERTS
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const [updateCombustible] = useMutation(updateRegistroCombustibleById);
  const { id } = useParams();
  const { data, loading } = useSubscription(registroCombustibleById, {
    variables: {
      id: id,
    },
  });
  const [EditarCombustible, setEditarCombustible] = useState({});
  useEffect(() => {
    let combustible = {};
    combustible = data === undefined ? {} : data.registro_combustible_by_pk;
    setEditarCombustible(combustible);
  }, [data]);

  const changeCombustible = (e) => {
    if (
      e.target.name === "galones_servidos" ||
      e.target.name === "kilometraje_actual"
    ) {
      setEditarCombustible({
        ...EditarCombustible,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setEditarCombustible({
        ...EditarCombustible,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitEditarCombustible = (e) => {
    e.preventDefault();
    updateCombustible({
      variables: {
        id: EditarCombustible.id,
        fecha: EditarCombustible.fecha,
        galones_servidos: EditarCombustible.galones_servidos,
        id_empleado_motorista: EditarCombustible.id_empleado_motorista,
        kilometraje_actual: EditarCombustible.kilometraje_actual,
        comentarios: EditarCombustible.comentarios,
      },
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
  if (loading || Loading)
    return (
      <div className="box-center">
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
          <h1>Formulario para Editar Combustible</h1>
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
                        value={EditarCombustible.galones_servidos}
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
                        value={EditarCombustible.kilometraje_actual}
                        onChange={(e) => changeCombustible(e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <ListBoxMotorista
                      changeCombustible={changeCombustible}
                      motoristaSeleccionado={
                        data.registro_combustible_by_pk.empleado_motorista
                          .nombres +
                        " " +
                        data.registro_combustible_by_pk.empleado_motorista
                          .apellidos
                      }
                    />
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
                        value={EditarCombustible.comentarios}
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
        submitSave={submitEditarCombustible}
      />
    </Fragment>
  );
}

export default EditarCombustible;
