import React, { Fragment, useState } from 'react';
import Empleado from './Empleado';

import 'bootstrap/dist/css/bootstrap.css';
import Barra from '../../layouts/Barra';
import { Container,Table, Button, Alert } from 'react-bootstrap';

const empleados = [
    {id:1, nombres:"Juan Perez"},
    {id:2, nombres:"Veronica Arteaga"}
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
                        { empleados.length === 0
                            ? (<tr><td>No hay Empleados registrados </td></tr>)
                            : empleados.map(empleado =>(
                                <tr  key={empleado.id}>
                                    <Empleado 
                                    empleado={empleado}
                                />
                                </tr>
                            ))
                            
                            
                        }
                    </tbody>
                </Table>
            </Container>
        </Fragment>
     );
}
 
export default ListadoEmpleados;