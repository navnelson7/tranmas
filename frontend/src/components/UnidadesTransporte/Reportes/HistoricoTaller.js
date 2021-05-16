import React,{Fragment} from 'react';
import { Container, Table } from "react-bootstrap";

import {useSubscription} from "@apollo/client";
import {historicoTaller} from "../../../graphql/Suscription";

const HistoricoTaller = () => {
    const {loading, data, error} = useSubscription(historicoTaller);
    return ( 
        <Fragment>
            <Container>
                <div className="box-left">
                    
                    <h1>HISTORICO TALLER</h1>
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