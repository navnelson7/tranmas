import React, { Fragment, useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

import {
    Form,
    InputGroup,
    FormControl,
    Col,
    Row,
    Button,
} from 'react-bootstrap';
import {useMutation} from "@apollo/client"
import {setContratosOne} from "../../graphql/Mutations";
import {ToastComponent} from "../Toast"; 
const FormularioContratos = ({Nombre}) => {

    const [showAlert, setShowAlert] = useState(false);
    const [IconType, setIconType] = useState("")
    const [TextAlert, setTextAlert] = useState("");

    const [addContrato] = useMutation(setContratosOne);

    const onSubmit = (e) => {

    }
    return ( 
        <Fragment>
            <ToastComponent 
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                iconType={IconType}
                textAlert={TextAlert}
            />
            <h1>Agregar contrato digitalizado a: {Nombre}</h1>
            <Form>
                <Row>
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <InputGroup.Text>
                                    Fecha de Registro
                                </InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl 
                                aria-label="Registro"
                                aria-describedby="Registro"
                                type="date"
                                name="fecha_registro"
                                //value={contrato.fecha_registro}
                                //onChange={onChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <InputGroup.Text>
                                    Cargar Archivo
                                </InputGroup.Text>
                                <Form.File id="contrato_digital" label="contrato_digital" />
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Button variant="success" onClick={onSubmit}>
                    Guardar Contrato
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                </Button>
            </Form>
        </Fragment>
     );
}
 
export default FormularioContratos;