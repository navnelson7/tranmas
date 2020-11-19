import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Form, Spinner } from "react-bootstrap";
import editIcon from "./icons/edit.svg";
import { useMutation } from "@apollo/client";
import { setTransporteOne } from "../../../graphql/Mutations";
import { ToastComponent } from "../../Toast";
import { useHistory } from "react-router-dom";

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
  if (Loading) return <Spinner />;
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
              <Form.Control
                type="text"
                name="modelo"
                placeholder="Modelo"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              <Form.Control
                type="text"
                name="marca"
                placeholder="Marca"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              <Form.Control
                type="text"
                name="color"
                placeholder="Color"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              <Form.Control
                type="text"
                name="color_tapiceria"
                placeholder="Color de tapiceria"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              <h5>Numeraciones</h5>
              <Form.Control
                type="number"
                name="numero_equipo"
                placeholder="Numero de equipo"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              <Form.Control
                type="number"
                name="numero_pasajeros"
                placeholder="Numero de pasajeros"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              <Form.Control
                type="text"
                name="numero_placa"
                placeholder="Numero de placa"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              <Form.Control
                type="text"
                name="numero_tarjeta_circulacion"
                placeholder="Numero de tarjeta de circulación"
                onChange={(e) => changeTransporte(e)}
              />

              <br />
              <h5>Series</h5>
              <Form.Control
                type="text"
                name="serie_chasis"
                placeholder="Serie de chasis"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              <Form.Control
                type="text"
                name="serie_motor"
                placeholder="Serie de motor"
                onChange={(e) => changeTransporte(e)}
              />
              <br />
              desions
            </div>

            <div>
              <h5 className="center-txt">
                <strong>Fotografia de bus</strong>
              </h5>

              <div className="box-center-image">
                <div className="img-bus">
                  <div className="banner-imagen txt-editar">
                    <div className="grid-box-editar">
                      <div>
                        <img src={editIcon} alt="" />
                      </div>
                      <div>
                        <p className="mt-txt">
                          <a>Editar</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  .img-bus {
    height: 200px;
    width: 200px;
    background-image: url("https://i.blogs.es/0b13f1/tmb-bus-electric/840_560.jpg");
    border-radius: 50%;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
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

  .banner-imagen {
    top: 160px;
    position: relative;
    width: 45%;
    cursor: pointer;
    border-radius: 10%;
    height: 30px;
    background: white;
    font-size: 14px;
    border: 1.5px solid #e1e4e8;
  }
  .grid-box-editar {
    display: grid;
    grid-template-columns: 40% 60%;
  }
  .mt-txt {
    margin-top: 5px;
  }
  .txt-editar {
    color: black;
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
