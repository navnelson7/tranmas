import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import ListBoxMotorista from "../../../../listbox/ListBoxMotorista";
import { StyleRegitroUnidades } from "../../FormNuevoAccidente";
import { useSubscription, useMutation } from "@apollo/client";
import { listenAccidenteById } from "../../../../../graphql/Suscription";
import { updateAccidente } from "../../../../../graphql/Mutations";
import Upload from "../../Upload";
import SliderAccidentes from "../SliderAccidentes";
import ButtonsDesitions from "../../../../ButtonsDesitions";
import { ToastComponent } from "../../../../Toast";

export default function FormAccidente() {
  const { push } = useHistory();
  const { id, idUnidadTransporte } = useParams();
  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [setAccidente] = useMutation(updateAccidente);
  const { loading, data, error } = useSubscription(listenAccidenteById, {
    variables: {
      id: id,
    },
  });
  const [newAccidente, setnewAccidente] = useState({
    descripcion_accidente: "",
    id_unidad_transporte: id,
    fecha: "",
    id_empleado_motorista: "",
    registro_fotos: "[]",
  });

  useEffect(() => {
    let accidente = {};
    accidente = data === undefined ? {} : data.accidentes_by_pk;
    setnewAccidente(accidente);
  }, [data]);

  const changeAccidente = (e) => {
    setnewAccidente({
      ...newAccidente,
      [e.target.name]: e.target.value,
    });
  };

  const submitAccidente = () => {
    if (
      newAccidente.descripcion_accidente === "" ||
      newAccidente.id_empleado_motorista === ""
    ) {
    } else {
      setAccidente({
        variables: {
          id: newAccidente.id,
          registro_fotos: newAccidente.registro_fotos,
          id_empleado_motorista: newAccidente.id_empleado_motorista,
          fecha: newAccidente.fecha,
          descripcion_accidente: newAccidente.descripcion_accidente,
        },
      })
        .then((res) => {
          if (res.data) {
            setTextAlert("Actualizado correctamente");
            setLoading(false);
            setIconType("success");
            setshowAlert(true);
            setTimeout(() => {
              //si todo va bien lo redirecciona al inicio
              push(`/accidentes/${idUnidadTransporte}`);
            }, 2000);
          }
        })
        .catch((error) => {
          setLoading(false);
          setIconType("error");
          setshowAlert(true);
          setTextAlert(error.message);
        });
    }
  };

  if (loading || Loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p align="center">{`Error! ${error.message}`}</p>;
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <Fragment>
        <StyleRegitroUnidades>
          <div className="box-left-container">
            <div className="grid-form-transporte">
              <div>
                <h5 className="center-box">Información del accidente</h5>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Descripción</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    name="descripcion_accidente"
                    placeholder="Descripción"
                    required
                    value={
                      newAccidente.descripcion_accidente
                        ? newAccidente.descripcion_accidente
                        : ""
                    }
                    onChange={changeAccidente}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Fecha</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="date"
                    name="fecha"
                    placeholder="Fecha"
                    required
                    value={newAccidente.fecha ? newAccidente.fecha : ""}
                    onChange={changeAccidente}
                  />
                </InputGroup>
                <ListBoxMotorista
                  motoristaSeleccionado={
                    data.accidentes_by_pk.empleado_motorista.nombres +
                    " " +
                    data.accidentes_by_pk.empleado_motorista.apellidos
                  }
                  changeMotorista={changeAccidente}
                />
                <SliderAccidentes
                  fotos={
                    newAccidente.registro_fotos
                      ? JSON.parse(newAccidente.registro_fotos)
                      : []
                  }
                  setnewAccidente={setnewAccidente}
                  newAccidente={newAccidente}
                  setTextAlert={setTextAlert}
                />

                <br />
                <ButtonsDesitions
                  linkCancel={`/accidentes/${idUnidadTransporte}`}
                  submitSave={submitAccidente}
                />
              </div>

              <div>
                <Upload
                  newAccidente={newAccidente}
                  setnewAccidente={setnewAccidente}
                />
              </div>

              <br />
              <br />
              <br />
            </div>
          </div>
        </StyleRegitroUnidades>
      </Fragment>
    </Fragment>
  );
}
