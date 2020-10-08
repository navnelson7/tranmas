import React, { Fragment, useState } from 'react';
import Empleado from './Empleado';

import 'bootstrap/dist/css/bootstrap.css';
import Barra from '../../layouts/Barra';
import { Container,Table, Button } from 'react-bootstrap';

const empleados = [
    {nombres: 'Juan Perez'},
    {nombres: 'Miguel Perez'}
]

const ListadoEmpleados = () => {
    return ( 
        <Fragment>
            <Barra />
            <Container>
                <h1>Listado de Epleados</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombres</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map(empleado =>(
                            <tr>
                                <Empleado 
                                empleado={empleado}
                            />
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </Fragment>
     );
}
 
export default ListadoEmpleados;