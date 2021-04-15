import React, { Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSubscription } from "@apollo/client";
import { listenDetalleMantenimiento } from "../../../../graphql/Suscription";

function TableDetalleMantenimientoEdificios() {
  const { data, loading, error } = useSubscription(listenDetalleMantenimiento);
  if (loading)
    return (
      <div className="box-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="box-center">
        <p>{error.message}</p>
      </div>
    );
  return (
    <Fragment>
      <StyleAire>
        <div className="box-left-aire">
          <Button variant="info">Nuevo Registro</Button>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre de edificio</th>
                <th>Descripción de trabajo</th>
                <th>Material</th>
                <th>Número de factura</th>
                <th>Costo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.detalle_mantenimiento_edificios.map((detalle, index) => {
                return (
                  <tr key={detalle.id}>
                    <td>{index + 1}</td>
                    <td>aqui va el nombre</td>
                    <td>{detalle.descripcion_de_trabajo}</td>
                    <td>{detalle.material}</td>
                    <td>{detalle.numero_factura}</td>
                    <td>{detalle.costo}</td>
                    <td>
                      <Link
                        to={`/editar/raaefrenda/circulacion/${detalle.id}`}
                        variant="danger"
                        title="Editar"
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                      <Button variant="danger" title="Eliminar">
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </StyleAire>
    </Fragment>
  );
}

export default TableDetalleMantenimientoEdificios;

const StyleAire = styled.div`
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
