import React, { Fragment } from 'react';
import { Container, Table } from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {getMedidas} from '../../graphql/Queries'

import Medida from './Medida';
import MedidasContext from '../../context/Medidas/medidasContext';
import medidasReducer from '../../context/Medidas/medidasReducer';
import { useContext } from 'react';
import { useReducer } from 'react';

import {OBTENER_MEDIDAS} from '../../types';

const ListadoMedidas = () => {
    const {loading,data,error} = useQuery(getMedidas);

    const medidasContext = useContext(MedidasContext);

    const [state, dispatch] = useReducer(medidasReducer);
    
    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>Listados de Unidades de Medida</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Identificador</th>
                                <th>Unidad de Medida</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </Container>
        </Fragment>
    );
}

export default ListadoMedidas;