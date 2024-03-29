import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Historico from "../../UnidadesTransporte/Reportes/Historico";

import {
  Row,
  Form,
  Col,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useSubscription } from "@apollo/client";
import { historico_taller_por_unidad } from "../../../graphql/Suscription";
import { useParams } from "react-router-dom";

const HistoricoPorUnidad = () => {
  let total = 0;
  const { idUnidadTransporte } = useParams();
  const [listadoHistorico, setListadoHistorico] = useState([]);
  const [fechaInicio, setFechaInicio] = useState({
    fechaInicio: "",
  });

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
  const { loading, data } = useSubscription(historico_taller_por_unidad, {
    variables: {
      fechainicio: fechaInicio.fechaInicio,
      fechafin: fechaFin.fechaFin,
      id_unidad: idUnidadTransporte,
    },
  });

  useEffect(() => {
    if (data) {
      setListadoHistorico(data === undefined ? [] : data.registro_taller);
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
                  value={
                    fechaInicio.fechaInicio === null
                      ? ""
                      : fechaInicio.fechaInicio
                  }
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
                  value={fechaFin.fechaFin === null ? "" : fechaFin.fechaFin}
                  onChange={onChange}
                />
              </InputGroup>
            </Col>
          </Row>
        </Form>
        <h1>HISTORICO TALLER POR UNIDAD DE TRANSPORTE</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha</th>
              <th># de Equipo</th>
              <th>Mecanico</th>
              <th>Motorista</th>
              <th>Repuestos</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {listadoHistorico.length === 0 ? (
              <tr>
                <td>No hay Registros</td>
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
      </Container>
    </Fragment>
  );
};

export default HistoricoPorUnidad;
