import React, { Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
//icons
import homeIcon from "./iconos/home.svg";
import loginIcon from "./iconos/login.svg";
import empleadosIcon from "./iconos/empleados.svg";
import repuestosIcon from "./iconos/repuesto.svg";

//icons active
import homeIconActive from "./iconos-active/home.svg";
import loginIconActive from "./iconos-active/login.svg";
import empleadosIconActive from "./iconos-active/empleados.svg";
import repuestosIconActive from "./iconos-active/repuesto.svg";

function Navegacion() {
  let location = useLocation();
  return (
    <Fragment>
      <MediaQueriesNavs>
        <StyleNavegacion>
          <div className="wrapper-left">
            <div className="sidebar-left">
              <br />
              <div className="grid-sidebar bg-active">
                <div className="icon-sidebar-align">
                  <img
                    src={location.pathname === "/" ? homeIconActive : homeIcon}
                    alt="Inicio"
                  />
                </div>
                <div className="mt-txt">
                  <p>
                    <Link
                      to="/"
                      style={
                        location.pathname === "/"
                          ? { color: "#1DA1F2" }
                          : { color: "black" }
                      }
                    >
                      Inicio
                    </Link>
                  </p>
                </div>
              </div>
              <div className="grid-sidebar bg-active">
                <div className="icon-sidebar-align">
                  <img
                    src={
                      location.pathname === "/listado-repuestos"
                        ? repuestosIconActive
                        : repuestosIcon
                    }
                    alt="Listado de repuestos"
                  />
                </div>
                <div className="mt-txt">
                  <p
                    style={
                      location.pathname === "/listado-repuestos"
                        ? { color: "#1DA1F2" }
                        : { color: "black" }
                    }
                  >
                    <Link
                      to="/listado-repuestos"
                      style={
                        location.pathname === "/listado-repuestos"
                          ? { color: "#1DA1F2" }
                          : { color: "black" }
                      }
                    >
                      Respuestos
                    </Link>
                  </p>
                </div>
              </div>
              <div className="grid-sidebar bg-active">
                <div className="icon-sidebar-align">
                  <img
                    src={
                      location.pathname === "/listado-empleados"
                        ? empleadosIconActive
                        : empleadosIcon
                    }
                    alt="Listado de empleados"
                  />
                </div>
                <div className="mt-txt">
                  <p
                    style={
                      location.pathname === "/listado-empleados"
                        ? { color: "#1DA1F2" }
                        : { color: "black" }
                    }
                  >
                    <Link
                      to="/listado-empleados"
                      style={
                        location.pathname === "/listado-empleados"
                          ? { color: "#1DA1F2" }
                          : { color: "black" }
                      }
                    >
                      Empleados
                    </Link>
                  </p>
                </div>
              </div>
              <div className="grid-sidebar bg-active">
                <div className="icon-sidebar-align">
                  <img
                    src={
                      location.pathname === "/registro"
                        ? loginIconActive
                        : loginIcon
                    }
                    alt="Registro"
                  />
                </div>
                <div className="mt-txt">
                  <p
                    style={
                      location.pathname === "/registro"
                        ? { color: "#1DA1F2" }
                        : { color: "black" }
                    }
                  >
                    Login
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StyleNavegacion>

        {/* NAVBAR FOOTER */}
        <StyleNavFooter>
          <div className="navbar-zoom fixed-bottom grid-navigation">
            <div>
              <div className="img-center">
                <p align="center">
                  <img
                    src={location.pathname === "/" ? homeIconActive : homeIcon}
                    alt="Inicio"
                  />
                </p>
              </div>
              <p className="title-navegacion-active">
                <Link
                  to="/"
                  style={
                    location.pathname === "/"
                      ? { color: "#1DA1F2" }
                      : { color: "black" }
                  }
                >
                  Inicio
                </Link>
              </p>
            </div>
            <div>
              <div className="img-center">
                <p align="center">
                  <img
                    src={
                      location.pathname === "/listado-repuestos"
                        ? repuestosIconActive
                        : repuestosIcon
                    }
                    alt="Listado de repuestos"
                  />
                </p>
              </div>
              <p className="title-navegacion">
                <Link
                  to="/listado-repuestos"
                  style={
                    location.pathname === "/listado-repuestos"
                      ? { color: "#1DA1F2" }
                      : { color: "black" }
                  }
                >
                  Respuestos
                </Link>
              </p>
            </div>
            <div>
              <div className="img-center">
                <p align="center">
                  <img
                    src={
                      location.pathname === "/listado-empleados"
                        ? empleadosIconActive
                        : empleadosIcon
                    }
                    alt="Listado de empleados"
                  />
                </p>
              </div>
              <p className="title-navegacion">
                <Link
                  to="/listado-empleados"
                  style={
                    location.pathname === "/listado-empleados"
                      ? { color: "#1DA1F2" }
                      : { color: "black" }
                  }
                >
                  Empleados
                </Link>
              </p>
            </div>
            <div>
              <div className="img-center">
                <p align="center">
                  <img
                    src={
                      location.pathname === "/nuevo-usuario"
                        ? loginIconActive
                        : loginIcon
                    }
                    alt="Registro"
                  />
                </p>
              </div>
              <p className="title-navegacion">
              <Link
                  to="/nuevo-usuario"
                  style={
                    location.pathname === "/nuevo-usuario"
                      ? { color: "#1DA1F2" }
                      : { color: "black" }
                  }
                >
                  Registro
                </Link>
              </p>
            </div>
          </div>
        </StyleNavFooter>
      </MediaQueriesNavs>
    </Fragment>
  );
}

export default Navegacion;

const StyleNavegacion = styled.div`
  .wrapper-left {
    display: flex;
    position: relative;
  }
  .wrapper-left .sidebar-left {
    position: fixed;
    width: 240px;
    height: 100%;
    background-color: white;
    border-right: 0.5px solid #e6ecf0;
    font-size: 18px;
  }
  .grid-sidebar {
    display: grid;
    grid-template-columns: 20% 80%;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .bg-active {
    background-color: white;
    font-weight: bold;
  }
  .txt-active {
    color: "#1DA1F2";
  }
  .txt-color {
    color: red;
  }
  .mt-txt {
    margin-top: 4px;
  }
`;

const StyleNavFooter = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  /* NAVBAR FOOTER */

  .navbar-zoom {
    background-color: white;
    font-size: 12px;
    border-top: 1px solid #e6ecf0;
  }
  .navbar-zoom {
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }

  .grid-navigation {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
  .title-navegacion-active {
    display: block;
    text-align: center;
  }
  .title-navegacion {
    display: block;
    text-align: center;
  }
`;

const MediaQueriesNavs = styled.div`
  @media (max-width: 1025px) {
    .wrapper-left {
      display: none;
    }
  }

  @media (min-width: 1025px) {
    .navbar-zoom {
      display: none;
    }
  }
`;
