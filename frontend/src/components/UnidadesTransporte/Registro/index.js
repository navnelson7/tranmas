import React, { Fragment } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import editIcon from "./icons/edit.svg";
function Registro() {
  return (
    <Fragment>
      <StyleRegitroUnidades>
        <div className="box-left-container">
          <div className="grid-form-transporte">
            <div>
              <h5>Especificaciones</h5>
              <Form.Control type="text" name="modelo" placeholder="Modelo" />
              <br />
              <Form.Control type="text" name="marca" placeholder="Marca" />
              <br />
              <Form.Control type="text" name="color" placeholder="Color" />
              <br />
              <Form.Control
                type="text"
                name="color_tapiceria"
                placeholder="Color de tapiceria"
              />
              <br />
              <h5>Numeraciones</h5>
              <Form.Control
                type="text"
                name="numero_equipo"
                placeholder="Numero de equipo"
              />
              <br />
              <Form.Control
                type="text"
                name="numero_pasajeros"
                placeholder="Numero de pasajeros"
              />
              <br />
              <Form.Control
                type="text"
                name="numero_placa"
                placeholder="Numero de placa"
              />
              <br />
              <Form.Control
                type="text"
                name="numero_circulacion"
                placeholder="Numero de tarjeta de circulación"
              />

              <br />
              <h5>Series</h5>
              <Form.Control
                type="text"
                name="serie_chasis"
                placeholder="Serie de chasis"
              />
              <br />
              <Form.Control
                type="text"
                name="serie_motor"
                placeholder="Serie de motor"
              />
              <br />
            </div>

            <div>
              <h5 className="center-txt">
                <strong>Fotografia de bus</strong>
              </h5>

              <div className="box-center-image">
                <div className="img-bus">
                  <div className="banner-imagen-oferta txt-editar">
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
            <br/>
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

  /* IMAGEN CARDS HOVER */

  .banner-imagen-oferta {
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
