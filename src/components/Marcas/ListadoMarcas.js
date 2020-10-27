import { useQuery } from '@apollo/react-hooks';
import React, { Fragment, useReducer, useEffect, useContext } from 'react';
import {Container,Table,} from 'react-bootstrap';
import Marca from './Marca';
import MarcasContext from '../../context/Marcas/marcasContext';
import marcasReducer from '../../context/Marcas/marcasReducer';

import { OBTENER_MARCAS }  from '../../types/index';



import {getMarcas} from '../../graphql/Queries'

const ListadoMarcas = () => {
    const {data, loading, error} = useQuery(getMarcas);

    const marcasContext = useContext(MarcasContext);
    const {marcas} = marcasContext;

    const [state, dispatch] = useReducer(marcasReducer);

    useEffect(() => {
        if(data === undefined){
            dispatch({
                type: OBTENER_MARCAS,
                payload: []
            })
        }
        if(data){
            dispatch({
                type: OBTENER_MARCAS,
                payload: data.marcas
            })
        }
        //eslint-disable-next-line
    },[data]);

    if(loading)return (<p>Cargando</p>)
    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>LISTADO DE MARCAS</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Nombre de la Marca</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.marcas.lenght === 0
                                ? (<tr><td>No hay Marcas</td></tr>)
                                : state.marcas.map(marca =>(
                                    <tr key={marca.id}>
                                        <Marca 
                                            marca={marca}
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

export default ListadoMarcas;