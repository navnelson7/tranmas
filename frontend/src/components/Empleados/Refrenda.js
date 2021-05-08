import React from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getDiferenceDays } from "../../functions/getDiferenceDays";

const Refrenda = ({ refrenda, eliminarRefrenda, id }) => {
  return (
    <Fragment>
      <td>
        {refrenda.motorista.nombres} {refrenda.motorista.apellidos}
      </td>
      <td>{refrenda.licencia_conducir}</td>
      <td>{refrenda.fecha_emision}</td>
      <td
        style={
          getDiferenceDays(refrenda.fecha_vencimiento) <= 0
            ? { color: "red" }
            : {}
        }
      >
        {getDiferenceDays(refrenda.fecha_vencimiento) < 0 ? (
          <Fragment>
            vencida por {Math.abs(getDiferenceDays(refrenda.fecha_vencimiento))}{" "}
            {Math.abs(getDiferenceDays(refrenda.fecha_vencimiento)) <= 1
              ? "dia atras"
              : "dias atras"}
          </Fragment>
        ) : // SI LA FECHA ES MAYOR A CERO MUESTRAN LOS DIAS QUE FALTAN PARA QUE SE VENSA
        Math.abs(getDiferenceDays(refrenda.fecha_vencimiento)) === 1 ? (
          "Falta " +
          Math.abs(getDiferenceDays(refrenda.fecha_vencimiento)) +
          " dia"
        ) : (
          "Faltan " +
          Math.abs(getDiferenceDays(refrenda.fecha_vencimiento)) +
          " dias"
        )}
      </td>
      <td>aqui val slide button</td>
      <td>
        <Button variant="danger" onClick={() => eliminarRefrenda(id)}>
          <FontAwesomeIcon icon={faTrash} value={id} />
        </Button>
      </td>
    </Fragment>
  );
};

export default Refrenda;
