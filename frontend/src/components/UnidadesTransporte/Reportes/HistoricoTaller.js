import React,{Fragment, useEffect, useState} from 'react';
import { Container, Table } from "react-bootstrap";

import {useSubscription} from "@apollo/client";
import {historicoTaller} from "../../../graphql/Suscription";

//import BusquedaFechas from "../Reportes/BusquedaFechas";
import {  Row, Form, Col, InputGroup, FormControl } from 'react-bootstrap';

const HistoricoTaller = () => {

    const [listadoHistorico, setListadoHistorico] = useState([]);
    const [fechaInicio, setFechaInicio] = useState({
        fecha_inicio: ""
    });

    const {
        fecha_inicio
    } = fechaInicio;

    const [ fechaFin, setFechaFin] = useState({
        fecha_fin: ""
    });

    const {
        fecha_fin
    } = fechaFin;

    const onChange = (e) => {
        setFechaInicio({
            ...fechaInicio,
            [e.target.name]: e.target.value
        });
        setFechaFin({
            ...fechaFin,
            [e.target.name]: e.target.value
        });
        setListadoHistorico();
    }
   
    const {loading, data} = useSubscription(
        historicoTaller,
        {
            variables:{
                fechafin:fechaFin,
                fechainicio:fechaInicio
            }
        }
        );


    useEffect(() =>{
        if(loading){
            return;
        }
        if(data){
            setListadoHistorico(data.registro_taller);
            console.log(listadoHistorico);
        }
    },[data, loading]);
    return ( 
        <Fragment>
            <Container>
            
                <div className="box-left">
                <h3>Selecciona rango de fechas</h3>
                <Form>
                    <Row>
                        <Col sm={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic -addon1">
                                        Fecha de Inicio
                                    </InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl 
                                    aria-label="Fecha Inicio"
                                    aria-describedby="Fecha Inicio"
                                    type="date"
                                    name="fecha_inicio"
                                    value={fecha_inicio}
                                    onChange={onChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col sm={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic -addon1">
                                        Fecha Fin
                                    </InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl 
                                    aria-label="Fecha Fin"
                                    aria-describedby="Fecha Fin"
                                    type="date"
                                    name="fecha_fin"
                                    value={fecha_fin}
                                    onChange={onChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
                    <h1>HISTORICO TALLER</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th># de Equipo</th>
                                <th>Mecanico</th>
                                <th>Motorista</th>
                                <th>Repuesto</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </Container>
        </Fragment>
     );
}
 
export default HistoricoTaller;