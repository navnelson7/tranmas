import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ButtonDesitions({ linkCancel, submitSave }) {
  return (
    <Fragment>
      <StyleBtn>
        <div>
          <ul>
            <li>
              <Link to={linkCancel}>
                <button className="btn-opcion bg-cancelar">
                  <strong>Cancelar</strong>
                </button>
              </Link>
              <button
                className="btn-opcion bg-guardar"
                onClick={(e) => submitSave(e)}
              >
                <strong>Guardar</strong>
              </button>
            </li>
          </ul>
        </div>
      </StyleBtn>
    </Fragment>
  );
}

export default ButtonDesitions;

const StyleBtn = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: black;
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
    color: black;
    background: #e6ecf0;
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
