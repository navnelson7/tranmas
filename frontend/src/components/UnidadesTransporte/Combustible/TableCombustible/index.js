import React, { Fragment, useState } from "react";
import { Table, Button, Col, InputGroup, FormControl } from "react-bootstrap";
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
  const [Fecha, setFecha] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate()
  );
  const { idUnidadTransporte } = useParams();
  const { loading, data, error } = useSubscription(listenCombustibleinTable, {
    variables: {
      fecha: Fecha,
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
      <br />
      <br />
      <div className="d-flex justify-content-end">
        <Col sm={4}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Fecha</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Fecha"
              name="fecha"
              type="date"
              autoComplete="off"
              value={Fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </InputGroup>
        </Col>
      </div>
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
              {data.registro_combustible.map((combustible, index) => {
                return (
                  <tr key={combustible.id}>
                    <td>{index + 1}</td>
                    <td>{combustible.galones_servidos}</td>
                    <td>{combustible.kilometraje_actual}</td>
                    <td>
                      {combustible.empleado_motorista.nombres}{" "}
                      {combustible.empleado_motorista.apellidos}
                    </td>
                    <td>{combustible.comentarios}</td>
                    <td>
                      {new Date(combustible.fecha).getDate() + 1} de{" "}
                      {meses[new Date(combustible.fecha).getMonth()]}{" "}
                      {new Date(combustible.fecha).getFullYear()}
                    </td>
                    <td>
                      <Link
                        to={`/editar/combustible/${combustible.id}/${idUnidadTransporte}`}
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        title="Eliminar"
                        onClick={() => submitDeleteCombustible(combustible.id)}
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
