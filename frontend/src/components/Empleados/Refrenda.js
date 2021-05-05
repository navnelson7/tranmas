import React from "react";
import { Fragment } from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
const Refrenda = ({refrenda,eliminarRefrenda, id}) => {

  return (
    <Fragment>
      <td>{refrenda.motorista.nombres} {refrenda.motorista.apellidos}</td>
      <td>{refrenda.licencia_conducir}</td>
      <td>{refrenda.fecha_emision}</td>
      <td>{refrenda.fecha_vencimiento}</td>
      <td>aqui val slide button</td>
      <td><Button variant="danger" onClick={()=> eliminarRefrenda(id)}><FontAwesomeIcon  icon={faTrash} value={id}/></Button></td>
    </Fragment>
  );
};

export default Refrenda;
