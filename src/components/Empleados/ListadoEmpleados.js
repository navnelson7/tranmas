import React, { Fragment, useState, useContext, useEffect } from 'react';
import Empleado from './Empleado';

import EmpleadosContext from '../../context/empleados/empleadosContext';

import {useQuery} from '@apollo/client';
import {getEmpleados} from '../../graphql/Queries'; 

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Table } from 'react-bootstrap';


function ListadoEmpleados() {

    const empleadosContext = useContext(EmpleadosContext);
    const {empleados, obtenerEmpleados} = empleadosContext;

    const {loadind, data, error } = useQuery(getEmpleados);

    useEffect(()=>{
        obtenerEmpleados();
    },[]);

    if (empleados.length === 0) return null;

    

    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>Listado de Epleados</h1>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Nombres</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empleados.length === 0
                                ? (<tr><td>No hay Empleados registrados </td></tr>)
                                : empleados.map(empleado => (
                                    <tr key={empleado.id}>
                                        <Empleado
                                            empleado={empleado}
                                        />
                                    </tr>
                                ))


                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Fragment>
    );
}

export default ListadoEmpleados;