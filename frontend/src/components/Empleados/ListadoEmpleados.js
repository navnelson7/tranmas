import React, { Fragment, useState, useEffect } from "react";
import Empleado from "./Empleado";

import { useQuery } from "@apollo/client";
import { getEmpleados } from "../../graphql/Queries";

import "bootstrap/dist/css/bootstrap.css";
import { Container, Table } from "react-bootstrap";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button} from 'react-bootstrap';
import { faUserEdit,faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function ListadoEmpleados() {
  const [listadoEmpleados, setListadoEmpleados] = useState([]);
  const { loading, data, error } = useQuery(getEmpleados);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (data) {
      setListadoEmpleados(data.empleados);
    }
    console.log(data);
  }, [data,loading]);

  if (listadoEmpleados.length === 0) return null;
  if (error) return <p align="center">{error.message}</p>;

  return (
    <Fragment>
      <Container>
        <div className="box-left">
          <h1>Listado de Epleados</h1>
          <Link to={`/registro`} variant="danger"><Button variant="info"><FontAwesomeIcon icon={faUserEdit}/> Nuevo Empleado</Button></Link>
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
              {listadoEmpleados.length === 0 ? (
                <tr>
                  <td>No hay Empleados registrados </td>
                </tr>
              ) : (
                listadoEmpleados.map((empleado) => (
                  <tr key={empleado.id}>
                    <Empleado empleado={empleado} />
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