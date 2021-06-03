import React from 'react';
import { Fragment, useState } from 'react';
import {Container, Form, Row, InputGroup, FormControl, Col} from 'react-bootstrap';
const ReporteFaltas = () => {
    const [fechaInicio, setFechaInicio] = useState({
        fechaInicio: "",
    });

    const [fechaFin, setFechaFin] = useState({
        fechaFin:"",
    })

    
    return ( 
        <Fragment>
            <Container>
                <div className="box-left">
                    <h3>Seleccionar Rango de Fechas</h3>
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
                                    name="fechaInicio"
                                    value={fechaInicio.fechaInicio === null ? "" :fechaInicio.fechaInicio}
                                   // onChange={onChange}
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
                                    value={fechaFin.fechaFin === null ? "" : fechaFin.fechaFin}
                                    //onChange={onChange}
                                />
                            </InputGroup>
                        </Col>
                        </Row>
                    </Form>

                </div>
            </Container>
        </Fragment>
     );
}
 
export default ReporteFaltas;