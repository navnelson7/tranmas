import React, { Fragment } from "react";
import styled from "styled-components";
import rightIcon from "./iconos/right.svg";
import leftIcon from "./iconos/left.svg";
import addProveedorIcon from "./iconos/add-proveedor.svg";
import reloadIcon from "./iconos/refresh.svg";
import { useQuery } from '@apollo/client';
import { getProveedoresTable } from "../../graphql/Queries";


function Proveedores() {
  const { loading, error, data, refetch } = useQuery(getProveedoresTable);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <StyleTable>
      <div>
        <br />
        <div className="flex-icons-right">
          <div className="grid-icons-right">
          <div className="box-icons-right" title="Añadir proveedor">
              <img src={addProveedorIcon} alt="Añadir proveedor" className="mt-icons" />
            </div>
            <div className="box-icons-right" title="Recargar consulta">
              <img src={reloadIcon} alt="Recargar consulta" className="mt-icons" onClick={() => refetch()} />
            </div>
          </div>
        </div>
        <table className="rwd-table table-left shawdow">
          <tbody>
            <tr>
              <th>N°</th>
              <th>Nombre</th>
              <th>NIT</th>
              <th>Teléfono de Contacto</th>
              <th>Teléfono de Empresa</th>
              <th>Contacto de Proveedor</th>
              <th>NRC</th>
              <th>Fecha</th>
            </tr>
            <tr>
              {
                data.proveedores.map((proveedor, index) => {
                  return (
                    <Fragment key={proveedor.id}>
                      <td data-th="N°">{index + 1}</td>
                      <td data-th="Nombre">{proveedor.nombre_proveedor}</td>
                      <td data-th="NIT">{proveedor.nit}</td>
                      <td data-th="Teléfono de Contacto">{proveedor.telefono_contacto}</td>
                      <td data-th="Teléfono de Empresa">{proveedor.telefono_empresa}</td>
                      <td data-th="Contacto de Proveedor">{proveedor.contacto_proveedor}</td>
                      <td data-th="NRC">{proveedor.nrc}</td>
                      <td data-th="Fecha">{new Date(proveedor.updated_at).toDateString()}</td>
                    </Fragment>
                  )
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-icons-right">
          <div className="grid-icons-right">
          <div className="box-icons-right" title="Atras">
              <img src={leftIcon} alt="Atras" className="mt-icons" />
            </div>
            <div className="box-icons-right" title="Adelante">
              <img src={rightIcon} alt="Adelante" className="mt-icons" />
            </div>
          </div>
        </div>
      <br /><br />
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

  /* ICONS RIGHT */
  .flex-icons-right {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    .grid-icons-right {
      display: grid;
      grid-template-columns: auto auto;
    }
    .box-icons-right {
      margin-right: 10px;
      margin-left: 10px;
      height: 35px;
      width: 35px;
      border-radius: 50px;
      text-align:center;
      cursor: pointer;
    }
    .box-icons-right:hover {
     background-color: #E6ECF0;
    }
    .mt-icons{
      margin-top: 4px;
    }
`;
