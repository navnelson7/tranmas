import React, { Fragment, useState } from 'react';
import { Card, Col, Container, Form, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

import {useMutation} from  "@apollo/client";
import {setMedidasOne} from '../../graphql/Mutations';

import {ToastComponent} from '../Toast';

const FormularioMedidas = () => {

    const [showAlert, setshowAlert] = useState(false);
    const [IconType, setIconType] = useState("");
    const [TextAlert, setTextAlert] = useState("");

    const [addMedidas] = useMutation(setMedidasOne);
    
    const [medidas, guardarMedidas] = useState({
        "unidad_de_medida": ''
    });
    
    const onChange = e => {
        guardarMedidas({
            ...medidas,
            [e.target.name]: e.target.value
        })
    }

    const {
        unidad_de_medida
    } = medidas

    const onSubmit = (e) =>{
        e.preventDefault();
        if(unidad_de_medida.trim() === ""){
            setIconType("error");
            setshowAlert(true);
            setTextAlert("Debes escribir una unidad de medida");
            return
        }else{
            addMedidas({
                variables: medidas
            })
            .then((res)=>{
                if(res.data){
                    setIconType("success");
                    setshowAlert(true);
                    setTextAlert("Registrado Correctamente");
                    setTimeout(() =>{
                    },2000);
                }
            })
            .catch((error)=>{
                setTextAlert("Ocurrio un error");
                setIconType("error");
                setshowAlert(true);
            })
        }
        guardarMedidas({
            unidad_de_medida: ''
        });
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
                    <Form>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm={12}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Unidad de Medida</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                placeholder="Inserte unidad de medida"
                                                aria-label="unidad_medidad"
                                                aria-describedby="basic-addon1"
                                                value={unidad_de_medida}
                                                onChange={onChange}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col sm={12}>
                                        <Button varian="Primeray" size="lg" onClick={onSubmit}>Guardar</Button>
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
 
export default FormularioMedidas;