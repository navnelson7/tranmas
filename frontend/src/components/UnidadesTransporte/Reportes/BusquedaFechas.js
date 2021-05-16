import React from 'react';
import { Fragment } from 'react';
import { Container, Row, Form, Col, InputGroup, FormControl } from 'react-bootstrap';
const BusquedaFechas = () => {
    return (
        <Fragment>
            <Container>
                <h3>Selecciona rango de fechas</h3>
                <Form>
                    <Row>
                        <Col sm={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic -addon1">
                                        Fecha de Inicio
                                    </InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl 
                                    aria-label="Fecha Inicio"
                                    aria-describedby="Fecha Inicio"
                                    type="date"
                                    name="fecha_inicio"
                                    //value={}
                                    //onChange={onChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col sm={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic -addon1">
                                        Fecha Fin
                                    </InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl 
                                    aria-label="Fecha Fin"
                                    aria-describedby="Fecha Fin"
                                    type="date"
                                    name="fecha_fin"
                                    //value={}
                                    //onChange={onChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Fragment>
    );
}

export default BusquedaFechas;