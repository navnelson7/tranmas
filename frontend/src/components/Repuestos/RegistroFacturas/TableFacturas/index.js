import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useSubscription } from "@apollo/client";
import { listenFacturaRepuesto } from "../../../../graphql/Suscription";
import { deleteregistroFacturaRepuestobyId } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";

function TableFacturas() {
  // ALERTAS
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [deleteFactura] = useMutation(deleteregistroFacturaRepuestobyId);
  const { data, loading, error } = useSubscription(listenFacturaRepuesto);

  const deletFacturaByid = (idSelected) => {
    setLoading(true);
    deleteFactura({
      variables: {
        id: idSelected,
      },
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Eliminado correctamente");
        }
      })
      .catch((error) => {
        setLoading(false);
        setTextAlert(error.message);
        setIconType("error");
        setshowAlert(true);
      });
  };
  if (loading || Loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p align="center">{`Error! ${error.message}`}</p>;
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleFactura>
        <div className="box-left-aire">
          <Link to="/registro/facturas/repuestos" variant="danger">
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>N° de factura</th>
                <th>Nombre de repuesto</th>
                <th>Cantidad Comprada</th>
                <th>Precio de repuiesto</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.registro_facturas.map((factura, index) => {
                return (
                  <tr key={factura.id}>
                    <td>{index + 1}</td>
                    <td>{factura.numero_factura}</td>
                    <td>{factura.repuesto.nombre}</td>
                    <td>{factura.cantidad_comprada}</td>
                    <td>{factura.precio_repuesto}</td>
                    <td>{factura.fecha}</td>
                    <td>
                      <Link
                        to={`/editar/facturas/repuestos/${factura.id}`}
                        variant="danger"
                        title="Editar"
                      >
                        <Button variant="info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </Link>
                      <Button variant="danger" title="Eliminar" className="ml-2">
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => deletFacturaByid(factura.id)}
                        />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </StyleFactura>
    </Fragment>
  );
}

export default TableFacturas;

const StyleFactura = styled.div`
  .box-left-aire {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-aire {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-aire {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-cards {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
`;
