import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { listenCombustibleinTable } from "../../../../graphql/Suscription";
import { deleteRegistroCombustibleById } from "../../../../graphql/Mutations";
import { useMutation, useSubscription } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ToastComponent } from "../../../Toast";

function TableCombustible() {
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");

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

  const { idUnidadTransporte } = useParams();
  const { loading, data, error } = useSubscription(listenCombustibleinTable, {
    variables: {
      fecha:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      id_unidad_transporte: idUnidadTransporte,
    },
  });

  const [setCombustible] = useMutation(deleteRegistroCombustibleById);

  const submitDeleteCombustible = (idSelected) => {
    setCombustible({
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
          <h6>
            <strong>
              Registros de combustibles del dia{" "}
              {new Date().getDate() +
                " de " +
                meses[new Date().getMonth()] +
                " de " +
                new Date().getFullYear()}
            </strong>
          </h6>
          <Link to={`/registro/combustible/${idUnidadTransporte}`}>
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Galones servidos</th>
                <th>Kilometraje</th>
                <th>Motorista</th>
                <th>Comentarios</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.registro_combustible.map((carwash, index) => {
                return (
                  <tr key={carwash.id}>
                    <td>{index + 1}</td>
                    <td>{carwash.galones_servidos}</td>
                    <td>{carwash.kilometraje_actual}</td>
                    <td>
                      {carwash.empleado_motorista.nombres}{" "}
                      {carwash.empleado_motorista.apellidos}
                    </td>
                    <td>{carwash.comentarios}</td>
                    <td>{carwash.fecha}</td>
                    <td>
                      <Link
                        to={`/editar/combustible/${carwash.id}/${idUnidadTransporte}`}
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        title="Eliminar"
                        onClick={() => submitDeleteCombustible(carwash.id)}
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

export default TableCombustible;

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
