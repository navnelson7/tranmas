import React, { Fragment, useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import ListBoxEdificios from "../../../listbox/ListBoxEdificios";
import Upload from "../Upload";
import { useMutation, useSubscription } from "@apollo/client";
import { updateRegistroEmergenciasEdificiosOne } from "../../../../graphql/Mutations";
import { listenRegistroEmergenciasEdificiosById } from "../../../../graphql/Suscription";
import { ToastComponent } from "../../../Toast";
import { useHistory, useParams } from "react-router-dom";
import ButtonsDesitions from "../../../ButtonsDesitions";
import SliderAccidentes from "./SliderAccidentes";

function Editar() {
  const { push } = useHistory();
  const { id } = useParams();
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

  const { data, loading, error } = useSubscription(
    listenRegistroEmergenciasEdificiosById,
    {
      variables: {
        id: id,
      },
    }
  );

  useEffect(() => {
    let daño = {};
    daño =
      data === undefined
        ? {
            descripcion: "",
            fecha:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
            id_edificio: "",
            imagenes: "[]",
          }
        : {
            descripcion: data.registro_emergencias_edificios_by_pk.descripcion,
            fecha: data.registro_emergencias_edificios_by_pk.fecha,
            id: data.registro_emergencias_edificios_by_pk.id,
            imagenes: data.registro_emergencias_edificios_by_pk.imagenes,
            id_edificio: data.registro_emergencias_edificios_by_pk.id_edificio,
          };
    setnewDañoEdificio(daño);
  }, [data, id]);

  const changeAccidente = (e) => {
    setnewDañoEdificio({
      ...newDañoEdificio,
      [e.target.name]: e.target.value,
    });
  };
  const [updateRegistroEmergencia] = useMutation(
    updateRegistroEmergenciasEdificiosOne
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
      updateRegistroEmergencia({
        variables: newDañoEdificio,
      })
        .then((res) => {
          if (res.data) {
            setTextAlert("Actualizado correctamente");
            setLoading(false);
            setIconType("success");
            setshowAlert(true);
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
    setTimeout(() => {
      //si todo va bien lo redirecciona al inicio
      push("/tabla/daño/edificio");
    }, 2000);
  };

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
              <ListBoxEdificios
                changeEdificio={changeAccidente}
                edificioSeleccionado={
                  data.registro_emergencias_edificios_by_pk.edificio.nombre
                }
              />
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
              <SliderAccidentes
                fotos={
                  newDañoEdificio.imagenes
                    ? JSON.parse(newDañoEdificio.imagenes)
                    : []
                }
                setnewAccidente={setnewDañoEdificio}
                newAccidente={newDañoEdificio}
                setTextAlert={setTextAlert}
                endpointImage={"imagenes/daño/edificio/"}
              />
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
