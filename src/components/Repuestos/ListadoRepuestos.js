import React, { Fragment, useContext, useEffect, useReducer } from 'react';

import { useQuery } from '@apollo/client';
import { getRepuestos } from '../../graphql/Queries'

import Repuesto from './Repuesto';
import { Table, Container } from 'react-bootstrap';
import repuestoContext from '../../context/repuestos/repuestosContext';
import RepuestosReducer from '../../context/repuestos/repuestosReducer';

import { OBTENER_REPUESTOS } from '../../types/index';


const ListadoRepuestos = () => {


    const { data, loading, error } = useQuery(getRepuestos);

    const repuestosContext = useContext(repuestoContext);
    const { repuestos } = repuestosContext;

    const [state, dispatch] = useReducer(RepuestosReducer, []);

    useEffect(() => {
        if (data) {
            dispatch({
                type: OBTENER_REPUESTOS,
                payload: data.repuestos
            })

        }
        if (data === undefined) {
            dispatch({
                type: OBTENER_REPUESTOS,
                payload: []
            })
        }
        //eslint-disable-next-line
    }, [data]);
    if (loading) return (<p>cargando</p>)
    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>LISTADO DE REPUESTO</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Marca</th>
                                <th>Cantidad</th>
                                <th>U. Medida</th>
                                <th>Precio</th>
                                <th>Proveedor</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>

                            {state.repuestos.lenght === 0
                                ? (<tr><td>No hay repuestos</td></tr>)
                                : state.repuestos.map(repuesto => (
                                    <tr key={repuesto.id}>
                                        <Repuesto
                                            repuesto={repuesto}
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

export default ListadoRepuestos;