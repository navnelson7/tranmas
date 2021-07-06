import React, { Fragment, useEffect, useState } from "react";
import Repuesto from "./Repuesto";
import { Table, Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { getRepuestosInactivos } from "../../../graphql/Queries";

const ListadoRepuestos = () => {
  const [listadoRepuestos, setListadoRepuestos] = useState([]);

  const { data, loading } = useQuery(getRepuestosInactivos);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (data) {
      setListadoRepuestos(data.repuestos);
    }
    // eslint-disable-next-line
  }, [loading, data]);
  if (loading) return <p>cargando</p>;
  return (
    <Fragment>
      <Container>
        <div className="box-left">
          <h1>PAPELERA DE REPUESTO</h1>
          <br />
          <br />
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Marca</th>
                <th>Cantidad</th>
                <th>U. Medida</th>
                <th>Precio</th>
                <th>Proveedor</th>
                <th>Estado</th>
                <th>Km para cambio</th>
                <th colSpan="3">acciones</th>
              </tr>
            </thead>
            <tbody>
              {listadoRepuestos.length === 0 ? (
                <tr>
                  <td>No hay repuestos</td>
                </tr>
              ) : (
                listadoRepuestos.map((repuesto) => (
                  <tr key={repuesto.id}>
                    <Repuesto
                      repuesto={repuesto}
                      setListadoRepuestos={setListadoRepuestos}
                      listadoRepuestos={listadoRepuestos}
                    />
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </Fragment>
  );
};

export default ListadoRepuestos;
