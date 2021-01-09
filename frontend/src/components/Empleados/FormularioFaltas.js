import React from 'react';
import { Fragment } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {Form, InputGroup, FormControl, Col, Row, Button} from 'react-bootstrap'
const FormularioFaltas = (encontrado) => {
    return ( 
        <Fragment>  

            <Form>
                <Row>
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic addon1">Fecha de Falta</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                type="date"
                                name="fecha_falta"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={6}>
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
                <Button variant="danger"  value={encontrado.id}>Guardar Falta <FontAwesomeIcon icon={faAddressCard}/></Button>
            </Form>
            
        </Fragment>
     );
}
 
export default FormularioFaltas;