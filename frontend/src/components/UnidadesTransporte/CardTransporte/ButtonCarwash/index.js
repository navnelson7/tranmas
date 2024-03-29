import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { StyleLoaderEspera } from "../ButtonAccidentes";

function ButtonCarwash({ idUnidadTransporte }) {
  return (
    <Fragment>
      <StyleLoaderEspera>
        <Link
          title="Control de consumo de carwash"
          to={`/tabla/consumo/carwash/${idUnidadTransporte}`}
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
                        data-prefix="fad"
                        data-icon="car-wash"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 464 512"
                        width="30px"
                        height="30px"
                      >
                        <g className="fa-group">
                          <path
                            fill="currentColor"
                            d="M349.33,85.33C349.33,61.77,392,0,392,0s42.67,61.77,42.67,85.33a42.67,42.67,0,0,1-85.34,0ZM400,448H344v32a32,32,0,0,0,32,32h32a32,32,0,0,0,32-32V433.94A63.67,63.67,0,0,1,400,448ZM232,128a42.66,42.66,0,0,0,42.67-42.65v0C274.67,61.76,232,0,232,0s-42.67,61.77-42.67,85.33A42.69,42.69,0,0,0,232,128ZM340.07,254.18A48,48,0,0,0,295.5,224h-127a48,48,0,0,0-44.57,30.17L110.4,288H353.6ZM72,128a42.66,42.66,0,0,0,42.67-42.65v0C114.67,61.76,72,0,72,0S29.33,61.77,29.33,85.33A42.69,42.69,0,0,0,72,128ZM64,448a63.67,63.67,0,0,1-40-14.06V480a32,32,0,0,0,32,32H88a32,32,0,0,0,32-32V448Z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M424.49,292.91l-5.07-12.67-19.93-49.83a111.47,111.47,0,0,0-104-70.4h-127a111.45,111.45,0,0,0-104,70.4L44.58,280.23,39.51,292.9A64,64,0,0,0,0,352v32a64,64,0,0,0,64,64H400a64,64,0,0,0,64-64V352A64,64,0,0,0,424.49,292.91ZM123.93,254.18A48,48,0,0,1,168.5,224h127a48,48,0,0,1,44.57,30.17L353.6,288H110.4ZM72,399.8c-19.2,0-32-12.76-32-31.9S52.8,336,72,336s48,28.71,48,47.85S91.2,399.8,72,399.8Zm352-31.9c0,19.14-12.8,31.9-32,31.9s-48,3.19-48-15.95S372.8,336,392,336,424,348.76,424,367.9Z"
                          ></path>
                        </g>
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

export default ButtonCarwash;
