import React,{Fragment, useEffect, useState} from 'react';
import { Container, Table } from "react-bootstrap";

import {useSubscription} from "@apollo/client";
import {historicoTaller} from "../../../graphql/Suscription";

import BusquedaFechas from "../Reportes/BusquedaFechas";

const HistoricoTaller = (fechaFin,fechaInicio) => {

    const [listadoHistorico, setListadoHistorico] = useState([]);
    const {loading, data} = useSubscription(
        historicoTaller,
        {
            variables:{
                fechafin:fechaFin,
                fechainicio:fechaInicio
            }
        }
        );

    useEffect(() =>{
        if(loading){
            return;
        }
        if(data){
            setListadoHistorico(data.registro_taller);
        }
        console.log(listadoHistorico);
    }, 1[data, loading]);
    return ( 
        <Fragment>
            <Container>
                <div className="box-left">

                    <h1>HISTORICO TALLER</h1>
                    <BusquedaFechas 
                        fechaFin={fechaFin}
                        fechaInicio={fechaInicio}
                    />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th># de Equipo</th>
                                <th>Mecanico</th>
                                <th>Motorista</th>
                                <th>Repuesto</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </Container>
        </Fragment>
     );
}
 
export default HistoricoTaller;