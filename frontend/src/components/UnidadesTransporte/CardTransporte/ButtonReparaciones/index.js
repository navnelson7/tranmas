import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ButtonReparaciones({ idUnidadTransporte }) {
  return ( 
    <Fragment>
      <StyleLoaderEspera>
        <Link to={`/registro-taller/${idUnidadTransporte}`}>
          <div className="cursor-pointer">
            <div className="center-loader">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="center-loader relative-txt">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="wrench"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height="30px"
                        width="30px"
                      >
                        <path
                          fill="currentColor"
                          d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </StyleLoaderEspera>
    </Fragment>
  );
}

export default ButtonReparaciones;

const StyleLoaderEspera = styled.div`
  .cursor-pointer {
    cursor: pointer;
  }
  .relative-txt {
    position: relative;
    top: 35%;
  }
  /* LOADER */
  .center-loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*FLIP BOX*/
  .flip-box {
    background-color: transparent;
    width: 100px;
    height: 100px;
  }
  .flip-box-inner {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
  }
  .flip-box-front {
    position: absolute;
    color: rgb(0, 0, 0);
    width: 100px;
    height: 100px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    background: white;
  }
`;