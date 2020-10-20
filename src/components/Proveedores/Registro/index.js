import React, { Fragment } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

function Registro() {
  return (
    <Fragment>
      <StyleNuevoProveedor>
        <div className="box-left-proveedor">
          <h2>Añadir Proveedor</h2>
          <div className="grid-forms-proveedor">
            <div className="mt-grid">
              <Form.Control type="text" placeholder="Nombre de Proveedor" />
            </div>

            <div className="mt-grid">
              <Form.Control type="text" placeholder="NIT" />
            </div>

            <div className="mt-grid">
              <Form.Control type="text" placeholder="NRC" />
            </div>
          </div>

          <div className="grid-forms-proveedor">
            <div className="mt-grid">
              <Form.Control type="text" placeholder="Correo de contacto" />
            </div>

            <div className="mt-grid">
              <Form.Control type="text" placeholder="Correo de empresa" />
            </div>

            <div className="mt-grid">
              <Form.Control type="text" placeholder="Comentarios" />
            </div>
          </div>

          <div className="grid-forms-proveedor">
            <div className="mt-grid">
              <Form.Control type="text" placeholder="Teléfono de contacto" />
            </div>

            <div className="mt-grid">
              <Form.Control type="text" placeholder="Teléfono de empresa" />
            </div>

            <div className="mt-grid">
              <Form.Control type="text" placeholder="Teléfono de proveedor" />
            </div>
          </div>
        </div>
      </StyleNuevoProveedor>
    </Fragment>
  );
}

export default Registro;

const StyleNuevoProveedor = styled.div`
  .box-left-proveedor {
    margin-left: 18%;
    margin-top: 2%;
  }
  .grid-forms-proveedor {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 1%;
    margin-left: 1%;
    margin-right: 2%;
  }
  .mt-grid {
    margin-top: 10px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-proveedor {
      margin-left: 2%;
      margin-top: 2%;
    }
    .grid-forms-proveedor {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1%;
      margin-left: 1%;
      margin-right: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-proveedor {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-proveedor {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
`;
