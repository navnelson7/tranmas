import React, { Fragment } from "react";
import styled from "styled-components";
import { useSubscription } from "@apollo/client";
import {
  listenNombresDeRepuestos,
  listenKilometrajeMax,
} from "../../../graphql/Suscription";
import RowAlertasCambioRepuesto from "./TableAlertas";
import { useParams } from "react-router";

function AlertasCambioRepuesto() {
  const { idUnidadTransporte } = useParams();

  //TRAE EL NOMBRE DE  REPUESTO Y KM DE CAMBIO
  const { loading, data, error } = useSubscription(listenNombresDeRepuestos);

  // TRAE EL KILOMETRAJE REAL DE LA UNIDAD
  const kilometrajeGlobalMax = useSubscription(listenKilometrajeMax, {
    variables: {
      id: idUnidadTransporte,
    },
  });

  if (loading || kilometrajeGlobalMax.loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) {
    return <p align="box-center">{`Error! ${error.message}`}</p>;
  }
  if (kilometrajeGlobalMax.error) {
    return <p align="box-center">{`Error! ${kilometrajeGlobalMax.error}`}</p>;
  }
  return (
    <Fragment>
      <StyleAlertas>
        <br />
        <h2 className="center-box">Alertas de cambio de repuesto</h2>
        <div className="box-left-aire">
          {data.repuestos.map((repuestos) => {
            return (
              <Fragment key={repuestos.id}>
                <RowAlertasCambioRepuesto
                  kilometrajeCambioRepuesto={repuestos.km_para_cambio}
                  idRepuesto={repuestos.id}
                  nombreRepuesto={repuestos.nombre}
                  kilometrajeGlobalMax={
                    kilometrajeGlobalMax.data.kilometraje_global_aggregate
                      .aggregate.max.kilometraje === null
                      ? 0
                      : kilometrajeGlobalMax.data.kilometraje_global_aggregate
                          .aggregate.max.kilometraje
                  }
                />
              </Fragment>
            );
          })}
        </div>
      </StyleAlertas>
    </Fragment>
  );
}

export default AlertasCambioRepuesto;

const StyleAlertas = styled.div`
  .box-left-aire {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-aire {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-aire {
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
