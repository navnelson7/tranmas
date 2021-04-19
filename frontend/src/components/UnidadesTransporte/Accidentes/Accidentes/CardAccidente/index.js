import { useMutation } from "@apollo/client";
import React, { Fragment, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteAccidenteById } from "../../../../../graphql/Mutations";

function CardAccidente({
  accidente,
  idUnidadTransporte,
  setIconType,
  setshowAlert,
  setTextAlert,
}) {
  const [deleteAccidente] = useMutation(deleteAccidenteById);
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
  const submitDeleteAccidente = (idSelected) => {
    deleteAccidente({
      variables: {
        id: idSelected,
      },
    })
      .then((res) => {
        if (res.data) {
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Eliminado correctamente");
        }
      })
      .catch((error) => {
        setTextAlert(error.message);
        setIconType("error");
        setshowAlert(true);
      });
  };

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
                      alt=""
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <p className="center-box">{accidente.descripcion_accidente}</p>
          <p className="center-box">
            <strong>
              {accidente.empleado_motorista.nombres} {""}{" "}
              {accidente.empleado_motorista.apellidos}
            </strong>
          </p>
          <p className="center-box">
            {new Date(accidente.fecha).getDate() +
              1 +
              " de " +
              meses[new Date(accidente.fecha).getMonth()] +
              " de " +
              new Date(accidente.fecha).getFullYear()}
          </p>

          <div className="center-box">
            <Link
              to={`/editar/registro/accidente/${accidente.id}/${idUnidadTransporte}`}
            >
              <Button variant="primary">Editar accidente</Button>
            </Link>

            <Button
              className="ml-3"
              onClick={() => submitDeleteAccidente(accidente.id)}
              variant="danger"
            >
              Eliminar
            </Button>
          </div>
          <br />
        </div>
      </div>
    </Fragment>
  );
}

export default CardAccidente;
