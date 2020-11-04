import React, { Fragment, useState } from 'react';
import { Card, Container, Form, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import {useMutation} from '@apollo/client';
import {setEstadosOne} from '../../graphql/Mutations';

import {ToastComponent} from '../Toast';



const FormularioEstadoRepuestos = () => {

    const [showAlert, setshowAlert] = useState(false)
    const [IconType, setIconType] = useState("");
    const [TextAlert, setTextAlert] = useState("");

    const [addEstados] = useMutation(setEstadosOne);

    const [estados, guardarEstado] = useState({
        estado_repuestos: ''
    })

    const {
        estado_repuestos
    } = estados

    const onChange = e =>{
        guardarEstado({
            ...estados,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        if(estado_repuestos.trim() === ''){
            setIconType("error")
            setshowAlert(true)
            setTextAlert("El campo estado no puede estar vacio")
            return 
        }else{
            addEstados({
                variables: estado_repuestos
            })
            .then((res)=>{
                if(res.data){
                    setIconType("success");
                    setshowAlert(true);
                    setTextAlert("Estado registrado correctamente")
                }
            })
            .catch((error)=>{
                setIconType("error");
                setTextAlert("Ocurrio un problema");
                setshowAlert(true);
                console.log(error);
            })
        }
        guardarEstado({
            "estado_repuestos": ''
        })
    }

    return (
        <Fragment>
            <ToastComponent 
                showAlert={showAlert}
                setShowAlert={setshowAlert}
                iconType={IconType}
                textAlert={TextAlert}
            />
            <Container>
                <div className="box-left">
                    <h1>Registro de Estados para Repuestos</h1>
                    <Form>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm={12}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Estado para Repuestos</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                placeholder="Escribe el estado"
                                                aria-label="estado_repuestos"
                                                aria-describedby="basic-addon1"
                                                name="estado_repuestos"
                                                value={estado_repuestos}
                                                onChange={onChange}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <Button varian="Primary" size="lg" onClick={onSubmit}>Guardar</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Form>
                </div>
            </Container>
        </Fragment>
    );
}

export default FormularioEstadoRepuestos;