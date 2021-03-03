import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDiferenceDays } from "../../../../functions/getDiferenceDays";
import {
  faTrash,
  faEdit,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";
import { useSubscription, useMutation } from "@apollo/client";
import { listenRefrendasCiculacion } from "../../../../graphql/Suscription";
import { deleteRefrendaLicenciaById } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function TableRefrendaCirculacion() {
  const { id } = useParams();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const { data, loading, error } = useSubscription(listenRefrendasCiculacion, {
    variables: {
      id,
    },
  });
  const [deleteRefrenda] = useMutation(deleteRefrendaLicenciaById);
  const submitDeleteRefrenda = (idSelected) => {
    deleteRefrenda({
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
  if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p align="box-center">{`Error! ${error.message}`}</p>;
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleAire>
        <div className="box-left-aire">
          <Link to={`/registro/refrenda/circulacion/${id}`} variant="danger">
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Costo de refrenda</th>
                <th>N° de tarjeta de circulación</th>
                <th>Refrendado</th>
                <th>Fecha de emisión</th>
                <th>Fecha de refrenda</th>
                <th>N° tarjeta de circulación</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.refrendas_tarjeta_circulacion.map((refrenda, index) => {
                return (
                  <tr key={refrenda.id}>
                    <td>{index + 1}</td>
                    <td>{refrenda.costo_refrenda}</td>
                    <td>{refrenda.numero_tarjeta_circulacion}</td>
                    <td>
                      <div className="center-box">
                        {refrenda.refrendado ? (
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="check"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            height="24px"
                            width="24px"
                          >
                            <path
                              fill="green"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="times"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 352 512"
                            height="24px"
                            width="24px"
                          >
                            <path
                              fill="red"
                              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </td>
                    <td>{refrenda.fecha_emision}</td>
                    <td
                      style={
                        getDiferenceDays(refrenda.fecha_refrenda) <= 0
                          ? { color: "red" }
                          : {}
                      }
                    >
                      {getDiferenceDays(refrenda.fecha_refrenda) < 0 ? (
                        <Fragment>
                          vencida por{" "}
                          {Math.abs(getDiferenceDays(refrenda.fecha_refrenda))}{" "}
                          {Math.abs(
                            getDiferenceDays(refrenda.fecha_refrenda)
                          ) <= 1
                            ? "dia atras"
                            : "dias atras"}
                        </Fragment>
                      ) : // SI LA FECHA ES MAYOR A CERO MUESTRAN LOS DIAS QUE FALTAN PARA QUE SE VENSA
                      Math.abs(getDiferenceDays(refrenda.fecha_refrenda)) ===
                        1 ? (
                        "Falta " +
                        Math.abs(getDiferenceDays(refrenda.fecha_refrenda)) +
                        " dia"
                      ) : (
                        "Faltan " +
                        Math.abs(getDiferenceDays(refrenda.fecha_refrenda)) +
                        " dias"
                      )}
                    </td>
                    <td>
                      {refrenda.unidad_transporte.numero_tarjeta_circulacion}
                    </td>
                    <td>
                      <Link
                        to={`/editar/refrenda/circulacion/${refrenda.id}/${id}`}
                        variant="danger"
                        title="Editar"
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        title="Eliminar"
                        onClick={() => submitDeleteRefrenda(refrenda.id)}
                      >
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

export default TableRefrendaCirculacion;

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
