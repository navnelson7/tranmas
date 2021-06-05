import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSubscription, useMutation } from "@apollo/client";
import { listenControlCarwash } from "../../../../graphql/Suscription";
import { deleteControlCarwashById } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function TableCarwash() {
  const { id } = useParams();

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
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const { data, loading, error } = useSubscription(listenControlCarwash, {
    variables: {
      id,
    },
  });
  const [deleteCarwash] = useMutation(deleteControlCarwashById);
  const submitDeleteCarwash = (idSelected) => {
    deleteCarwash({
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
  if (error) return <p className="box-center">{`Error! ${error.message}`}</p>;
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
          <Link to={`/registro/consumo/carwash/${id}`} variant="danger">
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Costo</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.registro_carwash.map((carwash, index) => {
                return (
                  <tr key={carwash.id}>
                    <td>{index + 1}</td>
                    <td>{carwash.costo}</td>
                    <td>{carwash.descripcion_trabajo}</td>
                    <td>
                      {new Date(carwash.fecha).getDate() + 1} de{" "}
                      {meses[new Date(carwash.fecha).getMonth()]}{" "}
                      {new Date(carwash.fecha).getFullYear()}
                    </td>
                    <td>
                      <Link
                        to={`/editar/consumo/carwash/${carwash.id}/${id}`}
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
                        onClick={() => submitDeleteCarwash(carwash.id)}
                        className="ml-2"
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

export default TableCarwash;

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
