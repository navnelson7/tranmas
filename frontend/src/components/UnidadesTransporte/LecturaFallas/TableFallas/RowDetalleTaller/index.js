import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Table, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSubscription } from "@apollo/client";
import { listenDetalleTaller } from "../../../../../graphql/Suscription";
import { Fragment } from "react";

function RowDetalleTaller({ idRepuesto, nombreRepuesto }) {
  const { id } = useParams();
  const [showMore, setshowMore] = useState(false);
  const { data, loading, error } = useSubscription(listenDetalleTaller, {
    variables: {
      idRepuesto: idRepuesto,
      idUnidadTransporte: id,
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
  console.log(data);
  return (
    <Fragment>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip">
            Numero de veces que se cambio el repuesto
          </Tooltip>
        }
      >
        <Button variant="light">
          {nombreRepuesto}{" "}
          {data.detalle_trabajo_taller_aggregate.aggregate.count}
        </Button>
      </OverlayTrigger>
      <Table bordered size="sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Comentarios</th>
            <th>Fecha</th>
            <th>Acción</th>
          </tr>
        </thead>
        {!showMore && (
          <tbody>
            {data.detalle_trabajo_taller_aggregate.nodes.map(
              (detalle, index) => {
                return (
                  <Fragment key={detalle.id}>
                    {index < 1 && (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{detalle.comentarios}</td>
                        <td>{detalle.registro_taller.fecha}</td>
                        <td>
                          <Link
                            to={`/editar/detalle/taller/${detalle.id}/${id}`}
                            title="Editar"
                          >
                            <Button variant="primary">
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              }
            )}
          </tbody>
        )}
        {showMore && (
          <tbody>
            {data.detalle_trabajo_taller_aggregate.nodes.map(
              (detalle, index) => {
                return (
                  <tr key={detalle.id}>
                    <td>{index + 1}</td>
                    <td>{detalle.comentarios}</td>
                    <td>{detalle.registro_taller.fecha}</td>
                    <td>
                      <Link
                        to={`/editar/detalle/taller/${detalle.id}/${id}`}
                        title="Editar"
                      >
                        <Button variant="primary">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        )}
      </Table>
      {!showMore ? (
        <div className="center-box">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setshowMore(!showMore)}
          >
            Mostrar más
          </button>
        </div>
      ) : (
        <div className="center-box">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setshowMore(!showMore)}
          >
            Mostrar menos
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default RowDetalleTaller;
