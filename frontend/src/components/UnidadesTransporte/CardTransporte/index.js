import React, { Fragment } from "react";
import styled from "styled-components";
import ButtonAccidentes from "./ButtonAccidentes";
import ButtonFuel from "./ButtonFuel";
import ButtonGraphic from "./ButtonGraphic";
import ButtonReparaciones from "./ButtonReparaciones";
import ButtonAireAcondicionado from "./ButtonAireAcondicionado";
import Image from "./Image";

function CardTransporte({ unidad }) {
  return (
    <Fragment>
      <div className="col-md-4" key={unidad.id}>
        <div className="card mt-3">
          <div className="card-block stilo">
            <Image
              src={`${process.env.REACT_APP_BACKEND_FLASK}images/${unidad.image}`}
              numero_pasajeros={unidad.numero_pasajeros}
              marca={unidad.marca_transporte.marca}
              id={unidad.id}
            />
            <StyleGridCircle>
              <div className="grid-circle-card scroll-cards">
                <ButtonFuel id={unidad.id} />
                <ButtonGraphic idUnidadTransporte={unidad.id} />
                <ButtonReparaciones idUnidadTransporte={unidad.id} />
                <ButtonAccidentes idUnidadTransporte={unidad.id} />
                <ButtonAireAcondicionado idUnidadTransporte={unidad.id} />
              </div>
            </StyleGridCircle>
            <br />
            <div className="box-placa">
              <div className="box-blue-top">EL SALVADOR</div>
              <div className="box-white">
                <strong>{unidad.numero_placa}</strong>
              </div>
              <div className="box-blue-bottom">CENTRO AMERICA</div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
const StyleGridCircle = styled.div`
  .grid-circle-card {
    display: grid;
    grid-template-columns: 25% 25% 25% 25% 25%;
    grid-column-gap: 10%;
    margin-left: 5px;
  }
  /* SCROLL CARDS */
  .scroll-cards {
    overflow: scroll;
    height: 100%;
    width: auto;
    overflow-y: hidden;
  }
  .scroll-cards::-webkit-scrollbar {
    height: 10px;
  }
  /* Track */
  .scroll-cards::-webkit-scrollbar-track {
    background: #eaeaea;
  }
  /* Handle */
  .scroll-cards::-webkit-scrollbar-thumb {
    background: #eaeaea;
  }
  /* Handle on hover */
  .scroll-cards::-webkit-scrollbar-thumb:hover {
    background: #f20089;
  }
`;

export default React.memo(CardTransporte, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
