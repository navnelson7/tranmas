import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSubscription, useMutation } from "@apollo/client";
import { listenContratos } from "../../../../graphql/Suscription";
import { deleteContratoEmpleadoById } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function TableCarwash() {
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
  const { id } = useParams();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const { data, loading, error } = useSubscription(listenContratos, {
    variables: {
      id,
    },
  });
  const [deleteContrato] = useMutation(deleteContratoEmpleadoById);

  const submitDeleteContrato = (idSelected) => {
    deleteContrato({
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
          <Link to="/registro/contrato/empleado" variant="danger">
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre de empleado</th>
                <th>Descripción</th>
                <th>Fecha de registro</th>
                <th>Fecha de contrato</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.registro_contratos.map((contrato, index) => {
                return (
                  <tr key={contrato.id}>
                    <td>{index + 1}</td>
                    <td>
                      {contrato.empleado.nombres +
                        " " +
                        contrato.empleado.apellidos}
                    </td>
                    <td>{contrato.descripcion}</td>
                    <td>
                      {new Date(contrato.fecha_de_registro).getDate() + 1} de{" "}
                      {meses[new Date(contrato.fecha_de_registro).getMonth()]}{" "}
                      {new Date(contrato.fecha_de_registro).getFullYear()}
                    </td>
                    <td>
                      {new Date(contrato.fecha_contrato).getDate() + 1} de{" "}
                      {meses[new Date(contrato.fecha_contrato).getMonth()]}{" "}
                      {new Date(contrato.fecha_contrato).getFullYear()}
                    </td>
                    <td>
                      <Button variant="info">
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button
                        variant="danger"
                        title="Eliminar"
                        className="ml-2"
                        onClick={() => {
                          submitDeleteContrato(contrato.id);
                        }}
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
