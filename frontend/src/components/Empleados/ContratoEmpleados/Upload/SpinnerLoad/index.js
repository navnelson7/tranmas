import React, { Fragment } from "react";
import styled from "styled-components";

function SpinnerLoad({
  Loader,
  setLoader,
  cancelUpload,
  MessageCancel,
  setMessageCancel,
  setAboutFiles // prop para al darle regresar borra las imagenes seleccionadas
}) {
  return (
    <Fragment>
      {MessageCancel === "" ? (
        <Fragment>
          <StyleLoader>
            <div className="center-loader mt-circle">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-back">
                    <p align="center" className="mt-icon">
                      <strong className="number-porcentaje">{Loader}</strong>
                      <span className="porcentaje-txt">%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StyleLoader>
          <br />
          <StyleButtonCancel>
            <div className="center">
              <button
                className="btn-opcion bg-cancelar"
                onClick={() => {
                  if (Loader === 100) {
                    setMessageCancel(""); 
                    setLoader(null);
                    setAboutFiles([])
                  } else {
                    cancelUpload();
                  }
                }}
              >
                <strong>{Loader === 100 ? "Regresar" : "Cancelar"}</strong>
              </button>
            </div>
          </StyleButtonCancel>
        </Fragment>
      ) : (
        <Fragment>
          <StyleLoader>
            <h3 className="mt-circle">
              <p className="center-loader">{MessageCancel}</p>
            </h3>
          </StyleLoader>
          <br />
          <StyleButtonCancel>
            <div className="center">
              {/* AL DAR CLICK PASA A NULL Y MUESTRA LA INTERFAZ DE LOS ARCHIVOS */}
              <button
                className="btn-opcion bg-cancelar"
                onClick={() => {
                  setMessageCancel("");
                  setLoader(null);
                }}
              >
                <strong>Regresar</strong>
              </button>
            </div>
          </StyleButtonCancel>
        </Fragment>
      )}
    </Fragment>
  );
}

export default SpinnerLoad;

const StyleLoader = styled.div`
  .cursor-pointer {
    cursor: pointer;
  }
  /* LOADER */
  .center-loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mt-icon {
    margin-top: 1.3em;
  }
  /*FLIP BOX*/
  .flip-box {
    background-color: transparent;
    width: 100px;
    height: 100px;
  }
  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
  }
  .flip-box-back {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .flip-box-back {
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    color: rgb(0, 0, 0);
  }
  .number-porcentaje {
    font-size: 40px;
  }
  .porcentaje-txt {
    font-size: 20px;
    margin-left: 1px;
  }
  @media (max-width: 1024px) {
    .mt-circle {
      margin-top: 50%;
    }
  }
  @media (min-width: 1024px) {
    .mt-circle {
      margin-top: 30%;
    }
  }
`;

const StyleButtonCancel = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-opcion {
    display: inline-block;
    font-weight: 400;
    height: 40px;
    width: 100px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    /* BORDER RADIUS */
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }
  .bg-cancelar {
    transition: 0.3s;
    color: black;
    background: transparent;
  }
  .bg-cancelar:hover {
    transition: 0.3s;
    color: white;
    background: #ef233c;
  }
`;
