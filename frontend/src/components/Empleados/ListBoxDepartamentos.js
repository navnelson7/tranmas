import React, { useState } from 'react';
import { InputGroup, FormControl, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getDepartamentos } from '../../graphql/Queries';
const ListBoxDepartamentos = ({ changeDepartamentos }) => {
    const [deptos] = useState([{
        id: '',
        departamentos: ''
    }]);

    const {
        id,
    } = deptos

    const {data, loading, error} = useQuery(getDepartamentos);
    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;

    return (
        <Col sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Departamento</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_departamento" value={id} onChange={changeDepartamentos}>
                    <option>Seleccione un estado</option>
                    { data.departamentos.lenght === 0
                        ? (<option id="">no hya data</option>)
                        : data.departamentos.map(departamento =>(
                        <option key={departamento.id} value={departamento.id}>{departamento.departamento}</option>
                        ))
                    }
                </FormControl>
            </InputGroup>
        </Col>
    );
}

export default ListBoxDepartamentos;