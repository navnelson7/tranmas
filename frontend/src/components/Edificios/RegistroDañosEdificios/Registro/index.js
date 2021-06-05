import React, { Fragment, useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import ListBoxEdificios from "../../../listbox/ListBoxEdificios";
import Upload from "../Upload";
import { useMutation } from "@apollo/client";
import { insertRegistroEmergenciasEdificiosOne } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";
import ButtonsDesitions from "../../../ButtonsDesitions";
import { useHistory } from "react-router-dom";

function Registro() {
  const { push } = useHistory();
  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [ExecuteSaveEdificio, setExecuteSaveEdificio] = useState(false);
  const [OcultarBotonesPorDefecto, setOcultarBotonesPorDefecto] =
    useState(true);
  const [newDañoEdificio, setnewDañoEdificio] = useState({
    descripcion: "",
    fecha:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id_edificio: "",
    imagenes: "[]",
  });

  const changeAccidente = (e) => {
    setnewDañoEdificio({
      ...newDañoEdificio,
      [e.target.name]: e.target.value,
    });
  };
  const [newRegistroEmergencia] = useMutation(
    insertRegistroEmergenciasEdificiosOne
  );

  // eslint-disable-next-line
  const submitAccidente = () => {
    if (newDañoEdificio.descripcion === "") {
      setTextAlert("Escribe una descripción");
      setLoading(false);
      setIconType("error");
      setshowAlert(true);
    }
    if (newDañoEdificio.id_edificio === "") {
      setTextAlert("Selecciona el edificio");
      setLoading(false);
      setIconType("error");
      setshowAlert(true);
    } else {
      newRegistroEmergencia({
        variables: newDañoEdificio,
      })
        .then((res) => {
          if (res.data) {
            setTextAlert("Registrado correctamente");
            setLoading(false);
            setIconType("success");
            setshowAlert(true);
            setTimeout(() => {
              //si todo va bien lo redirecciona al inicio
              push("/tabla/daño/edificio");
            }, 2000);
          }
        })
        .catch((error) => {
          setTextAlert(error.message);
          setLoading(false);
          setIconType("error");
          setshowAlert(true);
        });
    }
  };

  useEffect(() => {
    if (ExecuteSaveEdificio) {
      submitAccidente();
      setExecuteSaveEdificio(false);
    }
  }, [ExecuteSaveEdificio, submitAccidente]);

  const guardarCambios = () => {
    setExecuteSaveEdificio(true);
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
      <StyleRegitroUnidades>
        <div className="box-left-container">
          <div className="grid-form-transporte">
            <div>
              <h5 className="center-box">Información sobre el daño</h5>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Descripción</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="descripcion"
                  placeholder="Descripción"
                  required
                  value={newDañoEdificio.descripcion}
                  onChange={changeAccidente}
                />
              </InputGroup>
              <ListBoxEdificios changeEdificio={changeAccidente} />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Fecha</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="descripcion"
                  placeholder="fecha"
                  value={newDañoEdificio.fecha}
                  onChange={changeAccidente}
                />
              </InputGroup>
              {OcultarBotonesPorDefecto && (
                <ButtonsDesitions
                  linkCancel="/tabla/daño/edificio"
                  submitSave={guardarCambios}
                />
              )}
            </div>

            <div>
              <Upload
                setOcultarBotonesPorDefecto={setOcultarBotonesPorDefecto}
                newDañoEdificio={newDañoEdificio}
                setnewDañoEdificio={setnewDañoEdificio}
                setExecuteSaveEdificio={setExecuteSaveEdificio}
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

export default Registro;

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
