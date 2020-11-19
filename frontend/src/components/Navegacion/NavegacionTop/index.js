import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import ContextInputSearch from "../../../context/ContextInputSearch";
import { useLocation, useHistory } from "react-router-dom";
import FiltroDropdown from "../Filtro";
import DropdownNotificaciones from "./DropdownNotificaciones";

function NavegacionTop() {
  const { pathname } = useLocation();
  const {push} = useHistory();
  const {
    StateSearch,
    setStateSearch,
    NombreField,
  } = useContext(ContextInputSearch);

  const EnterSearch = (e) => {
    if (e.which === 13) {
      if (pathname === "/proveedores") {
        push("/resultados-proveedores");
      }
    }
  };
  return (
    <Fragment>
      <StyleNavTop>
        {/* NAVBAR TOP MOBILE */}
        <div className="top-navbar-mobile">
          <div className="grid-navbar-mobile">
            <div>
              <label>
                Que deseas buscar?
                <input
                  type="text"
                  className="border-0-login form-control-login input-border-none"
                  placeholder={NombreField}
                  autoComplete="off"
                  value={StateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  onKeyPress={(e) => EnterSearch(e)}
                />
              </label>
            </div>
            <div>
              <FiltroDropdown />
            </div>
            <StyleDropdown>
              <div className="flex-icons--nav-mobile">
                <div className="container-dropdown" style={{ float: "right" }}>
                  <a href="#" className="btn">
                    <span
                      className="material-icons"
                      style={{
                        fontSize: "24px",
                        color: "#ffffff",
                      }}
                    >
                      notifications
                    </span>
                    <DropdownNotificaciones />
                  </a>
                </div>
                <div className="container-dropdown" style={{ float: "right" }}>
                  <a href="#" className="btn">
                    <img
                      className="img-nav-user-mobile"
                      src="https://yt3.ggpht.com/a/default-user=s88-rj"
                      alt=""
                      width="24px"
                      height="24px"
                    />
                    <div className="dropdown scroll-container">
                      <span>Cerrar Sesión</span>
                    </div>
                  </a>
                </div>
              </div>
            </StyleDropdown>
          </div>
        </div>
        {/* NAVBAR TOP DESKTOP */}
        <header className="top-navbar fixed-top-navbar">
          <div className="grid-nav-top">
            <div></div>
            <div className="grid-input-search">
              <div>
                <FiltroDropdown />
              </div>
              <div>
                <label>
                  Que deseas buscar?
                  <input
                    type="text"
                    className="border-0-login form-control-login input-border-none"
                    placeholder={NombreField}
                    autoComplete="off"
                    value={StateSearch}
                    onChange={(e) => setStateSearch(e.target.value)}
                    onKeyPress={(e) => EnterSearch(e)}
                  />
                </label>
              </div>
              <div className="box-search">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#6F6F6F" }}
                >
                  search
                </span>
              </div>
            </div>
            <StyleDropdown>
              <div className="flex-icons-right">
                <div className="grid-icons-right">
                  <div className="box-icons-right">
                    <div
                      className="container-dropdown"
                      style={{ float: "right" }}
                    >
                      <a href="#" className="btn">
                        <span
                          className="material-icons"
                          style={{
                            fontSize: "24px",
                            color: "#ffffff",
                            marginTop: "4px",
                          }}
                        >
                          notifications
                        </span>
                        <DropdownNotificaciones />
                      </a>
                    </div>
                  </div>
                  <div
                    className="container-dropdown"
                    style={{ float: "right" }}
                  >
                    <button className="btn">
                      <img
                        className="box-icons-right"
                        src="https://yt3.ggpht.com/a/default-user=s88-rj"
                        alt=""
                        width="32px"
                        height="32px"
                      />
                      <div className="dropdown scroll-container">
                        <span>Cerrar Sesión</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </StyleDropdown>
          </div>
        </header>
      </StyleNavTop>
    </Fragment>
  );
}

export default NavegacionTop;

const StyleNavTop = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  /*NAVBAR TOP*/

  /* MOBILE */
  @media (max-width: 1025px) {
    .top-navbar {
      display: none;
    }
    .top-navbar-mobile {
      width: 100%;
      padding: 10px;
      background-color: #3d50fa;
    }
    .img-nav-user-mobile {
      margin-right: 10px;
      margin-left: 10px;
      height: 24px;
      width: 24px;
      border-radius: 50px;
      margin-bottom: 5px;
    }
    .flex-icons--nav-mobile {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    .grid-navbar-mobile {
      display: grid;
      grid-template-columns: 75% 1% 25%;
    }

    /* INPUT SEARCH */

    .form-control-login {
      display: block;
      width: 100%;
      padding: 8px 8px;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: white;
      border: 0px solid #1a10a8;
      height: 30px;
    }

    .input-group-text {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      padding: 0.375rem 0.75rem;
      height: 20px;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      white-space: nowrap;
      border: 0px solid #000000;
    }
  }
  /*NAVBAR TOP DESKTOP */

  @media (min-width: 1025px) {
    .top-navbar-mobile {
      display: none;
    }
    .top-navbar {
      background-color: #3d50fa;
    }
    .top-navbar {
      padding: 10px;
    }
    .fixed-top-navbar {
      position: fixed;
      right: 0;
      bottom: 1; /* Para que este arriba */
      top: 0;
      left: 0;
      z-index: 1030;
    }

    .grid-nav-top {
      display: grid;
      grid-template-columns: 24% auto auto;
    }

    /* INPUT SEARCH */

    .form-control-login {
      display: block;
      width: 580px;
      padding: 8px 8px;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: white;
      border: 0px solid #1a10a8;
      height: 30px;
    }

    .input-group-text {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      padding: 0.375rem 0.75rem;
      height: 20px;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      white-space: nowrap;
      border: 0px solid #000000;
    }

    .input-border-none {
      /* eliminates the border when the input is active */
      border: 0px solid;
      outline: none;
    }

    .grid-input-search {
      display: grid;
      grid-template-columns: auto 580px auto;
    }

    .box-search {
      width: 70px;
      padding: 4px 4px;
      height: 30px;
      background-color: white;
      text-align: center;
      border-radius: 10px;
      border-radius: 0px 5px 5px 0px;
      -moz-border-radius: 0px 5px 5px 0px;
      -webkit-border-radius: 0px 5px 5px 0px;
      border: 0px solid #000000;
    }
    .youtube-icon-align {
      margin-top: 5px;
    }

    /* ICONS RIGHT */
    .flex-icons-right {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    .grid-icons-right {
      display: grid;
      grid-template-columns: auto auto auto;
    }
    .box-icons-right {
      margin-right: 10px;
      margin-left: 10px;
      height: 32px;
      width: 32px;
      border-radius: 50px;
    }
  }
`;

const StyleDropdown = styled.div`
  .container-dropdown {
    background-color: transparent;
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

  /* SCROLL CONTAINER */
  .scroll-container {
    overflow: scroll;
    height: auto;
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
