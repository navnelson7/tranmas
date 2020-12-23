import React, { Fragment, useState, useEffect } from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { queryStatistic } from "../query";
import { useParams } from "react-router";
import { Table, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

function Chart() {
  const { id } = useParams();
  const [Year, setYear] = useState(new Date().getFullYear().toString());
  const [YearsState, setYearsState] = useState([]);

  const { loading, error, data } = useQuery(queryStatistic, {
    variables: {
      id_unidad_transporte: id,
      year: Year,
    },
  });
  useEffect(() => {
    var year = 2020;
    let años = [];
    for (var i = year; i <= 3000; i++) {
      años.push(i);
    }
    setYearsState(años);
  }, []);
  const datos = {
    labels: [
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
    ],
    datasets: [
      {
        label: "# Registros",
        data: [
          data === undefined ? 0 : data.combustible1.aggregate.count,
          data === undefined ? 0 : data.combustible2.aggregate.count,
          data === undefined ? 0 : data.combustible3.aggregate.count,
          data === undefined ? 0 : data.combustible4.aggregate.count,
          data === undefined ? 0 : data.combustible5.aggregate.count,
          data === undefined ? 0 : data.combustible6.aggregate.count,
          data === undefined ? 0 : data.combustible7.aggregate.count,
          data === undefined ? 0 : data.combustible8.aggregate.count,
          data === undefined ? 0 : data.combustible9.aggregate.count,
          data === undefined ? 0 : data.combustible10.aggregate.count,
          data === undefined ? 0 : data.combustible11.aggregate.count,
          data === undefined ? 0 : data.combustible12.aggregate.count,
        ],
        fill: false,
        backgroundColor: [
          "#f72585",
          "#7209b7",
          "#ffb703",
          "#d90429",
          "#8338ec",
          "#001233",
          "#6e44ff",
          "#27a300",
          "#ffd400",
          "#f75c03",
          "#3b0086",
          "#d90429",
        ],
      },
    ],
  };

  const options = {
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };
  if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p align="center">{`Error! ${error.message}`}</p>;
  console.log(data);
  return (
    <Fragment>
      <div className="d-flex justify-content-end mr-2">
        <DropdownButton id="dropdown-basic-button" title={Year}>
          {YearsState.map((año) => {
            return (
              <Dropdown.Item key={año} onClick={() => setYear(año.toString())}>{año}</Dropdown.Item>
            );
          })}
        </DropdownButton>
      </div>
      <StyleChart>
        <div className="container-chart">
          <Bar height="100%" data={datos} options={options} />
          <br />
          <Row>
            <Col sm={6}>
              <h5>
                <p className="center-box">
                  <strong>Combustible</strong>
                </p>
              </h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr className="bg-header-table text-white">
                    <th>Mes</th>
                    <th>Minimo</th>
                    <th>Maximo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enero</td>
                    <td>
                      {data.combustible1.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible1.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible1.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible1.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Febrero</td>
                    <td>
                      {data.combustible2.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible2.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible2.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible2.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Marzo</td>
                    <td>
                      {data.combustible3.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible3.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible3.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible3.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Abril</td>
                    <td>
                      {data.combustible4.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible4.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible4.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible4.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Mayo</td>
                    <td>
                      {data.combustible5.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible5.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible5.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible5.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Junio</td>
                    <td>
                      {data.combustible6.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible6.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible6.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible6.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Julio</td>
                    <td>
                      {data.combustible7.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible7.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible7.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible7.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Agosto</td>
                    <td>
                      {data.combustible8.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible8.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible8.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible8.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Septiembre</td>
                    <td>
                      {data.combustible9.aggregate.min.galones_servidos === null
                        ? 0
                        : data.combustible9.aggregate.min.galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible9.aggregate.max.galones_servidos === null
                        ? 0
                        : data.combustible9.aggregate.max.galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Octubre</td>
                    <td>
                      {data.combustible10.aggregate.min.galones_servidos ===
                      null
                        ? 0
                        : data.combustible10.aggregate.min
                            .galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible10.aggregate.max.galones_servidos ===
                      null
                        ? 0
                        : data.combustible10.aggregate.max
                            .galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Noviembre</td>
                    <td>
                      {data.combustible11.aggregate.min.galones_servidos ===
                      null
                        ? 0
                        : data.combustible11.aggregate.min
                            .galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible11.aggregate.max.galones_servidos ===
                      null
                        ? 0
                        : data.combustible11.aggregate.max
                            .galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                  <tr>
                    <td>Diciembre</td>
                    <td>
                      {data.combustible12.aggregate.min.galones_servidos ===
                      null
                        ? 0
                        : data.combustible12.aggregate.min
                            .galones_servidos}{" "}
                      gal
                    </td>
                    <td>
                      {data.combustible12.aggregate.max.galones_servidos ===
                      null
                        ? 0
                        : data.combustible12.aggregate.max
                            .galones_servidos}{" "}
                      gal
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm={6}>
              <h5>
                <p className="center-box">
                  <strong>Kilometraje</strong>
                </p>
              </h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr className="bg-header-table text-white">
                    <th>Mes</th>
                    <th>Minimo</th>
                    <th>Maximo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enero</td>
                    <td>
                      {data.combustible1.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible1.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible1.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible1.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Febrero</td>
                    <td>
                      {data.combustible2.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible2.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible2.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible2.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Marzo</td>
                    <td>
                      {data.combustible3.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible3.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible3.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible3.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Abril</td>
                    <td>
                      {data.combustible4.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible4.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible4.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible4.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Mayo</td>
                    <td>
                      {data.combustible5.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible5.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible5.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible5.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Junio</td>
                    <td>
                      {data.combustible6.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible6.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible6.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible6.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Julio</td>
                    <td>
                      {data.combustible7.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible7.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible7.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible7.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Agosto</td>
                    <td>
                      {data.combustible8.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible8.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible8.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible8.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Septiembre</td>
                    <td>
                      {data.combustible9.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible9.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible9.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible9.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Octubre</td>
                    <td>
                      {data.combustible10.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible10.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible10.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible10.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Noviembre</td>
                    <td>
                      {data.combustible11.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible11.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible11.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible11.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                  <tr>
                    <td>Diciembre</td>
                    <td>
                      {data.combustible12.aggregate.min.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible12.aggregate.min
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                    <td>
                      {data.combustible12.aggregate.max.kilometraje_actual ===
                      null
                        ? 0
                        : data.combustible12.aggregate.max
                            .kilometraje_actual}{" "}
                      Km
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <br />
      </StyleChart>
    </Fragment>
  );
}

export default Chart;

const StyleChart = styled.div`
  .container-chart {
    width: 90%;
    height: auto;
  }
  .bg-header-table {
    background: #03045e;
  }
`;
