import React, { useContext } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import ContextInputSearch from "../../../context/ContextInputSearch";
import { useLocation } from "react-router-dom";
import FiltroDropdown from "../Filtro";

function NavegacionTop() {
  const { pathname } = useLocation();
  const {
    StateSearch,
    setStateSearch,
    setExecuteFilter,
    ExecuteFilter,
    NombreField,
  } = useContext(ContextInputSearch);

  const EnterSearch = (e) => {
    if (e.which === 13) {
      if (pathname === "/proveedores") {
        setExecuteFilter(!ExecuteFilter);
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
              <input
                type="text"
                className="border-0-login form-control-login input-border-none"
                placeholder={NombreField}
                id="search"
                autoComplete="off"
                value={StateSearch}
                onChange={(e) => setStateSearch(e.target.value.trim())}
                onKeyPress={(e) => EnterSearch(e)}
              />
            </div>
            <div>
              <FiltroDropdown />
            </div>
            <div className="flex-icons--nav-mobile">
              <img
                className="img-nav-user-mobile"
                src="https://yt3.ggpht.com/a/default-user=s88-rj"
                alt=""
              />
            </div>
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
                <input
                  type="text"
                  className="border-0-login form-control-login input-border-none"
                  placeholder={NombreField}
                  id="search"
                  autoComplete="off"
                  value={StateSearch}
                  onChange={(e) => setStateSearch(e.target.value.trim())}
                  onKeyPress={(e) => EnterSearch(e)}
                />
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
            <div className="flex-icons-right">
              <div className="grid-icons-right">
                <div className="box-icons-right">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "24px",
                      color: "#ffffff",
                      marginTop: "5px",
                    }}
                  >
                    apps
                  </span>
                </div>
                <div className="box-icons-right">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "24px",
                      color: "#ffffff",
                      marginTop: "5px",
                    }}
                  >
                    notifications
                  </span>
                </div>
                <div>
                  <img
                    className="box-icons-right"
                    src="https://yt3.ggpht.com/a/default-user=s88-rj"
                    alt=""
                  />
                </div>
              </div>
            </div>
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
    }
    .flex-icons--nav-mobile {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    .grid-navbar-mobile {
      display: grid;
      grid-template-columns: 80% 1% 20%;
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
