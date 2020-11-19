import React, { Fragment, useContext, useState } from "react";
import { useSubscription, useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import ContextInputSearch from "../../../context/ContextInputSearch";
import { StyleTable } from "../index";
import { Link } from "react-router-dom";
import { ToastComponent } from "../../Toast";
import { updateActivoProveedor } from "../../../graphql/Mutations";
import { Spinner } from "react-bootstrap";

function ResultFilter() {
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Proveedores, setProveedores] = useState([]);
  const { StateSearch, SelectField } = useContext(ContextInputSearch);

  //LAZY QUERIE OF FILTER
  const GET_FILTER = gql`
  subscription($text: String) {
    proveedores(where: { ${SelectField}: { _similar: $text }, activo: {
      _eq: true
    } }) {
      id
      nombre_proveedor
      nit
      telefono_contacto
      telefono_empresa
      contacto_proveedor
      nrc
      activo
      updated_at
      email_contacto
      email_empresa
      comentarios
    }
  }
  `;
  const GET_FILTER_DATE = gql`
  subscription($text: date) {
      proveedores(where: { updated_at: { _eq: $text } }) {
        id
        nombre_proveedor
        nit
        telefono_contacto
        telefono_empresa
        contacto_proveedor
        nrc
        activo
        updated_at
        email_contacto
        email_empresa
        comentarios
      }
    }
  `;

  const { data, loading } = useSubscription(
    SelectField === "updated_at" ? GET_FILTER_DATE : GET_FILTER,
    {
      variables: { text: StateSearch },
    }
  );
  //EDITAR
  const [updateProveedor] = useMutation(updateActivoProveedor);

  const updateProveedorSubmit = (e, idSelected) => {
    e.preventDefault();
    updateProveedor({ variables: { id: idSelected, activo: false } })
      .then((res) => {
        //ELIMINARLO DE LA VISTA
        if (res.data) {
          const ProveedoresTotales = Proveedores.filter(
            (proveedor) => proveedor.id !== idSelected
          );
          setProveedores(ProveedoresTotales);
          setTextAlert("Eliminado correctamente");
          setIconType("success");
          setshowAlert(true);
          setTimeout(() => {
            setshowAlert(false);
          }, 2000);
        }
      })
      .catch(() => {
        setTextAlert("Ocurrio un error");
        setIconType("error");
        setshowAlert(true);
        setTimeout(() => {
          setshowAlert(false);
        }, 2000);
      });
  };

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleTable>
        <div>
          <div className="scroll-container">
            <table className="rwd-table table-left shawdow">
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th>N°</th>
                  <th>Nombre de Proveedor</th>
                  <th>NIT</th>
                  <th>Teléfono de Contacto</th>
                  <th>Teléfono de Empresa</th>
                  <th>Contacto de Proveedor</th>
                  <th>Correo de contacto</th>
                  <th>Correo de empresa</th>
                  <th>NRC</th>
                  <th>Comentarios</th>
                  <th>Fecha</th>
                </tr>
                {data.proveedores.map((proveedor, index) => {
                  return proveedor.activo ? (
                    <tr key={proveedor.id}>
                      <td
                        data-th=""
                        className="hover-options"
                        onClick={(e) => updateProveedorSubmit(e, proveedor.id)}
                      >
                        <svg
                          className="hover-options"
                          fill="#A18D8F"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        </svg>
                      </td>
                      <td data-th="" className="hover-options">
                        <Link to={`/actualizar-proveedor/${proveedor.id}`}>
                          <svg
                            className="hover-options"
                            fill="#A18D8F"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                          </svg>
                        </Link>
                      </td>
                      <td data-th="N°">
                        {index + 1} {proveedor.activo}
                      </td>
                      <td data-th="Nombre">{proveedor.nombre_proveedor}</td>
                      <td data-th="NIT">{proveedor.nit}</td>
                      <td data-th="Teléfono de Contacto">
                        {proveedor.telefono_contacto}
                      </td>
                      <td data-th="Teléfono de Empresa">
                        {proveedor.telefono_empresa}
                      </td>
                      <td data-th="Contacto de Proveedor">
                        {proveedor.contacto_proveedor}
                      </td>
                      <td data-th="Correo de contacto">
                        {proveedor.email_contacto}
                      </td>
                      <td data-th="Correo de empresa">
                        {proveedor.email_empresa}
                      </td>
                      <td data-th="NRC">{proveedor.nrc}</td>
                      <td data-th="NRC">{proveedor.comentarios}</td>
                      <td data-th="Fecha">{proveedor.updated_at}</td>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br />
      </StyleTable>
    </Fragment>
  );
}

export default ResultFilter;
