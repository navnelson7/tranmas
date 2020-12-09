import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ButtonFuel({ id }) {
  return (
    <Fragment>
      <StyleLoaderEspera>
        <Link to={`/registro-combustible/${id}`} className="cursor-pointer">
          <div className="center-loader">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div className="mt-icon center-loader relative-txt">
                    <svg
                      height="24px"
                      width="24px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="gas-pump"
                      class="svg-inline--fa fa-gas-pump fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="white"
                        d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flip-box-back">
                  <p align="center" className="mt-icon">
                    <strong className="number-porcentaje">4</strong>
                    <span className="gal-txt">gal</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </StyleLoaderEspera>
    </Fragment>
  );
}

export default ButtonFuel;

const StyleLoaderEspera = styled.div`
  .cursor-pointer {
    cursor: pointer;
  }
  .relative-txt {
    position: relative;
    top: 44%;
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
    perspective: 1000px;
  }
  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }
  .flip-box-front {
    position: absolute;
    color: rgb(0, 0, 0);
    width: 100px;
    height: 100px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 50%;
    animation: gasolina 1.5s ease-in-out infinite;
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    background: #ef233c;
  }
  /* ANIMACION DE JUEGO PARA TAZA */
  @keyframes gasolina {
    0%,
    100% {
      clip-path: polygon(
        0 37%,
        12% 37%,
        25% 45%,
        36% 52%,
        57% 60%,
        82% 53%,
        100% 32%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0 55%,
        17% 61%,
        36% 64%,
        51% 59%,
        68% 45%,
        84% 42%,
        100% 43%,
        100% 100%,
        0% 100%
      );
    }
  }
  .flip-box-back {
    position: absolute;
    width: 100px;
    height: 100px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 50%;
  }
  .flip-box-back {
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    color: rgb(0, 0, 0);
    transform: rotateY(180deg);
  }
  .number-porcentaje {
    font-size: 40px;
  }
  .gal-txt {
    font-size: 20px;
    margin-left: 1px;
  }
`;
