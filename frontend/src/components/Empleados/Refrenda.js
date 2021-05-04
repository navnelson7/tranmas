import React from "react";
import { Fragment } from "react";
const Refrenda = (refrenda,eliminarRefrenda, id) => {
    console.log(refrenda)

  return (
    <Fragment>
      <td>{refrenda.refrenda.motorista.nombres} {refrenda.refrenda.motorista.apellidos}</td>
      <td>{refrenda.refrenda.motorista.licencia_conducir}</td>
      <td>{refrenda.refrenda.fecha_emision}</td>
      <td>{refrenda.refrenda.fecha_vencimiento}</td>
    </Fragment>
  );
};

export default Refrenda;
