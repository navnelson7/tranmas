import React, { Fragment, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

import { useSubscription } from "@apollo/client";
import { historicoTaller } from "../../../graphql/Suscription";

//import BusquedaFechas from "../Reportes/BusquedaFechas";
import { Row, Form, Col, InputGroup, FormControl } from "react-bootstrap";

const HistoricoTaller = () => {
  const [listadoHistorico, setListadoHistorico] = useState([]);
  const [fechaInicio, setFechaInicio] = useState({
    fechainicio: "",
  });

  const { fecha_inicio } = fechaInicio;

  const [fechaFin, setFechaFin] = useState({
    fechafin: "",
  });

  const { fecha_fin } = fechaFin;

  const onChange = (e) => {
    setFechaInicio({
      ...fechaInicio,
      [e.target.name]: e.target.value,
    });
    setFechaFin({
      ...fechaFin,
      [e.target.name]: e.target.value,
    });
  };


  const { loading, data } = useSubscription(historicoTaller, {
    variables: {
      fechainicio: "2021-05-01",
      fechafin: "2021-05-10",
    },
  });

  

  useEffect(() => {
    let listadoHistorico = {};
    listadoHistorico = data === undefined ? {} : data.registro_taller;
    if(data){
        setListadoHistorico(data);
    }
  }, [data]);

  if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
  );

  console.log(listadoHistorico);
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
            <tbody>
                {
                    listadoHistorico.length === 0
                    ? (<tr><td>No ha registros</td></tr>)
                    : <tr><td>hay vamos</td></tr>
                }
            </tbody>
          </Table>
        </div>
      </Container>
    </Fragment>
  );
};

export default HistoricoTaller;
