import React, { Fragment } from 'react';
import Repuesto from './Repuesto';
import {Row, Col, Table, Container} from 'react-bootstrap';
import empleadosContext from '../../context/empleados/empleadosContext';

const repuestos = [
    {id: 1, nombre: "Llantas Michellin"},
    {id: 2, nombre: "Aceite Castrol"}
]

const ListadoRepuestos = () => {
    return ( 
        <Fragment>
            <Container>
                <h1>LISTADO DE REPUESTO</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombres</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            { repuestos.lenght === 0
                                ? (<tr><td>No hay repuestos</td></tr>)
                                : repuestos.map(repuesto =>(
                                    <tr key={repuesto.id}>
                                        <Repuesto 
                                            repuesto={repuesto}
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

export default ListadoRepuestos;