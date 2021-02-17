import React, { Fragment, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardAccidente({ accidente }) {
  const [meses] = useState([
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]);
  return (
    <Fragment>
      <div className="col-md-4">
        <div className="card mt-3">
          <div className="card-block"> 
            <Carousel>
              {JSON.parse(accidente.registro_fotos).map((foto) => {
                return (
                  <Carousel.Item key={foto}>
                    <img
                      className="d-block w-100"
                      src={`${process.env.REACT_APP_BACKEND_FLASK}imagenes/accidentes/${foto}`}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <Link to={`/editar/registro/accidente/${accidente.id}`}>
            <p className="center-box">{accidente.descripcion_accidente}</p>
            <p className="center-box">
              <strong>
                {accidente.empleado_motorista.nombres} {""}{" "}
                {accidente.empleado_motorista.apellidos}
              </strong>
            </p>
            <p className="center-box">
              {new Date(accidente.fecha).getDate() +
                " de " +
                meses[new Date(accidente.fecha).getMonth()] +
                " de " +
                new Date(accidente.fecha).getFullYear()}
            </p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default CardAccidente;
