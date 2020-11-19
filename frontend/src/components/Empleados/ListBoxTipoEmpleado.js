import React, { useState } from 'react';
import { InputGroup, FormControl, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client'
import { getEstadoEmpleados } from '../../graphql/Queries';
const ListBoxTipoEmpleados = ({changeEstadoEmpleado}) => {
    const [estadosEmpleados] = useState([{
        id: '',
        estados_de_empleados: ''
    }]);

    const {
        id,
        estados_de_empleados
    } = estadosEmpleados

    const { data, loading, error } = useQuery(getEstadoEmpleados);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(estados_de_empleados)
    return (
        <Col sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Estado</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_estado" value={id} onChange={changeEstadoEmpleado}>
                    <option>Selecciona un Estado</option>
                    {data.estados_de_empleados.lenght === 0
                        ? (<option id="">no hay data</option>)
                        : data.estados_de_empleados.map(estado =>(
                        <option key={estado.id} value={estado.id}>{estado.estado_empleado}</option>
                        ))
                    }
                </FormControl>
            </InputGroup>
        </Col>
    );
}

export default ListBoxTipoEmpleados;