import React, { Fragment, useState, useEffect } from "react";
import Empleado from "./Empleado";

import { useQuery } from "@apollo/client";
import { getEmpleados } from "../../graphql/Queries";

import "bootstrap/dist/css/bootstrap.css";
import { Container, Table } from "react-bootstrap";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button} from 'react-bootstrap';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";
import {updateActivoEmpleado} from "../../graphql/Mutations"

function ListadoEmpleados() {
  const [inactivar] = useMutation(updateActivoEmpleado)  

  const [listadoEmpleados, setListadoEmpleados] = useState([]);
  const { loading, data, error,refetch } = useQuery(getEmpleados);
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
  
  const eliminarEmpleado = (id)=> {
    inactivar({ variables: {id: id, activo: false}}).then(res => {
      if(res.data){
      refetch()
      }
      })
  }

  

  return (
    <Fragment>
      <Container>
        <div className="box-left">
          <h1>Listado de Epleados</h1>
          <Link to={`/registro`} variant="danger"><Button variant="info"><FontAwesomeIcon icon={faUserEdit}/> Nuevo Empleado</Button></Link>
          <Link to={`/registro-faltas`} variant="danger"><Button variant="info"><FontAwesomeIcon icon={faUserEdit}/> Registro Falta</Button></Link>
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
