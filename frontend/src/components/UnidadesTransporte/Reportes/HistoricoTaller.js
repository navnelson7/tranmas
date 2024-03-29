import React, { Fragment, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Historico from "../Reportes/Historico";
import { useSubscription } from "@apollo/client";
import { historicoTaller } from "../../../graphql/Suscription";

import { Row, Form, Col, InputGroup, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const HistoricoTaller = () => {
  let total = 0;
  const [listadoHistorico, setListadoHistorico] = useState([]);
  const [fechaInicio, setFechaInicio] = useState({
    fechaInicio: "",
  });

  // const { fechaInicio } = fechaInicio;

  const [fechaFin, setFechaFin] = useState({
    fechaFin: "",
  });

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
      fechainicio: fechaInicio.fechaInicio,
      fechafin: fechaFin.fechaFin,
    },
  });

  useEffect(() => {
    setListadoHistorico(data === undefined ? [] : data.registro_talle);
  }, [data]);

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
                    name="fechaInicio"
                    value={
                      fechaInicio.fechaInicio === null
                        ? ""
                        : fechaInicio.fechaInicio
                    }
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
                    name="fechaFin"
                    value={fechaFin.fechaFin === null ? "" : fechaFin.fechaFin}
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
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {listadoHistorico.viendo_detalle === undefined ? (
                " Hay un trabajo de taller sin detalle"
              ) : listadoHistorico.length === 0 ? (
                <tr>
                  <td>No hay registros</td>
                </tr>
              ) : (
                listadoHistorico.registro_taller.map((historico) =>
                  (total +=
                    historico.viendo_detalle.repuesto.precio *
                    historico.viendo_detalle.cantidad)(
                    <tr key={uuidv4()}>
                      <Historico historico={historico} />
                    </tr>
                  )
                )
              )}
              <tr>
                <td colSpan={7}>Total</td>
                <td>${total}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Fragment>
  );
};

export default HistoricoTaller;
