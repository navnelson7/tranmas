import React, { Fragment } from "react";
import styled from "styled-components";
import Chart from "./Chart";

function Statistic() {
  return (
    <Fragment>
      <StyleStatistic>
        <div className="box-left-container">
          <Chart />
        </div>
      </StyleStatistic>
    </Fragment>
  );
}

export default Statistic;

const StyleStatistic = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-container {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-container {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-container {
      margin-left: 15%;
      margin-top: 2%;
    }
  }

  /* DESKTOP */
  @media (min-width: 1025px) {
    .box-left-container {
      margin-left: 18.5%;
      margin-top: 2%;
      overflow-x: hidden;
    }
  }
`;
