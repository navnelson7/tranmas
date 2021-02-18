import React, { useState } from 'react';
import ListBoxTipoFalta from '../listbox/ListBoxTipoFalta'
import { Fragment } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {Form, InputGroup, FormControl, Col, Row, Button} from 'react-bootstrap'
import {ToastComponent} from "../Toast";

import {useMutation} from "@apollo/client";
import {setFaltaOne} from '../../graphql/Mutations';

const FormularioFaltas = ({Id,Nombre}) => {

    const [showAlert, setshowAlert] = useState(false);
    const [IconType, setIconType] = useState("");
    const [TextAlert, setTextAlert] = useState("");

     const [addFalta] = useMutation(setFaltaOne);

    const [falta, setFalta] = useState({
        id_empleado: '',
        descripcion_de_falta:'',
        id_tipo_falta:''
    });

    const {
        id_empleado,
        descripcion_de_falta,
        id_tipo_falta
    } = falta;

    const onChange = e => {
        setFalta({
            ...falta,
            [e.target.name] : e.target.value,
            id_empleado:Id
        })
    }

    const onSubmit = (e) =>{
        console.log("entrando")
        e.preventDefault();
        if(id_empleado.trim() === "" ||
            descripcion_de_falta.trim() === "" ||
            id_tipo_falta.trim() === ""){
                setIconType("error")
                setshowAlert("true");
                setTextAlert("Debes llenar todos los campos");
                return 
            }else{
                addFalta({
                    variables:falta
                })
                .then((res) => {
                    if(res.data){
                        console.log(res.data)
                        setIconType("success")
                        setshowAlert(true);
                        setTextAlert("Registrado correctamente")
                        setFalta([falta,res.data.falta])
                        setTimeout(() => {
                        }, 2000);
                    }
                })
            }
    }



    return ( 
        <Fragment>  
            <ToastComponent
                showAlert={showAlert}
                setShowAlert={setshowAlert}
                iconType={IconType}
                textAlert={TextAlert}
            />
            <h1>Agregar detalle de Falta a: {Nombre}</h1>
            <Form>
                <Row>
                    <Col sm={12}>
                        <ListBoxTipoFalta changeFalta={onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic addon1">Descripcion de la Falta</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                as="textarea"
                                name="descripcion_de_falta"
                                value={descripcion_de_falta}
                                onChange={onChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Button variant="danger"  value={Id} onClick={onSubmit}>Guardar Falta <FontAwesomeIcon icon={faAddressCard} /></Button>
            </Form>
            
        </Fragment>
     );
}
 
export default FormularioFaltas;