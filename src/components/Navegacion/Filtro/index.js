import React from "react";
import styled from "styled-components";
import iconFilter from "./filtro.svg";

function FiltroDropdown() {
  return (
    <StyleDropdown>
      <div className="container-dropdown" style={{ float: "right" }}>
        <button className="btn">
          <img src={iconFilter} alt="" />
          <div className="dropdown scroll-container">
            <span>Nombre de proveedor</span>
            <span>Nit</span>
            <span>Teléfono de contacto</span>
            <span>Teléfono de empresa</span>
            <span>Contacto de proveedor</span>
            <span>NRC</span>
            <span>Activo</span>
            <span>Fecha de actualización</span>
            <span>Correo de contacto</span>
            <span>Correo de empresa</span>
            <span>Comentarios</span>
          </div>
        </button>
      </div>
    </StyleDropdown>
  );
}

export default FiltroDropdown;

const StyleDropdown = styled.div`
  .container-dropdown {
    background-color: white;
    position: relative;
    border-radius: 5px 0px 0px 5px;
    -moz-border-radius: 5px 0px 0px 5px;
    -webkit-border-radius: 5px 0px 0px 5px;
    border: 0px solid #000000;
  }
  .btn {
    outline: 0;
    border: 0;
    overflow: hidden;
    cursor: pointer;
    background-color: transparent;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  .btn:focus .dropdown,
  .btn:active .dropdown {
    transform: translate(0, 20px);
    opacity: 1;
    visibility: visible;
  }
  .btn .material-icons {
    border-radius: 100%;
    animation: ripple 0.6s linear infinite;
  }
  .btn .dropdown {
    position: absolute;
    width: 100px;
    margin-left: -55px;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    opacity: 0;
    background-color: white;
    visibility: hidden;
    transition: 0.3s ease;
    z-index: 1;
  }
  span:hover {
    color: white;
    background-color: #3d50fa;
  }
  .btn .dropdown span {
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 16px 0;
    font-size: 13px;
    text-decoration: none;
  }
  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
        0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1),
        0 0 0 60px rgba(255, 255, 255, 0.1);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
        0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1),
        0 0 0 80px rgba(255, 255, 255, 0);
    }
  }

  /* SCROLL CONTAINER */
  .scroll-container {
    overflow: scroll;
    height: 300px;
    width: auto;
    overflow-x: hidden;
    transition: 1s;
  }
  .scroll-container::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  .scroll-container::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  .scroll-container::-webkit-scrollbar-thumb {
    background: #d6d0d0;
  }
  /* Handle on hover */
  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: #3c50fa;
    border-radius: 5px;
  }
`;
