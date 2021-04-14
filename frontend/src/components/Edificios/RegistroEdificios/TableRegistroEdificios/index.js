import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { listenRegistroEdificios } from "../../../../graphql/Suscription";
import { useSubscription, useMutation } from "@apollo/client";
import { deleteRegistroEdificioById } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function TableRegistroEdificios() {
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");

  const { data, loading, error } = useSubscription(listenRegistroEdificios);

  const [deleteRegistroEdificio] = useMutation(deleteRegistroEdificioById);

  const submitDeleteRegistroEdificio = (idSelected) => {
    deleteRegistroEdificio({
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
          <Link to="/registro/edificios">
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Extensión</th>
                <th>Función de edificio</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.registro_edificios.map((edificio, index) => {
                return (
                  <tr key={edificio.id}>
                    <td>{index + 1}</td>
                    <td>{edificio.nombre}</td>
                    <td>{edificio.descripcion}</td>
                    <td>{edificio.extension}</td>
                    <td>{edificio.funcion_edificio}</td>
                    <td>
                      <Link
                        to={`/editar/registro/edificio/${edificio.id}`}
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
                        onClick={() =>
                          submitDeleteRegistroEdificio(edificio.id)
                        }
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

export default TableRegistroEdificios;

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
