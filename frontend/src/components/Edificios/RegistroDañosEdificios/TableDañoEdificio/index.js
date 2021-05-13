import React, { Fragment, useState } from "react";
import { Table, Button, Modal, Carousel } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";
import { ToastComponent } from "../../../Toast";
import { useMutation, useSubscription } from "@apollo/react-hooks";
import { listenRegistroEmergenciasEdificios } from "../../../../graphql/Suscription";
import { deleteRegistroEmergenciasEdficios } from "../../../../graphql/Mutations";

function TableDañoEdificio() {
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [ImageSelected, setImageSelected] = useState([]);

  const { data, loading, error } = useSubscription(
    listenRegistroEmergenciasEdificios
  );

  const [deleteRegistroEmergencia] = useMutation(
    deleteRegistroEmergenciasEdficios
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitDeleteEmergencia = (idSelected) => {
    deleteRegistroEmergencia({
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
      <Modal show={show} onHide={handleClose}>
        <Carousel>
          {ImageSelected.map((foto) => {
            return (
              <Carousel.Item key={foto}>
                <img
                  className="d-block w-100"
                  src={`${process.env.REACT_APP_BACKEND_FLASK}imagenes/daño/edificio/${foto}`}
                  alt=""
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleAire>
        <div className="box-left-aire">
          <Link to="/registro/daño/edificio" variant="danger">
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre de Edificio</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.registro_emergencias_edificios.map((daño, index) => {
                return (
                  <tr key={daño.id}>
                    <td>{index + 1}</td>
                    <td>
                      {daño.edificio.nombre === null
                        ? ""
                        : daño.edificio.nombre}
                    </td>
                    <td>{daño.descripcion}</td>
                    <td>{daño.fecha}</td>
                    <td>
                      <Button
                        title="Ver fotografia"
                        variant="success"
                        className="mr-2"
                        onClick={() => {
                          setImageSelected(JSON.parse(daño.imagenes));
                          handleShow();
                        }}
                      >
                        <FontAwesomeIcon icon={faFileImage} />
                      </Button>
                      <Link
                        to={`/editar/daño/edificio/${daño.id}`}
                        variant="danger"
                        title="Editar"
                        className="mr-2"
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        title="Eliminar"
                        onClick={() => submitDeleteEmergencia(daño.id)}
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

export default TableDañoEdificio;

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
