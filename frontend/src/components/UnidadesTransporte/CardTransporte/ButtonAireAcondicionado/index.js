import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { StyleLoaderEspera } from "../ButtonAccidentes";
function ButtonAireAcondicionado({ idUnidadTransporte }) {
  return (
    <Fragment>
      <StyleLoaderEspera>
        <Link
          title="Reparaciones de aire acondicionado"
          to={`/tabla/aire/acondicionado/${idUnidadTransporte}`}
        >
          <div className="cursor-pointer">
            <div className="center-loader">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="center-loader relative-txt">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="air-conditioner"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="30px"
                        height="30px"
                      >
                        <path
                          fill="currentColor"
                          d="M544,0H32A32,32,0,0,0,0,32V192a32,32,0,0,0,32,32H544a32,32,0,0,0,32-32V32A32,32,0,0,0,544,0Zm0,192H32V32H544ZM72,160H504a8,8,0,0,0,8-8V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v16A8,8,0,0,0,72,160ZM224,424a56,56,0,0,1-56,56H152a56.09,56.09,0,0,1-54.79-67.76c5.36-26.18,29.68-44.24,56.4-44.24H168a8,8,0,0,0,8-8V344a8,8,0,0,0-8-8H152a88.09,88.09,0,0,0-87.57,96.78C68.88,478.5,110,512,155.91,512H168a88,88,0,0,0,88-88V256H224ZM420.1,304H408a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h16a56.09,56.09,0,0,1,54.79,67.76c-5.36,26.18-29.68,44.24-56.4,44.24H408a56,56,0,0,1-56-56V256H320V392a88,88,0,0,0,88,88h16a88.09,88.09,0,0,0,87.57-96.78C507.12,337.5,466,304,420.1,304Z"
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

export default ButtonAireAcondicionado;
