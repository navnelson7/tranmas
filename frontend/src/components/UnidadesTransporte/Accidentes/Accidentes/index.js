import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSubscription } from "@apollo/client";
import { listenAccidentes } from "../../../../graphql/Suscription";
import CardAccidente from "./CardAccidente";
import { ToastComponent } from "../../../Toast";

function Accidentes() {
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");

  const { id } = useParams();
  const { data, loading, error } = useSubscription(listenAccidentes, {
    variables: {
      id_unidad_transporte: id,
    },
  });

  if (error)
    return (
      <div className="box-center">
        <p>{error.message}</p>
      </div>
    );
  if (loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleCards>
        <div className="box-left-cards">
          <div className="container-viewport">
            <div className="d-flex justify-content-end mr-2">
              <Link to={`/registro/accidente/${id}`}>
                <Button variant="primary">Nuevo accidente</Button>
              </Link>
            </div>
            <div className="row hidden-md-up">
              {data.accidentes.map((accidente) => {
                return (
                  <CardAccidente
                    idUnidadTransporte={id}
                    key={accidente.id}
                    accidente={accidente}
                    setIconType={setIconType}
                    setTextAlert={setTextAlert}
                    setshowAlert={setshowAlert}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </StyleCards>
    </Fragment>
  );
}
export default Accidentes;

const StyleCards = styled.div`
  .box-left-cards {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  .container-viewport {
    min-height: 120vh;
    height: 100%;
  }

  .box-image {
    width: 100%;
    height: 180px;
    background-color: blue;
  }

  .box-placa {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .box-white {
    background: white;
  }
  .box-blue-top {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .box-blue-bottom {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-cards {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-cards {
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

  li {
    padding: 1rem;
    margin: 1rem;
    min-height: 100px;
  }
`;
