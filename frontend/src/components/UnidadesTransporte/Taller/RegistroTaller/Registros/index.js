import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { useSubscription } from "@apollo/client";
import { listenRegistrosTaller } from "../../../../../graphql/Suscription";
import { useParams } from "react-router";
import DetallesTaller from "./DetallesTaller";

function Registros() {
  const { id } = useParams();
  const { loading, data } = useSubscription(listenRegistrosTaller, {
    variables: {
      id_unidad_transporte: id,
    },
  });
  if (loading) {
    return <p align="center">Cargando..</p>;
  }
  return (
    <Fragment>
      <StyleLineOfTime>
        <div className="container-form scroll-line-time">
          {data.registro_taller.map((registro) => {
            return (
              <div className="grid-line-time" key={registro.id}>
                <div>
                  <p className="time-circle">{registro.fecha}</p>
                </div>
                <div>
                  <div className="vl" />
                  <div className="circle" />
                  <div className="vl" />
                </div>
                <div>
                  <div className="card-registro-taller">
                    <p className="mt-txt-card">
                      <strong>{registro.comentarios}</strong>
                    </p>
                    <p className="mt-txt-card">{registro.kilometraje}</p>
                    <p className="mt-txt-card">
                      en {registro.estado_taller.estado}
                    </p>
                  </div>
                </div>
                <DetallesTaller idRegistroTaller={registro.id} />
              </div>
            );
          })}
          {/* <div className="grid-line-time">
            <div>
              <p className="time-circle">Hace 6 horas</p>
            </div>
            <div>
              <div className="vl" />
              <div className="circle" />
              <div className="vl" />
            </div>
            <div>
              <div className="card-registro-taller">
                <p className="mt-txt-card">
                  <strong>Reparacion de frenos</strong>
                </p>
                <p className="mt-txt-card">50km actual</p>
                <p className="mt-txt-card">En prueba</p>
              </div>
            </div>
            <div>
              <svg
                className="mt-line-curve"
                viewBox="-1 -1 62 42"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="orange-to-pink"
                    x1={0}
                    x2={0}
                    y1={0}
                    y2={1}
                  >
                    <stop offset="0%" stopColor="#DA1B60" />
                    <stop offset="100%" stopColor="#ff8a00" />
                  </linearGradient>
                </defs>
                <path
                  d="
                  M 0,0 
                  L 35,0
                  Q 40,0
                    40,5
                  L 40,35
                  Q 40,40
                    45,40
                  L 60,40
                "
                />
              </svg>
            </div>
            <div>
              <button className="btn-opcion bg-guardar">
                <strong>Agregar detalle</strong>
              </button>
            </div>
          </div> */}
          <br />
          <br />
          <br />
        </div>
      </StyleLineOfTime>
    </Fragment>
  );
}

export default Registros;

const StyleLineOfTime = styled.div`
  .vl {
    border-left: 6px solid #f72585;
    height: 100px;
    margin-left: 21px;
  }
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    border: 4px solid #f72585;
    transition: all 0.3s ease 0s;
  }

  .time-circle {
    font-size: 15px;
    text-align: center;
    margin-top: 115px;
  }

  .card-registro-taller {
    margin-top: 35px;
    min-height: 100px;
    height: auto;
    background: rgb(255, 255, 255);
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    color: #696969;
    transition: all 0.3s ease 0s;
    padding: 10px;
    text-align: center;
  }
  .mt-txt-card {
    margin-top: 5px;
  }
  /* CUANDO LE DEN HOVER AL GRID  */
  .grid-line-time:hover .card-registro-taller {
    transition: all 0.3s ease 0s;
    background: #0070f3;
    color: #ffffff;
  }

  .grid-line-time:hover .circle {
    transition: all 0.3s ease 0s;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffffff;
    border: 4px solid #4361ee;
  }

  .grid-line-time:hover .vl {
    border-left: 6px solid #4361ee;
    margin-left: 21px;
  }

  .grid-line-time:hover .time-circle {
    transition: all 0.3s ease 0s;
    font-weight: 900;
  }
  /* MEDIA QUERIES OF LINE TIME */

  @media (max-width: 1024px) {
    .grid-line-time {
      display: grid;
      grid-template-columns: 22% 18% 200px 100px 200px;
      width: auto;
    }
    .card-registro-taller {
      width: 200px;
    }
    .card-detalle-taller {
      width: 200px;
    }
  }
  @media (min-width: 1024px) {
    .grid-line-time {
      display: grid;
      grid-template-columns: 10% 7% 250px 150px 250px;
    }
    .card-registro-taller {
      width: 250px;
    }
    .card-detalle-taller {
      width: 250px;
    }
  }

  /* LINEA DETALLE TRABAJO TALLER */
  .line-horizontal {
    border: 5px solid #f72585;
    width: 100%;
  }

  path {
    fill: none;
    stroke: #f72585;
    stroke-width: 2px;
  }

  .grid-line-time:hover path {
    stroke: #4361ee;
  }

  .mt-line-curve {
    margin-top: 60px;
  }

  .card-detalle-taller {
    position: relative;
    top: 80px;
    min-height: 100px;
    height: auto;
    background: rgb(255, 255, 255);
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    color: #696969;
    transition: all 0.3s ease 0s;
    padding: 10px;
    text-align: center;
  }

  .grid-line-time:hover .card-detalle-taller {
    background: #4361ee;
    color: white;
  }

  /* SCROLL CONTAINER */
  .scroll-line-time {
    overflow: scroll;
    height: auto;
    width: auto;
    overflow-y: hidden;
  }
  .scroll-line-time::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  .scroll-line-time::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  .scroll-line-time::-webkit-scrollbar-thumb {
    background: #d6d0d0;
  }
  /* Handle on hover */
  .scroll-line-time::-webkit-scrollbar-thumb:hover {
    background: rgb(160, 139, 139);
  }

  /* MOBILE */

  @media (max-width: 1025px) {
    .container-form {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
    }
  }

  /* DESKTOP */

  @media (min-width: 720px) {
    .container-form {
      margin-left: 5%;
      margin-top: 50px;
    }
  }

  /* DESKTOP */

  @media (min-width: 1025px) {
    .container-form {
      margin-left: 25%;
      margin-right: 1%;
      margin-top: 50px;
    }
  }
`;