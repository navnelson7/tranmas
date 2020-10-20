import React, { useEffect, useState } from 'react';
import {InputGroup, FormControl, Col} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getEstadoRepuestos, getRepuestos } from '../../graphql/Queries'


const ListBoxEstadoRepuesto = ({changeEstadoRepuesto}) => {
    
    const [estadoRepuesto, CambiarEstadoRepuestos] = useState({
        id:'',
        estado_repuesto:''
    });

    const {
        id,
        estado_repuesto
    } = estadoRepuesto

    const {data, loading, error} = useQuery(getEstadoRepuestos);
    const cambiarState = (data) => {
        CambiarEstadoRepuestos(data.estado_repuestos_stock);
    }


    if (loading) return 'Loading...';   if (error) return `Error! ${error.message}`;
    
    return (
        <Col sm={6}>
            <InputGroup.Prepend className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Estado Repuesto</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_estado" value={id} onChange={changeEstadoRepuesto} >
                    <option>selecciona una opció</option>
                    { data.estado_repuestos_stock.lenght === 0
                                ? (<option id="0">Sin Data</option>)
                                :  data.estado_repuestos_stock.map(estado =>(
                                    <option key={estado.id} value={estado.id}>{estado.estado_repuestos}</option>
                                ))
                            }
                </FormControl>
                </InputGroup.Prepend>
        </Col>
    );
}
export default ListBoxEstadoRepuesto;