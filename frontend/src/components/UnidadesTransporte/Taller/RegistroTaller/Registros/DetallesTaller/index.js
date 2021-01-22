import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "@apollo/client";
import { listenDetallesTaller } from "../../../../../../graphql/Suscription";
import styled from "styled-components";
import CardsDetalles from "./CardsDetalles";

function DetallesTaller({ idRegistroTaller }) {
  const { loading, data, error } = useSubscription(listenDetallesTaller, {
    variables: {
      id_registro_taller: idRegistroTaller,
    },
  });

  if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return `Error! ${error.message}`;
  return (
    <Fragment>
      {data.detalle_trabajo_taller.length === 0 ? (
        <Fragment>
          <div>
            <svg
              className="mt-line-curve"
              viewBox="-1 -1 62 42"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="orange-to-pink" x1={0} x2={0} y1={0} y2={1}>
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
            <StyleButton>
              <Link to={`/registro/detalle/taller/${idRegistroTaller}`}>
                <button className="btn-opcion bg-guardar">
                  <strong>Agregar detalle</strong>
                </button>
              </Link>
            </StyleButton>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <svg
              className="mt-line-curve"
              viewBox="-1 -1 62 42"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="orange-to-pink" x1={0} x2={0} y1={0} y2={1}>
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
            {data.detalle_trabajo_taller.map((registro) => {
              return (
                <CardsDetalles
                  idRegistroTaller={idRegistroTaller}
                  key={registro.id}
                  registro={registro}
                />
              );
            })}
          </div>
          <div>
            <StyleButton>
              <div className="grid-agregar-detalle">
                <div>
                  <hr class="line-horizontal" />
                </div>
                <div>
                  <Link to={`/registro/detalle/taller/${idRegistroTaller}`}>
                    <button className="btn-opcion bg-guardar">
                      <strong>Agregar detalle</strong>
                    </button>
                  </Link>
                </div>
              </div>
            </StyleButton>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default DetallesTaller;

const StyleButton = styled.div`
  /* LINEA SI EXISTE DETALLE TRABAJO TALLER */
  .btn-opcion {
    display: inline-block;
    font-weight: 400;
    height: 40px;
    width: 150px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    /* BORDER RADIUS */
    border-radius: 5px;
    cursor: pointer;
    margin-top: 140px;
  }
  .bg-guardar {
    transition: 0.3s;
    color: #696969;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    background: white;
  }
  .bg-guardar:hover {
    transition: 0.3s;
    color: #ffffff;
    background: #3d50fa;
  }

  .grid-agregar-detalle{
    display: grid;
    grid-template-columns: auto auto;
  }
`;
