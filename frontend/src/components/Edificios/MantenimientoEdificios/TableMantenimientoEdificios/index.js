import React, { Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSubscription } from "@apollo/client";
import { listenMantenimientoEdificios } from "../../../../graphql/Suscription";

function TableRegistroEdificios() {
  const { data, loading, error } = useSubscription(
    listenMantenimientoEdificios
  );

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

  console.log(data);
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
                <th>Edificio</th>
                <th>Empleado</th>
                <th>Fecha</th>
                <th>Detalles de mantenimiento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.mantenimiento_edificios.map((mantenimiento, index) => {
                return (
                  <tr key={mantenimiento.id}>
                    <td>{index + 1}</td>
                    <td>{mantenimiento.edificio.nombre}</td>
                    <td>
                      {mantenimiento.empleado.nombres}{" "}
                      {mantenimiento.empleado.apellidos}
                    </td>
                    <td>{mantenimiento.fecha}</td>
                    <td>
                      <Link
                        to={`/tabla/detalle/matenimiento/edificios/${mantenimiento.id}`}
                        variant="danger"
                        title="Ver detalles de mantenimiento"
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} /> Ver detalles
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant="info">
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
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

export default TableRegistroEdificios;

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
