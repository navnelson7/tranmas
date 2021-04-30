import React from "react";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { listenRepuestosCambios } from "../../../../graphql/Suscription";
import { Fragment } from "react";
import styled from "styled-components";

function RowAlertasCambioRepuesto({
  idRepuesto,
  nombreRepuesto,
  kilometrajeActual,
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
          {data.detalle_trabajo_taller === 0 ? (
            ""
          ) : data.detalle_trabajo_taller[0] === undefined ? (
            ""
          ) : data.detalle_trabajo_taller[0].registro_taller.kilometraje >=
            kilometrajeActual ? (
            <Alert variant="warning">
              <Alert.Heading>¡Oh vaya!</Alert.Heading>
              <p>
                La unidad de transporte necesita un cambio de{" "}
                <strong>{nombreRepuesto}</strong>
              </p>
            </Alert>
          ) : (
            ""
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
