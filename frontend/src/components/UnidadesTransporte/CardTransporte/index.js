import React, { Fragment } from "react";
import styled from "styled-components";
import ButtonFuel from "./ButtonFuel";
import ButtonGraphic from "./ButtonGraphic";
import Image from "./Image";

function CardTransporte({ unidad }) {
  return (
    <Fragment>
      <div className="col-md-4" key={unidad.id}>
        <div className="card mt-3">
          <div className="card-block">
            <Image
              src={`${process.env.REACT_APP_BACKEND_FLASK}images/${unidad.image}`}
              numero_pasajeros={unidad.numero_pasajeros}
              marca={unidad.marca_transporte.marca}
              id={unidad.id}
            />
            <StyleGridCircle>
              <div className="grid-circle-card">
                <div>
                  <ButtonFuel id={unidad.id} />
                </div>
                <ButtonGraphic />
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
    grid-template-columns: 50% 50%;
  }
`;

export default React.memo(CardTransporte, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
