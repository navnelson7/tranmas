import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ToastComponent } from "../../../Toast";
import { useSubscription, useMutation } from "@apollo/client";
import { compatibilidadRepuesto } from "../../../../graphql/Suscription";
import { deleteCompatibilidadRepuesto } from "../../../../graphql/Mutations";

function TableCompatibilidaRepuesto() {
  const { idUnidadTransporte } = useParams();

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

  const { data, loading, error } = useSubscription(compatibilidadRepuesto);
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");

  const [deleteCompatibilidad] = useMutation(deleteCompatibilidadRepuesto);

  const submitdeleteCompatibilidadRepuesto = (idSelected) => {
    deleteCompatibilidad({
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
          <Link to={`/registro/compatibilidad/repuesto/${idUnidadTransporte}`}>
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre de repuesto</th>
                <th>Cantidad de repuesto</th>
                <th>Proveedor</th>
                <th>Fecha de registro</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.registro_compatibilidad_repuestos.map(
                (compatibilidad, index) => {
                  return (
                    <tr key={compatibilidad.id}>
                      <td>{index + 1}</td>
                      <td>{compatibilidad.repuesto.nombre}</td>
                      <td>{compatibilidad.repuesto.cantidad}</td>
                      <td>
                        {
                          compatibilidad.repuesto.proveedor_de_repuesto
                            .nombre_proveedor
                        }
                      </td>
                      <td>
                        {new Date(compatibilidad.fecha).getDate() + 1} de{" "}
                        {meses[new Date(compatibilidad.fecha).getMonth()]}{" "}
                        {new Date(compatibilidad.fecha).getFullYear()}
                      </td>
                      <td>
                        <Link
                          to={`/editar/compatibilidad/repuesto/${idUnidadTransporte}/${compatibilidad.id}`}
                        >
                          <Button variant="info">
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          title="Eliminar"
                          className="ml-2"
                          onClick={() =>
                            submitdeleteCompatibilidadRepuesto(
                              compatibilidad.id
                            )
                          }
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>
        </div>
      </StyleAire>
    </Fragment>
  );
}

export default TableCompatibilidaRepuesto;

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
