import React, { Fragment } from 'react';
import { Container, Row ,Form, FormControl, Col, InputGroup, Card } from 'react-bootstrap';
const FormRepuestos = () => {
    return (
        <Fragment>
            <Container>
                <h1>Formulario para Ingreso de Repuestos</h1>
                <Form>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={12}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Codigo Repuesto</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            placeholder="0000000000"
                                            aria-label="codigo"
                                            aria-describedby="codigo"
                                            name="codigo"
                                        />                               
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                placeholder="Nombre del Repuesto"
                                                aria-label="nombre"
                                                aria-describedby="nombre"
                                                name="nombre"
                                            />
                                    </InputGroup>
                                </Col>
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Cantidad</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="00"
                                            aria-label="cantidad"
                                            aria-describedby="cantidad"
                                            name="cantidad"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Precio</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="0.00"
                                            aria-label="precio"
                                            aria-describedby="precio"
                                            name="precio"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Form>
            </Container>
        </Fragment>
    );
}

export default FormRepuestos;