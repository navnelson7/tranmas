import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";

function RepuestosNoArreglados({
  data,
  kilometrajeMax,
  kilometrajes,
  repuestosReparados,
}) {
  return (
    <Fragment>
      {
        // SI EL REPUESTO REPARADO ES IGUAL AL SOBREPASADO NO SE MUESTRA
        JSON.parse(repuestosReparados).includes(kilometrajes.id) ? null : data
            .registro_combustible.length === 0 ? (
          kilometrajeMax.data.registro_combustible_aggregate.aggregate.max
            .kilometraje_actual > kilometrajes.km_para_cambio ? (
            <Alert variant="warning">
              <Alert.Heading>¡Oh vaya!</Alert.Heading>
              <p>
                La unidad de transporte necesita un cambio de{" "}
                {kilometrajes.nombre}
              </p>
            </Alert>
          ) : (
            ""
          )
        ) : kilometrajeMax.data.registro_combustible_aggregate.aggregate.max
            .kilometraje_actual >
          data.registro_combustible[0].kilometraje_actual +
            kilometrajes.km_para_cambio ? (
          <Alert variant="warning">
            <Alert.Heading>¡Oh vaya!</Alert.Heading>
            <p>
              La unidad de transporte necesita un cambio de{" "}
              {kilometrajes.nombre}
            </p>
          </Alert>
        ) : (
          ""
        )
      }
    </Fragment>
  );
}

export default RepuestosNoArreglados;
