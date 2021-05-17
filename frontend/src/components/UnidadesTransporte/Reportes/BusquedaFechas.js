import React, { useState } from 'react';
import { Fragment } from 'react';
import { Container, Row, Form, Col, InputGroup, FormControl } from 'react-bootstrap';
const BusquedaFechas = () => {

    const [fechaInicio, setFechaInicio] = useState({
        fecha_inicio: ""
    });

    const {
        fecha_inicio
    } = fechaInicio;

    const [ fechaFin, setFechaFin] = useState({
        fecha_fin: ""
    });

    const {
        fecha_fin
    } = fechaFin;

    const onChange = (e) => {
        setFechaInicio({
            ...fechaInicio,
            [e.target.name]: e.target.value
        });
        setFechaFin({
            ...fechaFin,
            [e.target.name]: e.target.value
        });
    }

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
                                    value={fecha_inicio}
                                    onChange={onChange}
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
                                    value={fecha_fin}
                                    onChange={onChange}
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