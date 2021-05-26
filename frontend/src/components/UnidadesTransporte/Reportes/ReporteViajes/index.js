import React, { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { useSubscription } from "@apollo/client";
import { Row, InputGroup, Col, FormControl } from "react-bootstrap";
import { getReporteViajes } from "../../../../graphql/Suscription";
import { useParams } from "react-router";

function ReporteViajes() {
  const { idUnidadTransporte } = useParams();

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

  const { data, loading, error } = useSubscription(getReporteViajes, {
    variables: {
      idUnidadTransporte: idUnidadTransporte,
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
  console.log(data.control_viajes_aggregate);
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
                <th>Tipo de viaje</th>
                <th>Kilometrajes recogidos</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {data.control_viajes_aggregate.nodes.map((viaje, index) => {
                return (
                  <tr key={viaje.id}>
                    <td>{index + 1}</td>
                    <td>
                      {viaje.empleado_motorista === null
                        ? ""
                        : viaje.empleado_motorista.nombres +
                          " " +
                          viaje.empleado_motorista.apellidos}
                    </td>
                    <td>{viaje.tipo_viaje}</td>
                    <td>{viaje.kilometrajes_recogidos} km</td>
                    <td>
                      {new Date(viaje.fecha).getDate() + 1} de{" "}
                      {meses[new Date(viaje.fecha).getMonth()]}{" "}
                      {new Date(viaje.fecha).getFullYear()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
                <th>Registros totales</th>
                <th>Máximo de kilometraje recogido</th>
                <th>Mínimo de kilometraje recogido</th>
                <th>Viajes totales realizados</th>
                <th>Kilometraje total recogido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  {data.control_viajes_aggregate.aggregate === null
                    ? ""
                    : data.control_viajes_aggregate.aggregate.count}
                </td>

                <td>
                  {" "}
                  {data.control_viajes_aggregate.aggregate === null
                    ? ""
                    : data.control_viajes_aggregate.aggregate.max
                        .kilometrajes_recogidos}{" "}
                  km
                </td>
                <td>
                  {" "}
                  {data.control_viajes_aggregate.aggregate === null
                    ? ""
                    : data.control_viajes_aggregate.aggregate.min
                        .kilometrajes_recogidos}{" "}
                  km
                </td>

                <td>
                  {data.control_viajes_aggregate.aggregate === null
                    ? ""
                    : data.control_viajes_aggregate.aggregate.sum
                        .numero_de_viajes_realizados}
                </td>
                <td>
                  {data.control_viajes_aggregate.aggregate === null
                    ? ""
                    : data.control_viajes_aggregate.aggregate.sum
                        .kilometrajes_recogidos}{" "}
                  km
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </StyleAire>
    </Fragment>
  );
}

export default ReporteViajes;

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
