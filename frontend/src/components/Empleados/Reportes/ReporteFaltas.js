import { useSubscription } from '@apollo/client';
import React, { useEffect } from 'react';
import { Fragment, useState } from 'react';
import {Container, Form, Row, InputGroup, FormControl, Col, Table} from 'react-bootstrap';
import {faltasEmpleado} from "../../../graphql/Suscription";
const ReporteFaltas = () => {
    
    const {loading, data} = useSubscription(faltasEmpleado,{
        variables: {
            //id_empleado: id_empleado,
            
        },
    });

    useEffect(() => {
        if(loading){
            return
        }
        
    })
    return ( 
        <Fragment>
            <Container>
                <div className="box-left">
                    
                    <h2>Reporte de Faltas de: </h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Tipo de Falta</th>
                                    <th>Descripcion de la Falta</th>
                                </tr>
                            </thead>
                        </Table>
                </div>
            </Container>
        </Fragment>
     );
}
 
export default ReporteFaltas;