import React, { Fragment, useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import ListBoxEmpleados from "../../../listbox/ListBoxEmpleados";
import Upload from "../Upload";
import { ToastComponent } from "../../../Toast";
import ButtonsDesitions from "../../../ButtonsDesitions";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { updateContratoById } from "../../../../graphql/Mutations";
import { listenContratoById } from "../../../../graphql/Suscription";
import { useSubscription } from "@apollo/react-hooks";

function Editar() {
  const { idContrato } = useParams();
  const { push } = useHistory();
  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const { data, loading, error } = useSubscription(listenContratoById, {
    variables: {
      id: idContrato,
    },
  });

  const [ExecuteSaveContrato, setExecuteSaveContrato] = useState(false);

  const [OcultarBotonesPorDefecto, setOcultarBotonesPorDefecto] =
    useState(true);

  const [newContratoEmpleado, setnewContratoEmpleado] = useState({
    descripcion: "",
    fecha_de_registro:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    fecha_contrato:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id_empleado: "",
    contrato_digital: "",
  });

  useEffect(() => {
    let contrato = {};
    contrato =
      data === undefined
        ? {
            descripcion: "",
            fecha_de_registro:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
            fecha_contrato:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
            id_empleado: "",
            contrato_digital: "",
          }
        : {
            descripcion: data.registro_contratos_by_pk.descripcion,
            fecha_de_registro: data.registro_contratos_by_pk.fecha_de_registro,
            fecha_contrato: data.registro_contratos_by_pk.fecha_contrato,
            id_empleado: data.registro_contratos_by_pk.id_empleado,
            contrato_digital: data.registro_contratos_by_pk.contrato_digital,
            id: idContrato,
          };
    setnewContratoEmpleado(contrato);
  }, [data, idContrato]);

  const changeContrato = (e) => {
    setnewContratoEmpleado({
      ...newContratoEmpleado,
      [e.target.name]: e.target.value,
    });
  };

  const [setContrato] = useMutation(updateContratoById);

  // eslint-disable-next-line
  const submitContrato = () => {
    setContrato({
      variables: newContratoEmpleado,
    })
      .then((res) => {
        if (res.data) {
          setTextAlert("Actualizado correctamente");
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/tabla/contrato/empleado");
          }, 2000);
        }
      })
      .catch((error) => {
        setLoading(false);
        setIconType("error");
        setshowAlert(true);
        setTextAlert(error.message);
      });
  };

  useEffect(() => {
    if (ExecuteSaveContrato) {
      submitContrato();
      setExecuteSaveContrato(false);
    }
  }, [ExecuteSaveContrato, submitContrato]);

  if (Loading || loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

  if (error) return <p className="box-center">{`Error! ${error.message}`}</p>;

  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleRegitroUnidades>
        <div className="box-left-container">
          <div className="grid-form-transporte">
            <div>
              <h5 className="center-box">Información sobre el contrato</h5>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Descripción</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="descripcion"
                  placeholder="Descripción"
                  required
                  value={newContratoEmpleado.descripcion}
                  onChange={(e) => changeContrato(e)}
                />
              </InputGroup>
              <ListBoxEmpleados
                changeEmpleado={changeContrato}
                empleadoSeleccionado={
                  data.registro_contratos_by_pk.empleado === null
                    ? ""
                    : data.registro_contratos_by_pk.empleado.nombres +
                      " " +
                      data.registro_contratos_by_pk.empleado.apellidos
                }
              />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Fecha de registro</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="descripcion"
                  placeholder="fecha"
                  value={newContratoEmpleado.fecha_de_registro}
                  onChange={(e) => changeContrato(e)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Fecha de contrato</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="descripcion"
                  placeholder="fecha"
                  value={newContratoEmpleado.fecha_contrato}
                  onChange={(e) => changeContrato(e)}
                />
              </InputGroup>
              {OcultarBotonesPorDefecto && (
                <ButtonsDesitions
                  linkCancel="/tabla/daño/edificio"
                  submitSave={submitContrato}
                />
              )}
            </div>

            <div>
              <Upload
                setOcultarBotonesPorDefecto={setOcultarBotonesPorDefecto}
                newContratoEmpleado={newContratoEmpleado}
                setnewContratoEmpleado={setnewContratoEmpleado}
                setExecuteSaveContrato={setExecuteSaveContrato}
              />
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>
      </StyleRegitroUnidades>
    </Fragment>
  );
}

export default Editar;

export const StyleRegitroUnidades = styled.div`
  .center-txt {
    text-align: center;
  }
  .box-center-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-container {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-container {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-container {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
  //GRID FORM TRANSPORTE
  /* MOBILE */
  @media (max-width: 1025px) {
    .grid-form-transporte {
      display: grid;
      grid-template-columns: 100%;
    }
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    .grid-form-transporte {
      display: grid;
      grid-template-columns: 60% 40%;
    }
    .box-left-container {
      margin-left: 20%;
      margin-top: 2%;
      overflow-x: hidden;
    }
  }
`;
