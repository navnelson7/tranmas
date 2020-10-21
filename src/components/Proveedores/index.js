import React, { useState } from "react";
import styled from "styled-components";
import rightIcon from "./iconos/right.svg";
import leftIcon from "./iconos/left.svg";
import addProveedorIcon from "./iconos/add-proveedor.svg";
import reloadIcon from "./iconos/refresh.svg";

import { useQuery } from "@apollo/client";
import { getProveedoresTable } from "../../graphql/Queries";
import { Link } from "react-router-dom";

function Proveedores() {
  const [PaginateNumber, setPaginateNumber] = useState(0);
  const { loading, error, data, refetch } = useQuery(getProveedoresTable, {
    variables: { limit: 10, offset: PaginateNumber },
  });

  if (loading) return "Loading...";
  if (error) return <p align="center">{`Error! ${error.message}`}</p>;

  const retrocederPage = () => {
    if (PaginateNumber <= 0) {
      setPaginateNumber(0);
    } else {
      setPaginateNumber(PaginateNumber - 1);
    }
  };
  return (
    <StyleTable>
      <div>
        <br />
        <div className="flex-icons-right">
          <div className="grid-icons-right">
            <Link to="/nuevo-proveedor">
              <div className="box-icons-right" title="Añadir proveedor">
                <img
                  src={addProveedorIcon}
                  alt="Añadir proveedor"
                  className="mt-icons"
                />
              </div>
            </Link>
            <div className="box-icons-right" title="Recargar consulta">
              <img
                src={reloadIcon}
                alt="Recargar consulta"
                className="mt-icons"
                onClick={() => refetch()}
              />
            </div>
          </div>
        </div>

        <div className="scroll-container">
          <table className="rwd-table table-left shawdow">
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th>N°</th>
                <th>Nombre de Proveedor</th>
                <th>NIT</th>
                <th>Teléfono de Contacto</th>
                <th>Teléfono de Empresa</th>
                <th>Contacto de Proveedor</th>
                <th>Correo de contacto</th>
                <th>Correo de empresa</th>
                <th>NRC</th>
                <th>Comentarios</th>
                <th>Fecha</th>
              </tr>
              {data.proveedores.map((proveedor, index) => {
                return (
                  <tr key={proveedor.id}>
                    <td data-th="" className="hover-options">
                    <svg className="hover-options" fill="#A18D8F" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </td>
                    <td data-th="" className="hover-options">
                    <svg className="hover-options" fill="#A18D8F" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                    </td>
                    <td data-th="N°">{index + 1}</td>
                    <td data-th="Nombre">{proveedor.nombre_proveedor}</td>
                    <td data-th="NIT">{proveedor.nit}</td>
                    <td data-th="Teléfono de Contacto">
                      {proveedor.telefono_contacto}
                    </td>
                    <td data-th="Teléfono de Empresa">
                      {proveedor.telefono_empresa}
                    </td>
                    <td data-th="Contacto de Proveedor">
                      {proveedor.contacto_proveedor}
                    </td>
                    <td data-th="Correo de contacto">
                      {proveedor.email_contacto}
                    </td>
                    <td data-th="Correo de empresa">
                      {proveedor.email_empresa}
                    </td>
                    <td data-th="NRC">{proveedor.nrc}</td>
                    <td data-th="NRC">{proveedor.comentarios}</td>
                    <td data-th="Fecha">
                      {new Date(proveedor.updated_at).toDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex-icons-right">
        <div className="grid-icons-right">
          <div>
            {/* EN REALIDAD LA PAGINACION EMPIEZA DE CERO PERO PARA EL USUARIO EMPEZARA DE 1 */}
            <p className="txt-page">Pagina {PaginateNumber + 1}</p>
          </div>
          <div
            className="box-icons-right"
            title="Atras"
            onClick={() => retrocederPage()}
          >
            <img src={leftIcon} alt="Atras" className="mt-icons" />
          </div>
          <div
            className="box-icons-right"
            title="Adelante"
            onClick={() => setPaginateNumber(PaginateNumber + 1)}
          >
            <img src={rightIcon} alt="Adelante" className="mt-icons" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
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
    font-size: 12px;
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
  @media (min-width: 1025px) {
    .rwd-table {
      margin: 1em 0;
      min-width: 81%;
      margin-left: 18%;
      margin-right: 1%;
    }
  }
  /* MARGIN LEFT IN DESKTOP */
  @media (min-width: 1920px) {
    .rwd-table {
      margin: 1em 0;
      min-width: 81%;
      margin-left: 15%;
    }
  }

  /* ICONS RIGHT */
  .flex-icons-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .grid-icons-right {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .box-icons-right {
    margin-right: 10px;
    margin-left: 10px;
    height: 35px;
    width: 35px;
    border-radius: 50px;
    text-align: center;
    cursor: pointer;
  }
  .box-icons-right:hover {
    background-color: #e6ecf0;
  }
  .mt-icons {
    margin-top: 4px;
  }

  /* SCROLL CONTAINER */
  .scroll-container {
    overflow: scroll;
    height: auto;
    width: auto;
    overflow-y: hidden;
  }
  .scroll-container::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  .scroll-container::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  .scroll-container::-webkit-scrollbar-thumb {
    background: #d6d0d0;
  }
  /* Handle on hover */
  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: rgb(160, 139, 139);
  }

  .txt-page {
    font-size: 12px;
    margin-top: 8px;
  }
  .hover-options:hover{
    transition: 0.1s;
  }
  .hover-options:hover{
    transition: 0.1s;
    cursor: pointer;
    fill: #7400B8;
  }
`;
