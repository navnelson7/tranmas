import React, { Fragment, useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import ListBoxEdificios from "../../../listbox/ListBoxEdificios";
import Upload from "../Upload";
import { useMutation } from "@apollo/client";
import { insertRegistroEmergenciasEdificiosOne } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function Registro() {
  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [ExecuteSaveEdificio, setExecuteSaveEdificio] = useState(false);

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
    if (
      newDañoEdificio.descripcion === "" ||
      newDañoEdificio.id_edificio === ""
    ) {
      console.log("jejej");
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
    if (ExecuteSaveEdificio) {
      submitAccidente();
      setExecuteSaveEdificio(false);
    }
  }, [ExecuteSaveEdificio, submitAccidente]);

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
            </div>

            <div>
              <Upload
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
