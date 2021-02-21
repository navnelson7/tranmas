import React, { useState } from 'react';
import ListBoxTipoFalta from '../listbox/ListBoxTipoFalta'
import { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Form, InputGroup, FormControl, Col, Row, Button } from 'react-bootstrap'
import { ToastComponent } from "../Toast";

const FormularioRefrenda = () => {

    const [showAlert, setshowAlert] = useState(false);
    const [IconType, setIconType] = useState("");
    const [TextAlert, setTextAlert] = useState("");

    return (
        <Fragment>
            <ToastComponent
                showAlert={showAlert}
                setShowAlert={setshowAlert}
                iconType={IconType}
                textAlert={TextAlert}
            />
            <h1>Agregar detalle de Refrenda a:</h1>
            <Form>
                <Row>
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <InputGroup.Text id="basic -addon1">
                                    Fecha de Emision
                                </InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl 
                                aria-label="Nacimiento"
                                aria-describedby="Nacimiento"
                                type="date"
                                name="fecha_nacimiento"
                                // value={empleadoEstado.fecha_nacimiento}
                                // onChange={onChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <InputGroup.Text id="basic -addon1">
                                    Fecha de Refrenda
                                </InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl 
                                aria-label="Nacimiento"
                                aria-describedby="Nacimiento"
                                type="date"
                                name="fecha_nacimiento"
                                // value={empleadoEstado.fecha_nacimiento}
                                // onChange={onChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    );
}

export default FormularioRefrenda;