import React from "react";
import { Fragment } from "react";
import styled from "styled-components";

function NavegacionTop() {
  return (
    <Fragment>
      <StyleNavTop>
        {/* NAVBAR TOP MOBILE */}
        <div className="top-navbar-mobile">
          <StyleDropdown>
            <div className="flex-icons--nav-mobile">
              <div className="container-dropdown" style={{ float: "right" }}>
                <span className="btn">
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
                </span>
              </div>
            </div>
          </StyleDropdown>
        </div>
        {/* NAVBAR TOP DESKTOP */}
        <header className="top-navbar fixed-top-navbar">
          <StyleDropdown>
            <div className="flex-icons-right">
              <div className="grid-icons-right">
                <div className="container-dropdown" style={{ float: "right" }}>
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
