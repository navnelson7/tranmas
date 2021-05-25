import React, { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { useSubscription } from "@apollo/client";
import { Row, InputGroup, Col, FormControl } from "react-bootstrap";
import { reporteAireAcondicionado } from "../../../../graphql/Suscription";

function AireAcondicionado() {
  const [FechaInicio, setFechaInicio] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate()
  );
  const [FechaFinal, setFechaFinal] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate()
  );
  const { data, loading, error } = useSubscription(reporteAireAcondicionado, {
    variables: {
      fechainicio: FechaInicio,
      fechafin: FechaFinal,
    },
  });
  const [meses] = useState([
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]);
  if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p className="box-center">{`Error! ${error.message}`}</p>;
  console.log(data);
  return (
    <Fragment>
      <StyleAire>
        <div className="box-left-aire">
          <Row>
            <Col sm={6}>
              <p className="text-center">
                {" "}
                {new Date(FechaInicio).getDate() + 1} de{" "}
                {meses[new Date(FechaInicio).getMonth()]}{" "}
                {new Date(FechaInicio).getFullYear()}
              </p>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Fecha de inicio
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Costo de refrenda"
                  name="costo"
                  type="date"
                  value={FechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col sm={6}>
              <p className="text-center">
                {" "}
                {new Date(FechaFinal).getDate() + 1} de{" "}
                {meses[new Date(FechaFinal).getMonth()]}{" "}
                {new Date(FechaFinal).getFullYear()}
              </p>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Fecha final
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Costo de refrenda"
                  name="costo"
                  type="date"
                  value={FechaFinal}
                  onChange={(e) => setFechaFinal(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Motorista</th>
                <th>Descripción</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {data.aire_acondicionado_aggregate.nodes.map((aire, index) => {
                return (
                  <tr key={aire.id}>
                    <td>{index + 1}</td>
                    <td>
                      {aire.motorista === null
                        ? ""
                        : aire.motorista.nombres +
                          " " +
                          aire.motorista.apellidos}
                    </td>
                    <td>{aire.descripcion}</td>
                    <td>
                      {new Date(aire.fecha).getDate() + 1} de{" "}
                      {meses[new Date(aire.fecha).getMonth()]}{" "}
                      {new Date(aire.fecha).getFullYear()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
                <th colSpan={2}>Número de placa</th>
                <th>Número de equipo</th>
                <th>Registros totales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <div className="box-placa">
                    <div className="box-blue-top">EL SALVADOR</div>
                    <div className="box-white">
                      <strong>
                        {data.aire_acondicionado_aggregate.nodes.length === 0
                          ? ""
                          : data.aire_acondicionado_aggregate.nodes[0]
                              .unidad_transporte === null || undefined
                          ? ""
                          : data.aire_acondicionado_aggregate.nodes[0]
                              .unidad_transporte.numero_placa}
                      </strong>
                    </div>
                    <div className="box-blue-bottom">CENTRO AMERICA</div>
                  </div>
                </td>

                <td>
                  {data.aire_acondicionado_aggregate.nodes.length === 0
                    ? ""
                    : data.aire_acondicionado_aggregate.nodes[0]
                        .unidad_transporte.numero_placa}
                </td>
                <td>
                  {data.aire_acondicionado_aggregate.aggregate.count === null
                    ? ""
                    : data.aire_acondicionado_aggregate.aggregate.count}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </StyleAire>
    </Fragment>
  );
}

export default AireAcondicionado;

const StyleAire = styled.div`
  .box-left-aire {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-aire {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-aire {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-cards {
      margin-left: 15%;
      margin-top: 2%;
    }
  }

  .box-placa {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .box-white {
    background: white;
  }
  .box-blue-top {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .box-blue-bottom {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
