import React, { Fragment } from 'react';
import { Container, Row ,Form, FormControl, Col, InputGroup, Card, Button } from 'react-bootstrap';

import ListBoxEstadoRepuesto   from '../listbox/ListBoxEstadoRepuesto';
import ListBoxProveedores from '../listbox/ListBoxProveedores';
import ListBoxUnidadMedida from '../listbox/ListBoxUnidadMedida';
import ListBoxMarcas from '../listbox/ListBoxMarcas';

const FormRepuestos = () => {
    return (
        <Fragment>
            <Container>
                <h1>Formulario para Ingreso de Repuestos</h1>
                <Form>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={6}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Codigo Repuesto</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            placeholder="0000000000"
                                            aria-label="codigo"
                                            aria-describedby="basic-addon1"
                                            name="codigo"
                                        />                               
                                    </InputGroup>
                                </Col>
                                <Col sm={6}>
                                    <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                placeholder="Nombre del Repuesto"
                                                aria-label="nombre"
                                                aria-describedby="basic-addon1"
                                                name="nombre"
                                            />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Cantidad</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="00"
                                            aria-label="cantidad"
                                            aria-describedby="basic-addon1"
                                            name="cantidad"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <InputGroup.Text id="basic-addon1">Precio</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="0.00"
                                            aria-label="precio"
                                            aria-describedby="basic-addon1"
                                            name="precio"
                                        />
                                    </InputGroup>
                                </Col>
                                
                                <ListBoxUnidadMedida />

                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                                            <InputGroup.Text id="basic-addon1">Factura</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            placeholder="000000000"
                                            aria-label="numero_factura"
                                            arita-describedby="basic-addon1"
                                            name="numero_factura"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Fecha Factura</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            type="date"
                                            aria-label="fecha_factura"
                                            aria-describedby="basic-addon1"
                                            name="fecha_factura"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Fecha Ingreso</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            type="date"
                                            aria-label="fecha_ingreso"
                                            aria-describedby="basic-addon1"
                                            name="fecha_ingreso"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <ListBoxMarcas />
                               <ListBoxProveedores />
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Usuario</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            placeholder="usuario"
                                            aria-label="id_usuario"
                                            aria-describedby="basic-addon1"
                                            name="id_usuario"
                                            readOnly
                                        />
                                    </InputGroup>
                                </Col>
                                <ListBoxEstadoRepuesto/>
                            </Row>
                            <Row>
                            <Col sm={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Comentarios</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl 
                                        as="textarea" 
                                        aria-label="Comentarios" 
                                        name="comentarios"
                                        //value={comentarios}
                                        //onChange={onChange}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check 
                                        type="checkbox" 
                                        label="Activo" 
                                        name="estado" 
                                        //value={estado}
                                        //onChange={handleCheck}
                                        />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button varian="Primera" size="lg">Guardar</Button>
                        </Card.Body>
                    </Card>
                </Form>
            </Container>
        </Fragment>
    );
}

export default FormRepuestos;