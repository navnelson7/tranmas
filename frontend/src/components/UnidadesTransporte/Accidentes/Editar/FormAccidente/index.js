import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useParams } from "react-router";
import ListBoxMotorista from "../../../../listbox/ListBoxMotorista";
import { StyleRegitroUnidades } from "../../FormNuevoAccidente";
import { useQuery, useMutation } from "@apollo/client";
import { AccidenteById } from "../../../../../graphql/Queries";
import { updateAccidente } from "../../../../../graphql/Mutations";
import Upload from "../../Upload";
import SliderAccidentes from "../SliderAccidentes";
import ButtonsDesitions from "../../../../ButtonsDesitions";
import { ToastComponent } from "../../../../Toast";

export default function FormAccidente() {
  const { id } = useParams();
  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [setAccidente] = useMutation(updateAccidente);
  const { loading, data, error } = useQuery(AccidenteById, {
    variables: {
      id: id,
    },
  });
  const [_, setExecuteSaveAccidente] = useState(false);
  const [newAccidente, setnewAccidente] = useState({
    descripcion_accidente: "",
    id_unidad_transporte: id,
    fecha:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id_empleado_motorista: "",
    registro_fotos: "[]",
  });

  useEffect(() => {
    let accidente = {};
    accidente =
      data === undefined
        ? {}
        : {
            ...data.accidentes_by_pk,
            fecha:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
          };
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
            setLoading(false);
            setIconType("success");
            setshowAlert(true);
            setTextAlert("Actualizado correctamente");
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
                />
                <br />
                <ButtonsDesitions
                  linkCancel="/unidades-transporte"
                  submitSave={submitAccidente}
                />
              </div>

              <div>
                <Upload
                  newAccidente={newAccidente}
                  setnewAccidente={setnewAccidente}
                  setExecuteSaveAccidente={setExecuteSaveAccidente}
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
