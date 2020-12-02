import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { deleteTransporte } from "../../../../graphql/Mutations";
import { useHistory } from "react-router-dom";

function ButtonDesitions({
  submitSave,
  filename,
  idTransporte,
  setLoading,
  setIconType,
  setTextAlert,
  setshowAlert,
}) {
  const { push } = useHistory();
  const [updateTransporte] = useMutation(deleteTransporte);
  const [ExecuteDeleteTransporte, setExecuteDeleteTransporte] = useState(false);

  const deleteImage = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("filename", filename);
    axios
      .post(process.env.REACT_APP_BACKEND_FLASK + "delete", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setExecuteDeleteTransporte(true);
      })
      .catch(() => {
        setExecuteDeleteTransporte(true);
      });
  };

  useEffect(() => {
    if (ExecuteDeleteTransporte) {
      updateTransporte({
        variables: {
          id: idTransporte,
        },
      })
        .then(() => {
          setLoading(false);
          setIconType("success");
          setTextAlert("Eliminado correctamente");
          setshowAlert(true);
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/unidades-transporte");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          setIconType("success");
          setTextAlert(error.message);
          setshowAlert(true);
        });
    }
    // eslint-disable-next-line
  }, [ExecuteDeleteTransporte]);
  return (
    <Fragment>
      <StyleBtn>
        <div>
          <ul>
            <li>
              <button
                className="btn-opcion bg-eliminar"
                onClick={(e) => deleteImage(e)}
              >
                <strong>Eliminar</strong>
              </button>
              <Link to="/unidades-transporte">
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
        <br />
        <br />
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

  .bg-eliminar {
    transition: 0.3s;
    color: black;
    background: transparent;
  }
  .bg-eliminar:hover {
    transition: 0.3s;
    color: white;
    background: #d62828;
  }
`;
