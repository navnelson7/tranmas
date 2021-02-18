import React, {Fragment, useEffect, useState} from 'react';
import {Table, Container} from 'react-bootstrap';
import Falta from '../Empleados/Falta';

import {useMutation, useQuery} from '@apollo/client';
import {getFaltaPorIdEmpleado} from '../../graphql/Queries';
import {deleteFalta} from '../../graphql/Mutations'
const TablaListaFaltas = ({Id,id}) => {
    const [listadoFaltas, setListadoFaltas] = useState([]);
    const {data, loading, refetch} = useQuery(getFaltaPorIdEmpleado,{
        variables: {
            id_empleado:Id,
        },
    });
    const [deleteFal] = useMutation(deleteFalta);
    useEffect(() =>{
        if(loading){
            return
        }
        if(data){
            setListadoFaltas(data.faltas_motoristas);
        }
        //eslint-disable-next-line
    },[loading,data]);

    const eliminarFalta = (id) => {
        deleteFal({
            variables:{id}
        }).then((res) => {
            if(res.data){
                refetch()
                setTimeout(() => {
                }, 2000);
            }
        })
    }
    
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
                                eliminarFalta={eliminarFalta}
                                id={falta.id}
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