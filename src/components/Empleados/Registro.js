import React, { useState } from 'react';
import {Card, Form, FormControl, InputGroup, Row, Col, Button} from 'react-bootstrap';
const Registro = () => {

    const [registro, guardarRegistro] = useState({
        codigo: '',
        nombres: '',
        apellidos: '',
        edad: '',
        sexo: '',
        telefono: '',
        direccion: '',
        dui: '',
        nit: '',
        afp: '',
        isss: '',
        fecha_ingreso_empresa: '',
        fecha_nacimiento: '',
        estado_civil: '',
        licencia_conducir: '',
        licencia_de_arma: '',
        id_tipo_empleado: '',
        id_estado: '',
        id_departamento: '',
        comentarios: '',
        estado: ''

    })

    const {
        id,
        codigo,
        nombres,
        apellidos,
        edad,
        sexo,
        telefono,
        direccion,
        dui,
        nit,
        afp,
        isss,
        fecha_ingreso_empresa,
        fecha_nacimiento,
        estado_civil,
        licencia_conducir,
        licencia_de_arma,
        id_tipo_empleado,
        id_estado,
        id_departamento,
        comentarios,
        estado
    } = registro;

    const onChange = e => {
        guardarRegistro({
            ...registro,
            [e.target.name] : e.target.value 
        })
    }


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
                                        value={codigo}
                                        onChange={onChange}
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
                                        value={id}
                                        onChange={onChange}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Nombres</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl 
                                        placeholder="nombres"
                                        name="nombres"
                                        value={nombres}
                                        onChange={onChange}
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Apellidos</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl 
                                        placeholder="Apellidos"
                                        name="apellidos"
                                        value={apellidos}
                                        onChange={onChange}
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
                                        aria-describedby="basic-addon1"
                                        name="edad"
                                        value={edad}
                                        onChange={onChange}
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text>Sexo</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select" name="sexo" value={sexo} onChange={onChange}>
                                        <option value="null"> </option>
                                        <option value="F">Femenino</option>
                                        <option value="M">Masculino</option>
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
                                        value={telefono}
                                        onChange={onChange}
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
                                        value={direccion}
                                        onChange={onChange}
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
                                        value={dui}
                                        onChange={onChange}
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
                                        value={nit}
                                        onChange={onChange}
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
                                        value={isss}
                                        onChange={onChange}
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
                                        value={afp}
                                        onChange={onChange}
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
                                        value={fecha_nacimiento}
                                        onChange={onChange}
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
                                        name="fecha_ingreso_empresa"
                                        value={fecha_ingreso_empresa}
                                        onChange={onChange}
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
                                    <FormControl as="select" name="estado_civil" value={estado_civil} onChange={onChange}>
                                        <option value=""></option>
                                        <option value="Soltero">Soltero</option>
                                        <option value="Casado">Casado</option>
                                        <option value="Viudo">Viudo</option>
                                        <option value="Divorciado">Divorciado</option>
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Tipo de Empleado</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select" name="id_tipo_empleado" value={id_tipo_empleado} onChange={onChange}>
                                        <option value=""> </option>
                                        <option value="uuid1">Directivo</option>
                                        <option value="uuid2">Administrador</option>
                                        <option value="uuid3">Auxiliar</option>
                                        <option value="uuid4">Motorista</option>
                                        <option value="uuid5">Vigilante</option>
                                        <option value="uuid6">Conserge</option>
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
                                        name="licencia_conducir"
                                        value={licencia_conducir}
                                        onChange={onChange}
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
                                        name="licencia_de_arma"
                                        value={licencia_de_arma}
                                        onChange={onChange}
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
                                    <FormControl as="select" name="id_estado" value={id_estado} onChange={onChange}> 
                                        <option value="uuid"> </option>
                                        <option value="uuid2">Contrato Activo</option>
                                        <option value="uuid3">Suspendido</option>
                                        <option value="uuid4">Incapacitado</option>
                                        <option value="uuid5">Despedido</option>
                                    </FormControl>
                                </InputGroup>
                            </Col>

                            <Col sm="6">
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic -addon1">Departamento</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl as="select" name="id_departamento" value={id_departamento} onChange={onChange}> 
                                        <option value="uuid1"></option>
                                        <option value="uuid2">Administracion</option>
                                        <option value="uuid3">Contabilidad</option>
                                        <option value="uuid4">Finanzas</option>
                                        <option value="uuid5">Almacen</option>
                                        <option value="uuid6">Taller</option>
                                        <option value="uuid7">Mantenimiento</option>
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
                                    <FormControl 
                                        as="textarea" 
                                        aria-label="Comentarios" 
                                        name="comentarios"
                                        value={comentarios}
                                        onChange={onChange}
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
                                        value={estado}/>
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