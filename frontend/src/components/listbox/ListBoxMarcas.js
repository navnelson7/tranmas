import React, { useState } from 'react';
import {InputGroup, FormControl, Col} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getMarcas } from '../../graphql/Queries'


const ListMarcas = ({changeMarca}) => {

    const [marcas, setMarcas] = useState([{
        id: '',
        marca: ''
    }]);

    const {
        id,
        marca
    } = marcas 

    const {data, loading, error} = useQuery(getMarcas);
    
    
    const actualizarMarcas = (data) => {
        setMarcas(data.proveerdores);
    }


    if (loading) return 'Loading...';   if (error) return `Error! ${error.message}`;
    return (
        <Col sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Marca</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_marca" value={id} onChange={changeMarca}>
                    <option>Seleccione una Marca</option>
                    { data.marcas.lenght === 0
                                ? (<option id="">No hay data</option>)
                                :  data.marcas.map(marca =>(
                                    <option key={marca.id} value={marca.id}>{marca.marca}</option>
                                ))
                            }
                </FormControl>
                </InputGroup>
        </Col>
    );
}
export default ListMarcas;