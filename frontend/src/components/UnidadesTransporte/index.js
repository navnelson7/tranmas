import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Image from "./Image";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenUnidadesTranporte } from "../../graphql/Suscription";

function UnidadesTransporte() {
  const { data, loading, error } = useSubscription(listenUnidadesTranporte);
  if (loading)
    return (
      <div className="box-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="box-center">
        <p>{error.message}</p>
      </div>
    );
  return (
    <Fragment>
      <StyleCards>
        <div className="box-left-cards">
          <div className="d-flex justify-content-end mr-2">
            <Link to="/registro-transporte">
              <Button variant="primary">Nueva Unidad</Button>
            </Link>
          </div>
          <div className="row hidden-md-up">
            {data.unidades_de_transporte.map((unidad) => {
              return (
                <div className="col-md-4" key={unidad.id}>
                  <div className="card mt-3">
                    <div className="card-block">
                      <Image
                        src={
                          "https://cdn.pixabay.com/photo/2020/05/20/07/02/gunnera-5195132_960_720.jpg"
                        }
                        numero_pasajeros={unidad.numero_pasajeros}
                        marca={unidad.marca}
                        id={unidad.id}
                      />
                      <br />
                      <br />
                      <div className="box-placa">
                        <div className="box-blue-top">EL SALVADOR</div>
                        <div className="box-white">
                          <strong>{unidad.numero_placa}</strong>
                        </div>
                        <div className="box-blue-bottom">CENTRO AMERICA</div>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
        </div>
      </StyleCards>
    </Fragment>
  );
}

export default UnidadesTransporte;

const StyleCards = styled.div`
  .box-left-cards {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  .box-image {
    width: 100%;
    height: 180px;
    background-color: blue;
  }

  .box-placa {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .box-white {
    background: white;
  }
  .box-blue-top {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .box-blue-bottom {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-cards {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-cards {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-cards {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
`;
