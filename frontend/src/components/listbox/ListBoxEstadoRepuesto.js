import React, { useState } from 'react';
import {InputGroup, FormControl, Col} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getEstadoRepuestos } from '../../graphql/Queries'


const ListBoxEstadoRepuestos = ({changeEstadoRepuesto}) => {

    const [estados] = useState([{
        id: '',
        estado_repuestos: ''
    }]);

    const {
        id
    } = estados

    const {data, loading, error} = useQuery(getEstadoRepuestos);
    
    
   


    if (loading) return 'Loading...';   if (error) return `Error! ${error.message}`;
    return (
        <Col sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Estado de Repuesto</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_estado" value={id} onChange={changeEstadoRepuesto}>
                    <option>Seleccione un Estado</option>
                    { data.estado_repuestos_stock.lenght === 0
                                ? (<option id="">No hay data</option>)
                                :  data.estado_repuestos_stock.map(estado =>(
                                    <option key={estado.id} value={estado.id}>{estado.estado_repuestos}</option>
                                ))
                            }
                </FormControl>
                </InputGroup>
        </Col>
    );
}
export default ListBoxEstadoRepuestos;