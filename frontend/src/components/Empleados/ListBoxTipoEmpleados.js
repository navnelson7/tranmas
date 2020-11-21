import React, { useState } from 'react';
import { InputGroup, FormControl, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getTipoEmpleados } from '../../graphql/Queries';
const ListBoxTipoEmpleados = ({changeTipoEmleado}) => {
    const [tipoEmpleado] = useState([{
        id: '',
        tipo_empleado: ''
    }]);

    const {
        id,
        tipo_empleado
    } = tipoEmpleado;

    const { data, loading, error } = useQuery(getTipoEmpleados);
    if (loading) return 'Loading ...';
    if (error) return `Error! ${error.message}`;
    return (
        <Col sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Tipo Empleado</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_tipo_empleado" onChange={changeTipoEmleado}>
                    <option>Seleccione un tipo de empleado</option>
                    {data.tipos_empleados === 0
                        ? (<option id="">No hay data</option>)
                        : data.tipos_empleados.map(tipo =>(
                        <option key={tipo.id} value={tipo.id}>{tipo.tipo_empleado}</option>
                        ))
                    }
                </FormControl>
            </InputGroup>
        </Col>
    );
}

export default ListBoxTipoEmpleados;