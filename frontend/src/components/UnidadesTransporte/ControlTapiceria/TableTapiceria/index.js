import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";
import { useSubscription, useMutation } from "@apollo/client";
import { listenTapiceria } from "../../../../graphql/Suscription";
import { deleteTapiceriaById } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function TableTapiceria() {
  const { id } = useParams();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");

  const { data, loading, error } = useSubscription(listenTapiceria, {
    variables: {
      id,
    },
  });
  const [deleteTapiceria] = useMutation(deleteTapiceriaById);
  const submitDeleteTapiceria = (idSelected) => {
    deleteTapiceria({
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
  console.log(data);
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
          <Link to={`/registro/tapiceria/${id}`} variant="danger">
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Motorista</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.control_tapiceria_carroceria.map((tapiceria, index) => {
                return (
                  <tr key={tapiceria.id}>
                    <td>{index + 1}</td>
                    <td>
                      {tapiceria.empleado_motorista.nombres}{" "}
                      {tapiceria.empleado_motorista.apellidos}
                    </td>
                    <td>{tapiceria.descripcion_dano}</td>
                    <td>{tapiceria.fecha}</td>
                    <td>
                      <Button title="Ver fotografia" variant="success">
                        <FontAwesomeIcon icon={faFileImage} />
                      </Button>
                      <Link
                        to={`/editar/aire/acondicionado/${id}/${tapiceria.id}`}
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
                        onClick={() => submitDeleteTapiceria(tapiceria.id)}
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

export default TableTapiceria;

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
