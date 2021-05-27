import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import {Container} from "react-bootstrap";
import {Historico} from "../Reportes/Historico";
import {useSuscription} from "@apollo/client";

import {Row, Form, Col, InputGroup, FormControl} from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';
import { useSubscription } from '@apollo/react-hooks';
import { historico_taller_por_unidad } from '../../../graphql/Suscription';

const HistoricoPorUnidad = () => {
    let total = 0;
    const [listadoHistorico, setListadoHistorico] = useState([]);
    const [fechaInicio, setFechaInicio] = useState({
        fechaInicio: "",
    });

    const [fechaFin, setFechaFin] = useState({
        fechaFin:"",
    }); 

    const onChange = (e) =>{
        setFechaInicio({
            ...fechaInicio,
            [e.target.name]: e.target.value,
        });
        setFechaFin({
            ...fechaFin,
            [e.target.name]: e.target.value,
        });
    }

    const {loading, data} = useSubscription(historico_taller_por_unidad,{
        variables: {
            fechaInicio: fechaInicio.fechaInicio,
            fechaFin: fechaFin.fechaFin,
        },
    })

    useEffect(() =>{
        if(loading){
            return
        }
        let listadoHistorico = {};
        listadoHistorico = data === undefined ? {} : data.registro_taller;
        if(data){
            setListadoHistorico(data);
        }
    }, [loading,data]);

    if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
  );    
    return ( 
        <Fragment>
            <Container>
                <div className="box-left">
                    <h3>Seleccione rango de fechas</h3>
                </div>
                <Form>
                    <Row>
                        <Col sm={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic -addon1">
                                        Fecha Inicio
                                    </InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl
                                    aria-label="Fecha Inicio"
                                    aria-describedby="Fecha Inicio"
                                    type="date"
                                    name="fechaInicio"
                                    value={fechaInicio.fechaInicio === null ? "" : fechaInicio.fechaInicio}
                                    onChange={onChange}
                                ></FormControl>
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
                                    name="fechaFin"
                                    value={fechaFin.fechaFin === null ? "" :fechaFin.fechaFin}
                                    onChange={onChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Fragment>
     );
}
 
export default HistoricoPorUnidad;