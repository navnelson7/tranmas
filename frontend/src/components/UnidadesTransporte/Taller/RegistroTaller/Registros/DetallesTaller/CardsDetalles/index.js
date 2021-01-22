import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CardsShowMore from "./CardsShowMore";
function CardsDetalles({ registro, idRegistroTaller }) {
  const [ShowMoreCards, setShowMoreCards] = useState(false);
  const [IdSelected, setIdSelected] = useState("");
  return (
    <Fragment>
    {/* AQUI MOSTRAMOS SOLO UNA CARTA */}
      <Link to={`/editar/detalle/taller/${registro.id}`}>
        <div className="card-detalle-taller card-detalle-top">
          <p className="mt-txt-card">
            <strong>{registro.repuesto.nombre} </strong>
          </p>
          <p className="mt-txt-card">{registro.comentarios}</p>
          <p className="mt-txt-card">
            {registro.cantidad}{" "}
            {registro.cantidad < 2 ? "respuesto" : "respuestos"}
          </p>
        </div>
      </Link>
      <br />
      <br />
      {ShowMoreCards === false && (
        <div
          className="mostrar-mas"
          onClick={() => {
            setIdSelected(registro.id)
            setShowMoreCards(!ShowMoreCards)
          }}
        >
          <p>Mostrar más</p>
        </div>
      )}
      {/* MOSTRAMOS LA CARTAS EXCLUYENDO EL ID DE LA PRIMER CARTA */}
      {ShowMoreCards && <CardsShowMore idRegistroTaller={idRegistroTaller} IdSelected={IdSelected} />}
      {ShowMoreCards && (
        <div
          className="mostrar-mas"
          onClick={() => setShowMoreCards(!ShowMoreCards)}
        >
          <p>Mostrar menos</p>
        </div>
      )}
    </Fragment>
  );
}

export default CardsDetalles;
