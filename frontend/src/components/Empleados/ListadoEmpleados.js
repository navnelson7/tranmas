import React, { Fragment, useState } from "react";
import Empleado from "./Empleado";

import { useSubscription, useMutation } from "@apollo/client";
import { getEmpleados } from "../../graphql/Queries";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { updateActivoEmpleado } from "../../graphql/Mutations";
import { ToastComponent } from "../Toast";

function ListadoEmpleados() {
  const [inactivar] = useMutation(updateActivoEmpleado);

  const { loading, data, error } = useSubscription(getEmpleados);

  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");

  //DESACTIVA A UN EMPLEADO
  const eliminarEmpleado = (id) => {
    inactivar({ variables: { id: id, activo: false } })
      .then((res) => {
        //ELIMINARLO DE LA VISTA
        if (res.data) {
          setTextAlert("Eliminado correctamente");
          setIconType("success");
          setshowAlert(true);
          setTimeout(() => {
            setshowAlert(false);
          }, 2000);
        }
      })
      .catch(() => {
        setTextAlert("Ocurrio un error");
        setIconType("error");
        setshowAlert(true);
        setTimeout(() => {
          setshowAlert(false);
        }, 2000);
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
  if (error) return <p align="center">{`Error! ${error.message}`}</p>;
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <Container>
        <div className="box-left">
          <h1>Listado de Empleados</h1>
          <Link to={`/registro`} variant="danger">
            <Button variant="info">
              <FontAwesomeIcon icon={faUserEdit} /> Nuevo Empleado
            </Button>
          </Link>
          <Link to={`/registro-faltas`} variant="danger">
            <Button variant="info">
              <FontAwesomeIcon icon={faUserEdit} /> Registro Falta
            </Button>
          </Link>
          <Link to={`/registro-refrenda`} variant="danger">
            <Button variant="info">
              <FontAwesomeIcon icon={faUserEdit} /> Refrenda Licencia
            </Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>DUI</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {data.empleados.length === 0 ? (
                <tr>
                  <td>No hay Empleados registrados </td>
                </tr>
              ) : (
                data.empleados.map((empleado) => (
                  <tr key={empleado.id}>
                    <Empleado
                      empleado={empleado}
                      eliminarEmpleado={eliminarEmpleado}
                      id={empleado.id}
                    />
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </Fragment>
  );
}

export default ListadoEmpleados;
