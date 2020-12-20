import React, { useState, Fragment, lazy, Suspense } from "react";
import styled from "styled-components";
import addProveedorIcon from "./iconos/add-proveedor.svg";
import { ToastComponent } from "../Toast";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import { SpinnerLazy } from "../Loader/SpinerLazy";
//IMPORT LAZY
const Proveedor = lazy(() => import("./Proveedor"));
const ResultFilter = lazy(() => import("./ResultFilter"));
function Proveedores() {
  const [EnterSearch, setEnterSearch] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  return (
    <Fragment>
      <br />
      <br />
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleTable>
        <div className="flex-icons-right">
          <div className="grid-icons-right">
            <InputSearch setEnterSearch={setEnterSearch} />

            <Link to="/nuevo-proveedor">
              <div className="box-icons-right" title="Añadir proveedor">
                <img
                  src={addProveedorIcon}
                  alt="Añadir proveedor"
                  className="mt-icons"
                />
              </div>
            </Link>
          </div>
        </div>
        {EnterSearch ? (
          <Suspense fallback={<SpinnerLazy />}>
            <ResultFilter />
          </Suspense>
        ) : (
          <Suspense fallback={<SpinnerLazy />}>
            <Proveedor
              setshowAlert={setshowAlert}
              setTextAlert={setTextAlert}
              setIconType={setIconType}
            />
          </Suspense>
        )}
        <br />
        <br />
        <br />
      </StyleTable>
    </Fragment>
  );
}

export default Proveedores;

export const StyleTable = styled.div`
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
    font-size: 14px;
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
  .hover-options:hover {
    transition: 0.1s;
  }
  .hover-options:hover {
    transition: 0.1s;
    cursor: pointer;
    fill: #7400b8;
  }
`;
