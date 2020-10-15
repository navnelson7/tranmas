import React, { useState } from 'react';
import { InputGroup, FormControl, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getUnidadMedida } from '../../graphql/Queries';

const ListBoxUnidadMedida = () => {
    const {data, loading, error} = useQuery(getUnidadMedida);
    const [unidadesdemedida, setUnidadMedida] = useState([]);
    const actualizarUnidadesMedida = (data) =>{
        setUnidadMedida(data);
    }

    if(loading) return 'Loading... '; if(error) return `Error! ${error.message}`;
    console.log(data);
    
    return ( 
        <Col sm={4}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Unidad de Medida</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_unidad_medida">
                    <option>Selecciona una medida</option>
                    {data.unidades_de_medida.lenght === 0
                        ? (<option>Sin data</option>)
                        : data.unidades_de_medida.map(unidad =>(
                            <option key={unidad.id} value={unidad.id}>{unidad.unidad_de_medida}</option>  
                        ))
                    }
                </FormControl>
            </InputGroup>
        </Col>
     );
}
 
export default ListBoxUnidadMedida;