import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSubscription, useMutation } from "@apollo/client";
import { listenDetalleMantenimiento } from "../../../../graphql/Suscription";
import { deleteDetalleMantenimientoEdificioById } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function TableDetalleMantenimientoEdificios() {
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");

  const { idMantenimiento } = useParams();
  const { data, loading, error } = useSubscription(listenDetalleMantenimiento, {
    idMantenimiento: idMantenimiento,
  });
  const [deleteRegistroEdificio] = useMutation(
    deleteDetalleMantenimientoEdificioById
  );

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
      <div className="box-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="box-center">
        <p>{error.message}</p>
      </div>
    );
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
          <Link
            to={`/registro/detalle/matenimiento/edificios/${idMantenimiento}`}
          >
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre de edificio</th>
                <th>Descripción de trabajo</th>
                <th>Material</th>
                <th>Número de factura</th>
                <th>Costo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.detalle_mantenimiento_edificios.map((detalle, index) => {
                return (
                  <tr key={detalle.id}>
                    <td>{index + 1}</td>
                    <td>
                      {detalle.mantenimiento_edificio.edificio === null
                        ? ""
                        : detalle.mantenimiento_edificio.edificio.nombre}
                    </td>
                    <td>{detalle.descripcion_de_trabajo}</td>
                    <td>{detalle.material}</td>
                    <td>{detalle.numero_factura}</td>
                    <td>{detalle.costo}</td>
                    <td>
                      <Link
                        to={`/editar/detalle/matenimiento/edificios/${detalle.id}/${idMantenimiento}`}
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        title="Eliminar"
                        onClick={() => submitDeleteRegistroEdificio(detalle.id)}
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

export default TableDetalleMantenimientoEdificios;

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
