import React, { Fragment,  useEffect,  useState } from 'react';

import Repuesto from './Repuesto';
import { Table, Container } from 'react-bootstrap';



import { useQuery } from '@apollo/client';
import { getRepuestos } from '../../graphql/Queries'

const ListadoRepuestos = () => {

    const [listadoRepuestos, setListadoRepuestos] = useState([]);
    
    const { data, loading, error } = useQuery(getRepuestos);




    useEffect(() =>{
        if(loading){
            return
        }
        if(data){
            setListadoRepuestos(data.repuestos);
        }
        console.log(listadoRepuestos);
    })
    if (loading) return (<p>cargando</p>)
    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>LISTADO DE REPUESTO</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Marca</th>
                                <th>Cantidad</th>
                                <th>U. Medida</th>
                                <th>Precio</th>
                                <th>Proveedor</th>
                                <th>Estado</th>
                                <th colSpan="3">acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {listadoRepuestos.lenght === 0
                                ? (<tr><td>No hay repuestos</td></tr>)
                                : listadoRepuestos.map(repuesto => (
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