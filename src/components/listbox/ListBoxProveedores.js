import React, { useState } from 'react';
import {InputGroup, FormControl, Col} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getProveedores } from '../../graphql/Queries'


const ListBoxProveedores = ({changeProveedor}) => {

    const [proveedores, setProveedores] = useState([{
        id: '',
        nombre_proveedor: ''
    }]);

    const {
        id,
        nombre_proveedor
    } = proveedores 

    const {data, loading, error} = useQuery(getProveedores);
    
    
    const actualizarProveedores = (data) => {
        setProveedores(data.proveerdores);
    }


    if (loading) return 'Loading...';   if (error) return `Error! ${error.message}`;
    return (
        <Col sm={6}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Proveedor</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_proveedor" value={id} onChange={changeProveedor}>
                    <option>Seleccione un proveedor</option>
                    { data.proveedores.lenght === 0
                                ? (<option id="">No hay data</option>)
                                :  data.proveedores.map(proveedor =>(
                                    <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre_proveedor}</option>
                                ))
                            }
                </FormControl>
                </InputGroup>
        </Col>
    );
}
export default ListBoxProveedores;