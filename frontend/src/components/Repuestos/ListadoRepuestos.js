import React, { Fragment, useEffect, useState } from "react";
import Repuesto from "./Repuesto";
import { Table, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import {
  faUserEdit,
  faScroll,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { getRepuestos } from "../../graphql/Queries";
import InputSearch from "./InputSearch";

const ListadoRepuestos = () => {
  const [listadoRepuestos, setListadoRepuestos] = useState([]);

  const { data, loading } = useQuery(getRepuestos);

  useEffect(() => {
    if (data) {
      setListadoRepuestos(data.repuestos);
    }
    // eslint-disable-next-line
  }, [data]);
  if (loading) return <p>cargando</p>;
  return (
    <Fragment>
      <Container>
        <div className="box-left">
          <h1>LISTADO DE REPUESTO</h1>
          <Link to={`/formulario-repuestos`} variant="danger">
            <Button variant="info">
              <FontAwesomeIcon icon={faUserEdit} /> Nuevo Repuesto
            </Button>
          </Link>

          <Link className="ml-3" to="/facturas/repuestos" variant="danger">
            <Button variant="primary">
              <FontAwesomeIcon icon={faScroll} /> Facturas de repuestos
            </Button>
          </Link>
          <Link className="ml-3" to="/papelera/repuestos" variant="danger">
            <Button variant="primary">
              <FontAwesomeIcon icon={faTrash} /> Papelera de repuestos
            </Button>
          </Link>
          <br />
          <br />
          <InputSearch
            listadoRepuestos={listadoRepuestos}
            setListadoRepuestos={setListadoRepuestos}
          />
          <br />
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Marca</th>
                <th>Cantidad</th>
                <th>Código</th>
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
