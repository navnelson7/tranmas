import React, { useState } from 'react';

import { InputGroup, Col, FormControl } from 'react-bootstrap';
import { useQuery } from '@apollo/client';

import { getMarcas } from '../../graphql/Queries';

const ListBoxMarcas = () => {

    const { data, loading, error } = useQuery(getMarcas);

    const [marcas, setMarcas] = useState([]);
    const actualizarMarcas = (data) => {
        setMarcas(data);
    }
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <Col sm={6}>
            <InputGroup className="mb-3"> 
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Marca</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_marca">
                    <option>Selecciones una Marca</option>
                    {data.marcas.lenght === 0
                        ? (<option>Sin data</option>)
                        : data.marcas.map (marca =>(
                        <option key={marca.id} value={marca.id}>{marca.marca}</option>
                        ))
                    }
                </FormControl>
            </InputGroup>
        </Col>
    );
}

export default ListBoxMarcas;