import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { updateRepuestoTrue } from "../../../graphql/Mutations";
import { useMutation } from "@apollo/client";

const Repuesto = ({ repuesto, listadoRepuestos = [], setListadoRepuestos }) => {
  const [updateRepuesto] = useMutation(updateRepuestoTrue);

  const updateRepuestoById = (idSelected) => {
    updateRepuesto({
      variables: {
        id: idSelected,
      },
    }).then((res) => {
      if (res.data) {
        const repuestosResultantes = listadoRepuestos.filter(
          (repuesto) => repuesto.id !== idSelected
        );
        setListadoRepuestos(repuestosResultantes);
      }
    });
  };
  return (
    <Fragment>
      <td> {repuesto.nombre} </td>
      <td> {repuesto.marcar_de_repuestos.marca} </td>
      <td> {repuesto.cantidad} </td>
      <td> {repuesto.unidad_medida_repuesto.unidad_de_medida} </td>
      <td> {repuesto.precio} </td>
      <td> {repuesto.proveedor_de_repuesto.nombre_proveedor} </td>
      <td> {repuesto.estado_repuesto_stock.estado_repuestos} </td>
      <td>{repuesto.km_para_cambio}</td>
      <td>
        <Button
          variant="primary"
          value={repuesto.id}
          onClick={() => updateRepuestoById(repuesto.id)}
        >
          <FontAwesomeIcon icon={faEdit} style={{ marginRight: "2px" }} />
          Restaurar
        </Button>
      </td>
    </Fragment>
  );
};

export default Repuesto;
