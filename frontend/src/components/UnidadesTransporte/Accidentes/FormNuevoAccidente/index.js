import React, { Fragment, useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import ListBoxMotorista from "../../../listbox/ListBoxMotorista";
import Upload from "../Upload";
import { useMutation } from "@apollo/client";
import { insertNewAccidentes } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function Registro() {
  const { id } = useParams();
  const { push } = useHistory();
  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [setNewAccidenteMutation] = useMutation(insertNewAccidentes);
  const [ExecuteSaveAccidente, setExecuteSaveAccidente] = useState(false);
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

  const changeAccidente = (e) => {
    setnewAccidente({
      ...newAccidente,
      [e.target.name]: e.target.value,
    });
  };
  // eslint-disable-next-line
  const submitAccidente = () => {
    if (newAccidente.descripcion_accidente === "") {
      setTextAlert("Escribe una descripción");
      setLoading(false);
      setIconType("error");
      setshowAlert(true);
    }
    if (newAccidente.id_empleado_motorista === "") {
      setTextAlert("Selecciona un empleado");
      setLoading(false);
      setIconType("error");
      setshowAlert(true);
    } else {
      setNewAccidenteMutation({
        variables: newAccidente,
      })
        .then((res) => {
          if (res.data) {
            setTextAlert("Registrado correctamente");
            setLoading(false);
            setIconType("success");
            setshowAlert(true);
            setTimeout(() => {
              //si todo va bien lo redirecciona al inicio
              push(`/accidentes/${id}`);
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

  useEffect(() => {
    if (ExecuteSaveAccidente) {
      submitAccidente();
      setExecuteSaveAccidente(false);
    }
  }, [ExecuteSaveAccidente, submitAccidente]);

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
                  value={newAccidente.descripcion_accidente}
                  onChange={changeAccidente}
                />
              </InputGroup>
              <ListBoxMotorista changeMotorista={changeAccidente} />
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
