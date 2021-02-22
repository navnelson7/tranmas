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
import { listenRefrendasCiculacion } from "../../../../graphql/Suscription";
import { deleteTapiceriaById } from "../../../../graphql/Mutations";
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
                <th>Costo de refrenda</th>
                <th>N° de tarjeta de circulación</th>
                <th>Refrendado</th>
                <th>Fecha de emisión</th>
                <th>Fecha de refrenda</th>
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
                    <td>{refrenda.fecha_emision}</td>
                    <td>{refrenda.fecha_refrenda}</td>
                    <td>
                      <Link
                        to={`/editar/tapiceria/${refrenda.id}/${id}`}
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
                        onClick={() => submitDeleteTapiceria(refrenda.id)}
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
