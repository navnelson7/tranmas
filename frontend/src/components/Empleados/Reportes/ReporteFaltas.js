import { useSubscription } from '@apollo/client';
import React, { useEffect } from 'react';
import { Fragment, useState } from 'react';
import {Container, Table} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';
import {faltasEmpleado} from "../../../graphql/Suscription";
import FaltaReporte from "../FaltaReporte";
import {useParams} from "react-router-dom";
const ReporteFaltas = () => {
    
    const {id_empleado} = useParams();
    const [nombres, setNombres] = useState();
    const [listadoFaltas, setListadoFaltas] = useState([]);
    const {loading, data} = useSubscription(faltasEmpleado,{
        variables: {
            id_empleado: id_empleado,
        },
    });

    useEffect(() => {
        if(loading){
            return
        }
        let listadoFaltas = {};
        listadoFaltas = data === undefined ? {} : data.faltas_motoristas;
        if(data){
            setListadoFaltas(data);
            console.log(data.faltas_motoristas.id_empleado);
        }
    },[loading, data]);
    if(loading)
    return(
        <div className="center-box mt-5">
            <div className="spinter-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
    
    return ( 
        <Fragment>
            <Container>
                <div className="box-left">
                    
                    <h2>Reporte de Faltas de: {} </h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Empleado</th>
                                    <th>Tipo de Falta</th>
                                    <th>Descripcion de la Falta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listadoFaltas.length === 0
                                    ? (<tr><td>No hay registros</td></tr>)
                                : listadoFaltas.faltas_motoristas.map(falta=>(
                                    <tr key = {uuidv4()}>
                                        <FaltaReporte 
                                            falta={falta}
                                        />
                                    </tr>
                                )
                                )
                                }
                            </tbody>
                        </Table>
                </div>
            </Container>
        </Fragment>
     );
}
 
export default ReporteFaltas;