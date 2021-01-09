import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {Form, InputGroup, FormControl, Col, Row, Button} from 'react-bootstrap'
const FormularioFaltas = ({Id,Nombre}) => {

    const [falta, setFalta] = useState({
        id_empleado: '',
        descripcion_de_falta:'',
        id_tipo_falta:''
    });

    const {
        id_empleado,
        descripcion_de_falta,
        id_tipo_falta
    } = falta;

    return ( 
        <Fragment>  
            <h1>Agregar detalle de Falta a: {Nombre}</h1>
            <Form>
                <Row>
                    <Col sm={12}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic addon1">Tipo de Falta</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="select" name="tipo_de_falta">
                                <option value=""></option>
                                <option value="1">Llegada Tardia</option>
                            </FormControl>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic addon1">Descripcion de la Falta</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                as="textarea"
                                name="descripcion"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Button variant="danger"  value={Id}>Guardar Falta <FontAwesomeIcon icon={faAddressCard}/></Button>
            </Form>
            
        </Fragment>
     );
}
 
export default FormularioFaltas;