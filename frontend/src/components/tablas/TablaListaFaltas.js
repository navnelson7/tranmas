import React, {Fragment, useEffect, useState} from 'react';
import {Table, Container} from 'react-bootstrap';
import Falta from '../Empleados/Falta';

import {useQuery} from '@apollo/client';
import {getFaltaPorIdEmpleado} from '../../graphql/Queries';
const TablaListaFaltas = ({Id}) => {
    const [listadoFaltas, setListadoFaltas] = useState([]);
    const {data, loading} = useQuery(getFaltaPorIdEmpleado);
    useEffect(() =>{
        if(loading){
            return
        }
        if(data){
            setListadoFaltas(data);
        }
        console.log(data)
        //eslint-disable-next-line
    },[loading,data]);
    return (
        <Fragment>
            <br/>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Empleado</th>
                        <th>Tipo de Falta</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {listadoFaltas.length === 0
                    ? (<tr><td>No hay faltas</td></tr>)
                    : listadoFaltas.map(falta =>(
                        <tr key={falta.id}>
                            <Falta 
                                falta={falta}
                            />
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </Fragment>
    );
}

export default TablaListaFaltas;