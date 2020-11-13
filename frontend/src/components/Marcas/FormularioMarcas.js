import React, {Fragment, useState} from 'react';
import {Container, Form, FormControl, Card, Row, Col, InputGroup, Button} from 'react-bootstrap';
import {useMutation } from '@apollo/client';
import {setMarcasOne} from '../../graphql/Mutations';

import {ToastComponent} from '../Toast';

const FormuarioMarca = () => {

    const [showAlert, setshowAlert] = useState(false);
    const [IconType, setIconType] = useState("");
    const [TextAlert, setTextAlert] = useState("");

    const [addMarcas] = useMutation(setMarcasOne);

    const [marcas, guardarMarca] = useState({
        marca:''
    })

    const {
        marca
    } = marcas

    const onChange = e =>{
        guardarMarca({
            ...marcas,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = e=> {
        e.preventDefault();
        if(marca.trim() === ''){
            setIconType("error")
            setshowAlert(true);
            setTextAlert("El campo de marca no puede estar vacio");
            return
        }else{
            addMarcas({
                variables: marcas
            })
            .then((res) =>{
                if(res.data){
                    setIconType("success");
                    setshowAlert(true);
                    setTextAlert("Marca Ingresada Correctamente");
                }
            })
            .catch((error) =>{
                setIconType("error");
                setTextAlert("Ocurrio un problema");
                setshowAlert(true);
            })
        }

        guardarMarca({
            "marca":''
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
                    <h1>Ingreso de Marcas</h1>
                    <Form>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm={12}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Nombre de Marca</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                placeholder="Escribe el nombre de la marca"
                                                aria-label="marca"
                                                aria-describedby="basic-addon1"
                                                name="marca"
                                                value={marca}
                                                onChange={onChange}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <Button vartiant="Primary" size="lg" onClick={onSubmit}>Guardar</Button>
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
 
export default FormuarioMarca;