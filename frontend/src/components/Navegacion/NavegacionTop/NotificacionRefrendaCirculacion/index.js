import React, { Fragment, useState, useEffect } from "react";
import { useSubscription } from "@apollo/client";
import { listenRefrendaVencida } from "../../../../graphql/Suscription";
import styled from "styled-components";
import { getDiferenceDays } from "../../../../functions/getDiferenceDays";
import { Link } from "react-router-dom";

function NotificacionRefrendaCirculacion() {
  const [ShowAnimation, setShowAnimation] = useState(false);
  const { data, loading } = useSubscription(listenRefrendaVencida, {
    variables: {
      fecha:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
    },
  });
  useEffect(() => {
    let refrenda = 0;
    refrenda =
      data === undefined ? 0 : data.refrendas_tarjeta_circulacion.length;
    if (refrenda === 0) {
      setShowAnimation(false);
    } else {
      if (refrenda >= 1) {
        setShowAnimation(true);
      }
    }
  }, [data]);

  if (loading) {
    return (
      <div className="center-box">
        <div className="spinner-border text-white" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Fragment>
      <div className="container-dropdown" style={{ float: "right" }}>
        <StyleAnchuraDropdown ShowAnimation={ShowAnimation}>
          <button className="btn">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bell"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="box-icons-right animation-alert "
              onClick={() => setShowAnimation(false)}
            >
              <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
            </svg>
            <div className="dropdown scroll-container">
              {data.refrendas_tarjeta_circulacion.map((refrenda) => {
                return (
                  <Link
                    to={`/editar/refrenda/circulacion/${refrenda.id}/${refrenda.id_unidad_transporte}`}
                    key={refrenda.id}
                  >
                    <span key={refrenda.id}>
                      La tarjeta de circulacion con el numero{"  "}
                      <strong>
                        {refrenda.numero_tarjeta_circulacion}
                      </strong>{" "}
                      esta vencida desde{" "}
                      {Math.abs(getDiferenceDays(refrenda.fecha_refrenda))}{" "}
                      {Math.abs(getDiferenceDays(refrenda.fecha_refrenda)) <=
                      1 ? (
                        <strong>dia atras</strong>
                      ) : (
                        <strong>dias atras</strong>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </button>
        </StyleAnchuraDropdown>
      </div>
    </Fragment>
  );
}

export default NotificacionRefrendaCirculacion;

const StyleAnchuraDropdown = styled.div`
  .btn .dropdown {
    position: absolute;
    width: 350px;
    margin-left: -220px;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    opacity: 0;
    background-color: white;
    visibility: hidden;
    transition: 0.3s ease;
    z-index: 1;
  }
  span {
    text-align: center;
    font-size: 14px;
  }
  a {
    color: black;
  }
  .animation-alert {
    fill: white;
    animation: ${({ ShowAnimation }) =>
      `alert ${ShowAnimation ? "infinite 1s" : "none"}`};
  }
  @keyframes alert {
    from {
      fill: red;
    }
    to {
      fill: white;
    }
  }
`;
