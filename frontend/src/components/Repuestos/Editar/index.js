import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Spinner } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { getRepuestosById } from "../../../graphql/Queries";
import { updateRepuestoOne } from "../../../graphql/Mutations";

import { ToastComponent } from "../../Toast";

function EditarRepuestos() {
  const { push } = useHistory();
  const params = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const [newRepuesto, setnewRepuesto] = useState({});

  const { loading, error, data } = useQuery(getRepuestosById, {
    variables: { id: params ? params.id : "" },
  });

  const [updateProveedor] = useMutation(updateRepuestoOne);
  useEffect(() => {
    let datos = {};
    datos = data === undefined ? {} : data.repuestos_by_pk;
    setnewRepuesto(datos);
  }, [data]);

  const changeProveedor = (e) => {
    setnewRepuesto({
      ...newRepuesto,
      [e.target.name]: e.target.value,
    });
  };

  const submitProveedor = (e) => {
    e.preventDefault();
    setnewRepuesto({
      ...newRepuesto,
      updated_at: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
    });
    updateProveedor({
      variables: newRepuesto
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/listado-repuestos");
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setTextAlert("Ocurrio un problema");
        setIconType("error");
        setshowAlert(true);
      });
  };
  if (loading)
    return (
      <Fragment>
        <div className="box-center">
          <Spinner animation="border" variant="primary" />
        </div>
      </Fragment>
    );
  if (error) return <p align="center">{`Error! ${error.message}`}</p>
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <br />
      {Loading ? (
        <div className="box-center">
          <Spinner />
        </div>
      ) : null}
      <StyleNuevoProveedor>
        <div className="box-left-proveedor">
          <h2>Editar Proveedor</h2>
          <div className="grid-forms-proveedor">
            <div className="mt-grid">
              Producto
              <Form.Control
                type="text"
                onChange={(e) => changeProveedor(e)}
                name="nombre"
                placeholder="Nombre de Repuesto"
                value={newRepuesto ? newRepuesto.nombre : ""}
              />
            </div>

            <div className="mt-grid">
              <Form.Control
                type="text"
                onChange={(e) => changeProveedor(e)}
                name="cantidad"
                placeholder="Cantidad"
                value={newRepuesto ? newRepuesto.cantidad : ""}
              />
            </div>

            <div className="mt-grid">
              <Form.Control
                type="text"
                onChange={(e) => changeProveedor(e)}
                name="codigo_repuesto"
                placeholder="Código de repuesto"
                value={newRepuesto ? newRepuesto.codigo_repuesto : ""}
              />
            </div>
          </div>

          <div className="grid-forms-proveedor">
            <div className="mt-grid">
              <Form.Control
                type="text"
                onChange={(e) => changeProveedor(e)}
                name="precio"
                placeholder="Precio"
                value={newRepuesto ? newRepuesto.precio : ""}
              />
            </div>

            <div className="mt-grid">
              <Form.Control
                type="text"
                onChange={(e) => changeProveedor(e)}
                name="numero_factura"
                placeholder="Número de factura"
                value={newRepuesto ? newRepuesto.numero_factura : ""}
              />
            </div>
          </div>
        </div>
      </StyleNuevoProveedor>
      <br />
      <StyleBtn>
        <div>
          <ul>
            <li>
              <Link to="/listado-repuestos">
                <button className="btn-opcion bg-cancelar">
                  <strong>Cancelar</strong>
                </button>
              </Link>
              <button
                className="btn-opcion bg-guardar"
                onClick={(e) => submitProveedor(e)}
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

export default EditarRepuestos;

const StyleNuevoProveedor = styled.div`
  .box-left-proveedor {
    margin-left: 18%;
    margin-top: 2%;
  }
  .grid-forms-proveedor {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 1%;
    margin-left: 1%;
    margin-right: 2%;
  }
  .mt-grid {
    margin-top: 10px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-proveedor {
      margin-left: 2%;
      margin-top: 2%;
    }
    .grid-forms-proveedor {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1%;
      margin-left: 1%;
      margin-right: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-proveedor {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-proveedor {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
`;

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
