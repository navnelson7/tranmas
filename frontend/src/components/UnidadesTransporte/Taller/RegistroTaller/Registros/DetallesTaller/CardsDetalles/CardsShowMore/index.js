import React, { Fragment } from "react";
import { useSubscription } from "@apollo/client";
import { listenDetalleTrabajoExcludeId } from "../../../../../../../../graphql/Suscription";
import { Link, useParams } from "react-router-dom";

function CardsShowMore({ IdSelected, idRegistroTaller }) {
  const { id } = useParams();
  const { loading, data, error } = useSubscription(
    listenDetalleTrabajoExcludeId,
    {
      variables: {
        id: IdSelected,
        id_registro_taller: idRegistroTaller,
      },
    }
  );
  if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return `Error! ${error.message}`;
  return (
    <Fragment>
      {data.detalle_trabajo_taller.map((detalle) => {
        return (
          <Fragment>
            <Link to={`/editar/detalle/taller/${detalle.id}/${id}`}>
              <div class="vl-detalle"></div>
              <div class="circle-detalle"></div>
              <div class="vl-detalle"></div>
              <div class="card-detalle-taller">
                <p class="mt-txt-card">
                  <strong>{detalle.repuesto.nombre} </strong>
                </p>
                <p class="mt-txt-card">{detalle.comentarios}</p>
                <p className="mt-txt-card">
                  {detalle.cantidad}{" "}
                  {detalle.cantidad < 2 ? "respuesto" : "respuestos"}
                </p>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default CardsShowMore;
