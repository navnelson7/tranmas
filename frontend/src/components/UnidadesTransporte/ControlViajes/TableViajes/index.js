import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useSubscription } from "@apollo/client";
import { listenViajesByUnidadTransporte } from "../../../../graphql/Suscription";
import { deleteViajeById } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function TableViajes() {
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");

  const { idUnidadTransporte } = useParams();
  const { data, loading, error } = useSubscription(
    listenViajesByUnidadTransporte,
    {
      variables: {
        idUnidadTransporte: idUnidadTransporte,
      },
    }
  );
  const [deleteViaje] = useMutation(deleteViajeById);

  const submitDeleteViaje = (idSelected) => {
    deleteViaje({
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
          <Link to={`/registro/viajes/${idUnidadTransporte}`}>
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>N° de unidad</th>
                <th>N° de viajes realizados</th>
                <th>Kilometrajes recogidos</th>
                <th>Tipo viaje</th>
                <th>Nombre de empleado</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.control_viajes.map((viaje, index) => {
                return (
                  <tr key={viaje.id}>
                    <td>{index + 1}</td>
                    <td>{viaje.unidad_transporte.numero_equipo}</td>
                    <td>{viaje.numero_de_viajes_realizados}</td>
                    <td>{viaje.kilometrajes_recogidos}</td>
                    <td>{viaje.tipo_viaje}</td>
                    <td>
                      {viaje.empleado_motorista === null
                        ? ""
                        : viaje.empleado_motorista.nombres +
                          " " +
                          viaje.empleado_motorista.apellidos}
                    </td>
                    <td>{viaje.fecha}</td>
                    <td>
                      <Link
                        to={`/editar/viajes/${idUnidadTransporte}/${viaje.id}`}
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        title="Eliminar"
                        onClick={() => submitDeleteViaje(viaje.id)}
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

export default TableViajes;

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
