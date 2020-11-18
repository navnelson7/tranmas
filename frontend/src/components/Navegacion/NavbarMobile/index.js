import React, { Fragment } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
//icons
import homeIcon from "../iconos/home.svg";
import loginIcon from "../iconos/login.svg";
import empleadosIcon from "../iconos/empleados.svg";
import repuestosIcon from "../iconos/repuesto.svg";
import proveedorIcon from "../iconos/proveedor.svg";

//icons active
import homeIconActive from "../iconos-active/home.svg";
import loginIconActive from "../iconos-active/login.svg";
import empleadosIconActive from "../iconos-active/empleados.svg";
import repuestosIconActive from "../iconos-active/repuesto.svg";
import proveedorIconActive from "../iconos-active/proveedor.svg";

function NavbarMobile() {
  let location = useLocation();
  return (
    <Fragment>
      {/* NAVBAR FOOTER */}
      <StyleNavFooter>
        <div className="navbar-zoom fixed-bottom grid-navigation">
          <div>
            <Link
              to="/"
              style={
                location.pathname === "/"
                  ? { color: "#1DA1F2" }
                  : { color: "black" }
              }
            >
              <div className="img-center">
                <p align="center">
                  <img
                    src={location.pathname === "/" ? homeIconActive : homeIcon}
                    height="32px"
                    width="32px"
                    alt="Inicio"
                  />
                </p>
              </div>
              <p className="title-navegacion-active">Inicio</p>
            </Link>
          </div>

          <div>
            <Link
              to="/listado-repuestos"
              style={
                location.pathname === "/listado-repuestos"
                  ? { color: "#1DA1F2" }
                  : { color: "black" }
              }
            >
              <div className="img-center">
                <p align="center">
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
                </p>
              </div>
              <p className="title-navegacion">Respuestos</p>
            </Link>
          </div>

          <div>
            <Link
              to="/listado-empleados"
              style={
                location.pathname === "/listado-empleados"
                  ? { color: "#1DA1F2" }
                  : { color: "black" }
              }
            >
              <div className="img-center">
                <p align="center">
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
                </p>
              </div>
              <p className="title-navegacion">Empleados</p>
            </Link>
          </div>

          <div>
            <Link
              to="/nuevo-usuario"
              style={
                location.pathname === "/nuevo-usuario"
                  ? { color: "#1DA1F2" }
                  : { color: "black" }
              }
            >
              <div className="img-center">
                <p align="center">
                  <img
                    src={
                      location.pathname === "/nuevo-usuario"
                        ? loginIconActive
                        : loginIcon
                    }
                    height="32px"
                    width="32px"
                    alt="Registro"
                  />
                </p>
              </div>
              <p className="title-navegacion">Registro</p>
            </Link>
          </div>
        </div>
      </StyleNavFooter>
    </Fragment>
  );
}

export default NavbarMobile;

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
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
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
