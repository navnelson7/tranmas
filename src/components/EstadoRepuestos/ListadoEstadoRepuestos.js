import React, { Fragment } from 'react';
import { Container, Table } from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {getEstadoRepuestos} from '../../graphql/Queries'
import { useState } from 'react';
import { useEffect } from 'react';
import Estado from './Estado';

const ListaEstadoRepuestos = () => {

    const [estados, setEstados] = useState([]);
    const {loading, data, error} = useQuery(getEstadoRepuestos);

    useEffect(()=>{
        if(loading){
            return
        }
        if(data){
            setEstados(data.estado_repuestos_stock);
            console.log(estados);
        }
    });

    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>Listado de Estados para Repuestos</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Estados para Repuestos</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estados.length ===0
                               ? (<tr><td>No haya Estados</td></tr>)
                               : estados.map(estado => (
                                   <tr key={estado.id}>
                                       <Estado 
                                        estado={estado}
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

export default ListaEstadoRepuestos;