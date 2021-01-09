import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ButtonGraphic({ idUnidadTransporte }) {
  return (
    <Fragment>
      <StyleLoaderEspera>
        <Link to={`/estadisticas/combustible/${idUnidadTransporte}`}>
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
                        data-icon="chart-bar"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height="30px"
                        width="30px"
                      >
                        <path
                          fill="currentColor"
                          d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
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

export default ButtonGraphic;

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
