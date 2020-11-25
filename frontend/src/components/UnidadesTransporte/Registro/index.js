import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import { Form, InputGroup } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { setTransporteOne } from "../../../graphql/Mutations";
import { ToastComponent } from "../../Toast";
import { useHistory } from "react-router-dom";
import ButtonsDesitions from "../../ButtonsDesitions";
import ImageSelected from "./ImageSelected";

function Registro() {
  const { push } = useHistory();
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const [UnidadTransporte, setUnidadTransporte] = useState({
    activo: true,
    updated_at:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    created_at:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
  });

  const [addTransporte] = useMutation(setTransporteOne);

  const changeTransporte = (e) => {
    if (e.target.name === "numero_equipo" || "numero_pasajeros") {
      setUnidadTransporte({
        ...UnidadTransporte,
        [e.target.name]: parseInt(e.target.value),
      });
    }
    setUnidadTransporte({
      ...UnidadTransporte,
      [e.target.name]: e.target.value,
    });
  };
  

  const submitTransporte = (e) => {
    e.preventDefault();
    setLoading(true);
    addTransporte({
      variables: UnidadTransporte,
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
        console.log(error);
        setLoading(false);
        setTextAlert("Ocurrio un problema");
        setIconType("error");
        setshowAlert(true);
      });
  };

  if (Loading)
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
      <StyleRegitroUnidades>
        <div className="box-left-container">
          <div className="grid-form-transporte">
            <div>
              <h5>Especificaciones</h5>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Modelo</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="modelo"
                  placeholder="Modelo"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Marca</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="marca"
                  placeholder="Marca"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="color"
                  placeholder="Color"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Color de tapiceria
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="color_tapiceria"
                  placeholder="Color de tapiceria"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>
              <h5>Numeraciones</h5>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Numero de equipo
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  name="numero_equipo"
                  placeholder="Numero de equipo"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Numero de pasajeros
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  name="numero_pasajeros"
                  placeholder="Numero de pasajeros"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Numero de placa
                  </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                  type="text"
                  name="numero_placa"
                  placeholder="Numero de placa"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Numero de tarjeta de circulación
                  </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                  type="text"
                  name="numero_tarjeta_circulacion"
                  placeholder="Numero de tarjeta de circulación"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>

              <h5>Series</h5>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Serie de chasis
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="serie_chasis"
                  placeholder="Serie de chasis"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Serie de motor
                  </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                  type="text"
                  name="serie_motor"
                  placeholder="Serie de motor"
                  onChange={(e) => changeTransporte(e)}
                />
              </InputGroup>
              <br />
              <ButtonsDesitions
                linkCancel="/unidades-transporte"
                submitSave={submitTransporte}
              />
            </div>

            <div>
            <ImageSelected/>
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

const StyleRegitroUnidades = styled.div`
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
      margin-left: 18.5%;
      margin-top: 2%;
      overflow-x: hidden;
    }
  }
`;
