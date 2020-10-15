import React, { useEffect, useState } from 'react';
import {InputGroup, FormControl, Col} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getProveedores } from '../../graphql/Queries'


const ListBoxProveedores = () => {
    const {data, loading, error} = useQuery(getProveedores);
    const [proveerdores, setProveedores] = useState([]);
    const actualizarProveedores = (data) => {
        setProveedores(data.proveerdores);
    }


    if (loading) return 'Loading...';   if (error) return `Error! ${error.message}`;
    console.log("data->",data.proveedores);
    return (
        <Col sm={6}>
            <InputGroup.Prepend className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Proveedor</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_proveedor">
                    <option id={3}>"Seleccione un proveedor</option>
                    { data.proveedores.lenght === 0
                                ? (<option id="0">No hay data</option>)
                                :  data.proveedores.map(proveedor =>(
                                    <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre_proveedor}</option>
                                ))
                            }
                </FormControl>
                </InputGroup.Prepend>
        </Col>
    );
}
export default ListBoxProveedores;