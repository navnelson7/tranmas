import React from 'react';
import {Card, Form, FormControl, InputGroup, Row, Col} from 'react-bootstrap';
const Registro = () => {
    return ( 
        <div className="container">
            <Form>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Codigo</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="Codigo de Empleado"
                                        arial-label="codigo"
                                        arial-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>

                            <Col  sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Id</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="Id de Sistema"
                                        aria-label="id"
                                        arial-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Nombres</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="Nombres"
                                        arial-label="Nombres"
                                        arial-describedby="basic -addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Apellidos</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="Apellidos"
                                        arial-label="Apellidos"
                                        arial-describedby="basic -addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Edad</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        aria-label="Edad"
                                        arial-aria-describedby="basic -addon1"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text>Sexo</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select">
                                        <option>Femenino</option>
                                        <option>Masculino</option>
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col sm={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Telefono</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="Telefono"
                                        aria-label="Telefono"
                                        arial-describedby="basic -addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Form>
        </div>
     );
}
 
export default Registro;