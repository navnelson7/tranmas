import React, { Fragment, useState } from 'react';
import {FronAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddresCard} from "@fortawesome/free-solid-svg-icons";
import {
    Form,
    InputGroup,
    FormControl,
    Col,
    Row,
    Button,
} from 'react-bootstrap';
import {useMutation} from "@apollo/client"

import {ToastComponent} from "../Toast"; 
const FormularioContratos = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [IconType, setIconType] = useState("")
    const [TextAlert, setTextAlert] = useState("");


    return ( 
        <Fragment>
            <ToastComponent 
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                iconType={IconType}
                textAlert={TextAlert}
            />
            <h1>Agregar contrato digitalizado</h1>
        </Fragment>
     );
}
 
export default FormularioContratos;