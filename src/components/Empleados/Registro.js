import React, { useState } from 'react';
import {Card, Form, FormControl, InputGroup, Row, Col, Button} from 'react-bootstrap';
const Registro = () => {
    const [registro, guardarRegistro] = useState({

    })
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
                                        name="codigo"
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
                                        name="id"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Nombre del Empleado</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="nombres"
                                    name="nombres"
                                />
                                <FormControl 
                                    placeholder="apellidos"
                                    name="apellidos "
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
                                        aria-describedby="basic -addon1"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text>Sexo</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select" name="sexo">
                                        <option> </option>
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
                                        aria-describedby="basic -addon1"
                                        name="telefono"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Direccion</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="Direccion"
                                        aria-label="Direccion"
                                        aria-describedby="basic -addon1"
                                        name="direccion"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">DUI</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="00000000-0"
                                        aria-label="DUI"
                                        aria-describedby="DUI"
                                        name="dui"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">NIT</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="000-000000-000-0"
                                        aria-label="NIT"
                                        aria-describedby="NIT"
                                        name="nit"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">ISSS</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="000000000"
                                        aria-label="ISSS"
                                        aria-describedby="ISSS"
                                        name="isss"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">AFP</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="0000000000000"
                                        aria-label="AFP"
                                        aria-describedby="AFP"
                                        name="afp"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Nacimiento</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        aria-label="Nacimiento"
                                        aria-describedby="Nacimiento"
                                        type="date"
                                        name="fecha_nacimiento"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Ingreso</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        aria-label="Ingreso"
                                        aria-describedby="Ingreso"
                                        type="date"
                                        name="fecha_ingreso"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Estado Civil</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select" name="estado_civil">
                                        <option></option>
                                        <option>Soltero</option>
                                        <option>Casado</option>
                                        <option>Viudo</option>
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Tipo de Empleado</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select" name="tipo_empleado">
                                        <option> </option>
                                        <option>Directivo</option>
                                        <option>Administrador</option>
                                        <option>Auxiliar</option>
                                        <option>Motorista</option>
                                        <option>Vigilante</option>
                                        <option>Conserge</option>
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Licencia de Conducir</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="00000000"
                                        aria-label="Licencia de Conducir"
                                        aria-describedby="Licencia de Conducir"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Licencia de Arma</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl 
                                        placeholder="00000000"
                                        aria-label="Licencia de Arma"
                                        aria-describedby="Licencia de Arma"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Estado</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select" name="estado">
                                        <option> </option>
                                        <option>Contrato Activo</option>
                                        <option>Suspendido</option>
                                        <option>Incapacitado</option>
                                        <option>Despedido</option>
                                    </FormControl>
                                </InputGroup>
                            </Col>

                            <Col sm="6">
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Departamento</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select" name="departamento">
                                        <option></option>
                                        <option>Administracion</option>
                                        <option>Contabilidad</option>
                                        <option>Finanzas</option>
                                        <option>Almacen</option>
                                        <option>Taller</option>
                                        <option>Mantenimiento</option>
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Comentarios</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" aria-label="Comentarios" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Activo" name="estado"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button varian="Primera" size="lg">Guardar</Button>
                    </Card.Body>
                </Card>
            </Form>
        </div>
     );
}
 
export default Registro;