import React, { useState } from 'react';
import { Fragment } from 'react';
import {Container} from "react-bootstrap";
import {Historico} from "../Reportes/Historico";
import {useSuscription} from "@apollo/client";

import {Row, Form, Col, InputGroup, FormControl} from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';

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
    return ( 
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>entrando bien</h1>
                </div>
            </Container>
        </Fragment>
     );
}
 
export default HistoricoPorUnidad;