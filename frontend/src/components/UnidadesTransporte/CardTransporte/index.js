import React, { Fragment, useState } from "react";
import styled from "styled-components";
import ButtonAccidentes from "./ButtonAccidentes";
import ButtonFuel from "./ButtonFuel";
import ButtonGraphic from "./ButtonGraphic";
import ButtonReparaciones from "./ButtonReparaciones";
import ButtonAireAcondicionado from "./ButtonAireAcondicionado";
import Image from "./Image";
import ButtonTapiceria from "./ButtonTapiceria";
import ButtonRefrenda from "./ButtonRefrenda";
import ButtonCarwash from "./ButtonCarwash";
import { useSubscription } from "@apollo/client";
import {
  listenKilometrajePenultimo,
  listenKmParaCambio,
} from "../../../graphql/Suscription";
import { listenKilometrajeMax } from "../../../graphql/Suscription";
import { Alert } from "react-bootstrap";

function CardTransporte({ unidad }) {
  const kilometrajeCambio = useSubscription(listenKmParaCambio);

  const kilometrajeMax = useSubscription(listenKilometrajeMax, {
    variables: {
      id: unidad.id,
    },
  });
  const { data, loading, error } = useSubscription(listenKilometrajePenultimo, {
    variables: {
      id: unidad.id,
      fecha:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
    },
  });
  if (loading || kilometrajeMax.loading || kilometrajeCambio.loading) {
    return "";
  }
  if (error || kilometrajeMax.error || kilometrajeCambio.error)
    return <p align="center">{`Error! ${error.message}`}</p>;

  console.log(kilometrajeCambio.data.repuestos);
  return (
    <Fragment>
      <div className="col-md-4" key={unidad.id}>
        <div className="card mt-3">
          <div className="card-block stilo">
            <Image
              src={`${process.env.REACT_APP_BACKEND_FLASK}images/${unidad.image}`}
              numero_pasajeros={unidad.numero_pasajeros}
              marca={unidad.marca_transporte.marca}
              id={unidad.id}
            />
            <StyleGridCircle>
              <div className="grid-circle-card scroll-cards">
                <ButtonFuel id={unidad.id} />
                <ButtonGraphic idUnidadTransporte={unidad.id} />
                <ButtonReparaciones idUnidadTransporte={unidad.id} />
                <ButtonAccidentes idUnidadTransporte={unidad.id} />
                <ButtonAireAcondicionado idUnidadTransporte={unidad.id} />
                <ButtonTapiceria idUnidadTransporte={unidad.id} />
                <ButtonRefrenda idUnidadTransporte={unidad.id} />
                <ButtonCarwash idUnidadTransporte={unidad.id} />
              </div>
            </StyleGridCircle>
            <br />
            {kilometrajeCambio.data.repuestos.map((kilometrajes) => {
              return (
                <Fragment>
                  {data.registro_combustible[0].kilometraje_actual +
                    kilometrajes.km_para_cambio >=
                  kilometrajeMax.data.registro_combustible_aggregate.aggregate
                    .max.kilometraje_actual ? (
                    <Alert variant="warning">
                      <Alert.Heading>¡Oh vaya!</Alert.Heading>
                      <p>
                        La unidad de transporte necesita un cambio de{" "}
                        {kilometrajes.nombre}
                      </p>
                    </Alert>
                  ) : (
                    ""
                  )}
                </Fragment>
              );
            })}
            <p className="center-box">Número de unidad {unidad.numero_equipo} </p>
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
    </Fragment>
  );
}
const StyleGridCircle = styled.div`
  .grid-circle-card {
    display: grid;
    grid-template-columns: 25% 25% 25% 25% 25% 25% 25% 25% 25%;
    grid-column-gap: 10%;
    margin-left: 5px;
  }
  /* SCROLL CARDS */
  .scroll-cards {
    overflow: scroll;
    height: 100%;
    width: auto;
    overflow-y: hidden;
  }
  .scroll-cards::-webkit-scrollbar {
    height: 10px;
  }
  /* Track */
  .scroll-cards::-webkit-scrollbar-track {
    background: #eaeaea;
  }
  /* Handle */
  .scroll-cards::-webkit-scrollbar-thumb {
    background: #eaeaea;
  }
  /* Handle on hover */
  .scroll-cards::-webkit-scrollbar-thumb:hover {
    background: #f20089;
  }
`;

export default React.memo(CardTransporte, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
