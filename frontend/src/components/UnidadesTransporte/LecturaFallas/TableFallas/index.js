import React, { Fragment } from "react";
import styled from "styled-components";
import { useSubscription } from "@apollo/client";
import { listenNombresDeRepuestos } from "../../../../graphql/Suscription";
import RowDetalleTaller from "./RowDetalleTaller";

function LecturaFallas() {
  const NombresRepuestos = useSubscription(listenNombresDeRepuestos);

  if (NombresRepuestos.loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (NombresRepuestos.error)
    return (
      <p align="box-center">{`Error! ${NombresRepuestos.error.message}`}</p>
    );
  return (
    <Fragment>
      <StyleAire>
        <br/>
          <h2 className="center-box">Lectura de frecuencia en fallas</h2>
        <div className="box-left-aire">
          {NombresRepuestos.data.repuestos.map((repuestos) => {
            return (
              <Fragment key={repuestos.id}>
                <RowDetalleTaller
                  idRepuesto={repuestos.id}
                  nombreRepuesto={repuestos.nombre}
                />
              </Fragment>
            );
          })}
        </div>
      </StyleAire>
    </Fragment>
  );
}

export default LecturaFallas;

const StyleAire = styled.div`
  .box-left-aire {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-aire {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-aire {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-cards {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
`;
