import React, { useState } from 'react';
import {InputGroup, FormControl, Col} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { getUnidadMedida } from '../../graphql/Queries'


const ListBoxUnidadMedida = ({changeMedida}) => {

    const [medidas, setMedidas] = useState([{
        id: '',
        unidad_de_medida: ''
    }]);

    const {
        id,
        unidad_de_medida
    } = medidas

    const {data, loading, error} = useQuery(getUnidadMedida);
    
    
    const actualizarMedidas = (data) => {
        setMedidas(data.unidades_de_medida);
    }

    if (loading) return 'Loading...';   if (error) return `Error! ${error.message}`;
    return (
        <Col sm={4}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Unidad Medida</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_unidad_medida" value={id} onChange={changeMedida}>
                    <option>Seleccione una Medida</option>
                    { data.unidades_de_medida.lenght === 0
                                ? (<option id="">No hay data</option>)
                                :  data.unidades_de_medida.map(medida =>(
                                    <option key={medida.id} value={medida.id}>{medida.unidad_de_medida}</option>
                                ))
                            }
                </FormControl>
                </InputGroup>
        </Col>
    );
}
export default ListBoxUnidadMedida;