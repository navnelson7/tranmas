import React, {Fragment} from 'react';
import {Table, Container} from 'react-bootstrap';

import {useQuery} from '@apollo/client';
import {getFaltaPorIdEmpleado} from '../../graphql/Queries';
const TablaListaFaltas = () => {
    return (
        <Fragment>
            <h1>Aqui debe ir la tabla</h1>
        </Fragment>
    );
}

export default TablaListaFaltas;