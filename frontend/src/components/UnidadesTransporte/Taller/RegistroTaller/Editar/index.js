import React, { useState, Fragment, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, InputGroup, Card, Row, Col, FormControl } from "react-bootstrap";
import { ToastComponent } from "../../../../Toast";
import { useSubscription, useMutation } from "@apollo/client";
import { listenRegistroTallerById } from "../../../../../graphql/Suscription";
import {
  deleteRegistroEnTaller,
  updateRegistroTallerOne,
} from "../../../../../graphql/Mutations";
import { StyleRegistroTaller } from "../FormNuevoRegistro";
import ListBoxMotorista from "../../../../listbox/ListBoxMotorista";
import ListBoxMecanico from "../../../../listbox/ListboxMecanico";
import EstadoTaller from "./EstadoTaller";
import ButtonDesitionsWithDelete from "../../../../ButtonsDesitions/ButtonDesitionsWithDelete";

function EditarRegistroTaller() {
  const { id } = useParams();
  const { push } = useHistory();

  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [RegistroTaller, setRegistroTaller] = useState({});

  const { loading, data, error } = useSubscription(listenRegistroTallerById, {
    variables: {
      id: id,
    }, 
  });

  const [deleteregistroTallerById] = useMutation(deleteRegistroEnTaller);
  const [updateregistroTallerById] = useMutation(updateRegistroTallerOne);
  useEffect(() => {
    let registroData = {};
    registroData = data === undefined || null ? {} : data.registro_taller_by_pk;
    setRegistroTaller({
      ...RegistroTaller,
      id: id,
      id_estado: registroData === null ? "" : registroData.id_estado,
      kilometraje: registroData === null ? "" : registroData.kilometraje,
      comentarios: registroData === null ? "" : registroData.comentarios,
      id_empleado_mecanico:
        registroData === null ? "" : registroData.id_empleado_mecanico,
      id_empleado_motorista:
        registroData === null ? "" : registroData.id_empleado_motorista,
      activo:
        registroData.estado_taller === undefined || registroData === null
          ? ""
          : registroData.estado_taller.activo,
      estado:
        registroData.estado_taller === undefined ||
        registroData.estado_taller === null ||
        registroData === null
          ? ""
          : registroData.estado_taller.estado,
    });
    // eslint-disable-next-line
  }, [data]);

  const changeTaller = (e) => {

    if (e.target.name === "activo") {
      setRegistroTaller({
        ...RegistroTaller,
        [e.target.name]: e.target.checked,
      });
    } else {
      setRegistroTaller({
        ...RegistroTaller,
        [e.target.name]: e.target.value,
      });
    }
  };

  const updateRegistro = () => {
    updateregistroTallerById({
      variables: RegistroTaller,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setTextAlert("Actualizado correctamente");
          setshowAlert(true);
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
  };

  const deleteRegistro = () => {
    deleteregistroTallerById({
      variables: { id: id, id_estado: RegistroTaller.id_estado },
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setTextAlert("Eliminado correctamente");
          setshowAlert(true);
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/unidades-transporte");
          }, 2000);
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
  };
  if (Loading || loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (data.registro_taller_by_pk === null) {
    return <p className="box-center">Registro no encontrado</p>;
  }
  if (error) return <p className="box-center">Error! ${error.message}</p>;
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
          <h2>Formulario para editar registro de taller</h2>
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
                        type="text"
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
                        value={RegistroTaller.comentarios}
                        onChange={(e) => changeTaller(e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <h5>Estado en taller</h5>
                <Row>
                  <EstadoTaller
                    EstadoTallerProp={
                      data.registro_taller_by_pk === null
                        ? {}
                        : data.registro_taller_by_pk.estado_taller
                    }
                    RegistroTaller={RegistroTaller}
                    changeTaller={changeTaller}
                  />
                </Row>

                <h5>Empleados</h5>
                <Row>
                  <Col sm={6}>
                    <ListBoxMotorista
                      motoristaSeleccionado={
                        data.registro_taller_by_pk === null
                          ? ""
                          : data.registro_taller_by_pk.empleado_motorista
                              .nombres +
                            " " +
                            data.registro_taller_by_pk.empleado_motorista
                              .apellidos
                      }
                      changeMotorista={changeTaller}
                    />
                  </Col>
                  <Col sm={6}>
                    <ListBoxMecanico
                      motoristaSeleccionado={
                        data.registro_taller_by_pk === null
                          ? ""
                          : data.registro_taller_by_pk.empleado_mecanico
                              .nombres +
                            " " +
                            data.registro_taller_by_pk.empleado_mecanico
                              .apellidos
                      }
                      changeMecanico={changeTaller}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </StyleRegistroTaller>
      <ButtonDesitionsWithDelete
        linkCancel="/unidades-transporte"
        submitDelete={deleteRegistro}
        submitSave={updateRegistro}
      />
    </Fragment>
  );
}

export default EditarRegistroTaller;
