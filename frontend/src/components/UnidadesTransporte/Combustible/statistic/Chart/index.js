import React, { Fragment } from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import styled from "styled-components";

function Chart() {
  const data = {
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
        label: "# registros",
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
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
  return (
    <Fragment>
      <StyleChart>
        <div className="container-chart">
          <Bar height="100%" data={data} options={options} />
        </div>
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
`;
