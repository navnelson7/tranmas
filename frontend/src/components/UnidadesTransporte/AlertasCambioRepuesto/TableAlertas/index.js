import React from "react";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenRepuestosCambios } from "../../../../graphql/Suscription";
import { Fragment } from "react";
import styled from "styled-components";

function RowAlertasCambioRepuesto({
  kilometrajeCambioRepuesto,
  idRepuesto,
  nombreRepuesto,
  kilometrajeGlobalMax,
}) {
  const { idUnidadTransporte } = useParams();
  const { data, loading, error } = useSubscription(listenRepuestosCambios, {
    variables: {
      idRepuesto: idRepuesto,
      idUnidadTransporte: idUnidadTransporte,
      fechaActual:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
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
  if (error) return <p align="box-center">{`Error! ${error.message}`}</p>;

  return (
    <Fragment>
      <StyleAlert>
        <div className="flex-center-box">
          {/*  el kilometraje actual con la resta de la ultima vez que se cambio el repuesto comparar con km de cambio si es mayor o igual */}
          {data.detalle_trabajo_taller[0] === undefined
            ? ""
            : kilometrajeGlobalMax -
                data.detalle_trabajo_taller[0].registro_taller.kilometraje >=
                kilometrajeCambioRepuesto && (
                <Alert variant="warning">
                  <Alert.Heading>¡Oh vaya! </Alert.Heading>
                  <p>Esta es una prueba {nombreRepuesto}</p>
                </Alert>
              )}
        </div>
      </StyleAlert>
    </Fragment>
  );
}

export default RowAlertasCambioRepuesto;

const StyleAlert = styled.div`
  .flex-center-box {
    margin-left: 10%;
    margin-right: 20%;
  }
`;
