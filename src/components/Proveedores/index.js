import React from "react";
import styled from "styled-components";

function Proveedores() {
  return (
    <StyleTable>
      <div>
        <table className="rwd-table table-left shawdow">
          <tbody>
            <tr>
              <th>Testing</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Gross</th>
            </tr>
            <tr>
              <td data-th="Movie Title">Star Wars</td>
              <td data-th="Genre">Adventure, Sci-fi</td>
              <td data-th="Year">1977</td>
              <td data-th="Gross">a</td>
            </tr>
            <tr>
              <td data-th="Movie Title">Howard The Duck</td>
              <td data-th="Genre">"Comedy"</td>
              <td data-th="Year">1986</td>
              <td data-th="Gross">$16,295,774</td>
            </tr>
            <tr>
              <td data-th="Movie Title">American Graffiti</td>
              <td data-th="Genre">Comedy, Drama</td>
              <td data-th="Year">1973</td>
              <td data-th="Gross">$115,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/><br/>
    </StyleTable>
  );
}

export default Proveedores;

const StyleTable = styled.div`
  @import "https://fonts.googleapis.com/css?family=Montserrat:300,400,700";
  .shawdow {
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
  }
  .rwd-table tr {
    border-top: 0px solid #ddd;
    border-bottom: 0px solid #ddd;
  }
  .rwd-table th {
    display: none;
  }
  .rwd-table td {
    display: block;
  }
  .rwd-table td:first-child {
    padding-top: 0.5em;
  }
  .rwd-table td:last-child {
    padding-bottom: 0.5em;
  }
  .rwd-table td:before {
    content: attr(data-th) ": ";
    font-weight: bold;
    width: 6.5em;
    display: inline-block;
  }
  /* RESPONSIVE MOBILE */
  @media (max-width: 768px) {
    .rwd-table {
      margin: 1em 0;
      min-width: 90%;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
  @media (min-width: 480px) {
    .rwd-table td:before {
      display: none;
    }
  }
  .rwd-table th,
  .rwd-table td {
    text-align: left;
  }
  @media (min-width: 480px) {
    .rwd-table th,
    .rwd-table td {
      display: table-cell;
      padding: 0.25em 0.5em;
    }
    .rwd-table th:first-child,
    .rwd-table td:first-child {
      padding-left: 0;
    }
    .rwd-table th:last-child,
    .rwd-table td:last-child {
      padding-right: 0;
    }
  }
  .rwd-table {
    background: white;
    color: #8c7d84;
    border-radius: 0.4em;
    overflow: hidden;
  }
  .rwd-table tr {
    border-color: #46637f;
  }
  .rwd-table th,
  .rwd-table td {
    margin: 0.5em 1em;
  }
  @media (min-width: 480px) {
    .rwd-table th,
    .rwd-table td {
      padding: 1em !important;
    }
  }
  .rwd-table th,
  .rwd-table td:before {
    color: black;
    background: #faf2f2;
  }
  /* MARGIN LEFT IN DESKTOP */
  @media (min-width: 1024px) {
    .rwd-table {
      margin: 1em 0;
      min-width: 81%;
      margin-left: 18%;
    }
  }
`;
