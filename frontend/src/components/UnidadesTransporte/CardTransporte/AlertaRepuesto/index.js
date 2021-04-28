import React, { Fragment } from "react";
import { useSubscription } from "@apollo/client";

import {
  listenKilometrajeMax,
  listenKilometrajePenultimo,
  listenKmParaCambio,
} from "../../../../graphql/Suscription";
import { Alert } from "react-bootstrap";
import RepuestosNoArreglados from "../RepuestoNoArreglado";

function AlertRepuesto({ unidad }) {
  const kilometrajeCambio = useSubscription(listenKmParaCambio);

  const kilometrajeMax = useSubscription(listenKilometrajeMax, {
    variables: {
      id: unidad.id,
    },
  });
  // ESTO TRAE EL KILOMETRAJE PENULTIMO DE LA UNIDAD DE TRANSPORTE
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
    return "Cargando...";
  }
  if (error || kilometrajeMax.error || kilometrajeCambio.error)
    return <p align="center">{`Error! ${error.message}`}</p>;
  return (
    <div>
      {/* MUESTRA LA ALERTA SI DETECTA QUE EL KILOMETRAJE YA SE SOBREPASO PARA CAMBIAR REPUESTOS */}
      {kilometrajeCambio.data.repuestos.map((kilometrajes) => {
        return (
          <Fragment key={kilometrajes.id}>
            {/* VERIFICO SI EXISTE ALGUN REPUESTO EN LA LISTA DE REPARADOS */}
            {JSON.parse(unidad.id_repuestos_reparados) === null ||
            JSON.parse(unidad.id_repuestos_reparados).length === 0 ? (
              <Fragment>
                {data.registro_combustible.length === 0 ? (
                  kilometrajeMax.data.registro_combustible_aggregate.aggregate
                    .max.kilometraje_actual > kilometrajes.km_para_cambio ? (
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
                ) : kilometrajeMax.data.registro_combustible_aggregate.aggregate
                    .max.kilometraje_actual >
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
                )}
              </Fragment>
            ) : (
              <RepuestosNoArreglados
                data={data}
                kilometrajeMax={kilometrajeMax}
                kilometrajes={kilometrajes}
                repuestosReparados={unidad.id_repuestos_reparados}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default AlertRepuesto;
