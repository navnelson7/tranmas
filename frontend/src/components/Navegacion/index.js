import React, { Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
//icons
import homeIcon from "./iconos/home.svg";
import loginIcon from "./iconos/login.svg";
import empleadosIcon from "./iconos/empleados.svg";
import repuestosIcon from "./iconos/repuesto.svg";
import proveedorIcon from "./iconos/proveedor.svg";
import busIcon from "./iconos/bus.svg";

//icons active
import homeIconActive from "./iconos-active/home.svg";
import loginIconActive from "./iconos-active/login.svg";
import empleadosIconActive from "./iconos-active/empleados.svg";
import repuestosIconActive from "./iconos-active/repuesto.svg";
import proveedorIconActive from "./iconos-active/proveedor.svg";
import busIconActive from "./iconos-active/bus.svg";

import NavbarMobile from "./NavbarMobile";

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
                    height="32px"
                    width="32px"
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
                    height="32px"
                    width="32px"
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
                      location.pathname === "/unidades-transporte"
                        ? busIconActive
                        : busIcon
                    }
                    height="32px"
                    width="32px"
                    alt="Listado de repuestos"
                  />
                </div>
                <div className="mt-txt">
                  <p
                    style={
                      location.pathname === "/unidades-transporte"
                        ? { color: "#1DA1F2" }
                        : { color: "black" }
                    }
                  >
                    <Link
                      to="/unidades-transporte"
                      style={
                        location.pathname === "/unidades-transporte"
                          ? { color: "#1DA1F2" }
                          : { color: "black" }
                      }
                    >
                      Unidades
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
                    height="32px"
                    width="32px"
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
                      location.pathname === "/proveedores"
                        ? proveedorIconActive
                        : proveedorIcon
                    }
                    height="32px"
                    width="32px"
                    alt="Listado de empleados"
                  />
                </div>
                <div className="mt-txt">
                  <p
                    style={
                      location.pathname === "/proveedores"
                        ? { color: "#1DA1F2" }
                        : { color: "black" }
                    }
                  >
                    <Link
                      to="/proveedores"
                      style={
                        location.pathname === "/proveedores"
                          ? { color: "#1DA1F2" }
                          : { color: "black" }
                      }
                    >
                      Proveedores
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
                    height="32px"
                    width="32px"
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
        <NavbarMobile />
      </MediaQueriesNavs>
    </Fragment>
  );
}

export default Navegacion;

const StyleNavegacion = styled.div`
  .wrapper-left {
    display: flex;
    position: relative;
    margin-top: 35px;
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
