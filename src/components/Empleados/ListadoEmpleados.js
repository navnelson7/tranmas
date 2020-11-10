import React, { Fragment, useState, useContext, useEffect } from 'react';
import Empleado from './Empleado';

import EmpleadosContext from '../../context/empleados/empleadosContext';

import {useQuery} from '@apollo/client';
import {getEmpleados} from '../../graphql/Queries'; 

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Table } from 'react-bootstrap';


function ListadoEmpleados() {

    const [listadoEmpleados, setListadoEmpleados] = useState([]);
    const {loading, data, error } = useQuery(getEmpleados);

    useEffect(()=>{
        if(loading){
            return
        }
        if(data){
            setListadoEmpleados(data.empleados);
        }
        console.log(listadoEmpleados);
    },[data]);

    if (listadoEmpleados.length === 0) return null;

    

    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>Listado de Epleados</h1>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Nombres</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listadoEmpleados.length === 0
                                ? (<tr><td>No hay Empleados registrados </td></tr>)
                                : listadoEmpleados.map(empleado => (
                                    <tr key={empleado.id}>
                                        <Empleado
                                            empleado={empleado}
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

export default ListadoEmpleados;