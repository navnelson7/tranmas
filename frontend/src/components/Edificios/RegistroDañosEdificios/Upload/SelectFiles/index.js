import React, { Fragment, useRef } from "react";
import styled from "styled-components";
function SelectFiles({ changeFiles }) {
  const refFile = useRef(null);
  return (
    <Fragment>
      <StyleUpload>
        <div className="mt">
          <div className="center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="upload"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height="150px"
              width="150px"
            >
              <path
                fill="currentColor"
                d="M528 288H384v-32h64c42.6 0 64.2-51.7 33.9-81.9l-160-160c-18.8-18.8-49.1-18.7-67.9 0l-160 160c-30.1 30.1-8.7 81.9 34 81.9h64v32H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80L288 48l160 160H336v160h-96V208H128zm400 256H48V336h144v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32h144v128zm-40-64c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z"
              ></path>
            </svg>
          </div>
          <div className="center">
            <p>Selecciona una o multiples imagenes</p>
          </div>
          <div className="center">
            <input
              ref={refFile}
              onChange={(e) => changeFiles(e)}
              className="display-input"
              multiple
              type="file"
            />
            <button
              className="btn-opcion bg-guardar"
              onClick={() => refFile.current.click()}
            >
              <strong>Seleccionar Archivos</strong>
            </button>
          </div>
        </div>
      </StyleUpload>
    </Fragment>
  );
}

export default SelectFiles;

const StyleUpload = styled.div`
  .display-input {
    display: none;
  }
  .mt {
    margin-top: 25%;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-opcion {
    display: inline-block;
    font-weight: 400;
    height: 40px;
    width: 200px;
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

  .bg-guardar {
    transition: 0.3s;
    color: #ffffff;
    background: #3d50fa;
  }
  .bg-guardar:hover {
    transition: 0.3s;
    color: #ffffff;
    background: #1f30cc;
  }
`;
