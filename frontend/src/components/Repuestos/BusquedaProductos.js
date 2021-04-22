import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { getRepuestos } from "../../graphql/Queries";
import Datatable from "react-data-table-component";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BusquedaProductos = () => {
  const [repuestos, setRepuestos] = useState([]);
  const { data, loading } = useQuery(getRepuestos);

  const obtenerRepuestos = () => {
    setRepuestos(data.repuestos);
  };

  useEffect(() => {
    if (loading) return;
    if (data) {
      obtenerRepuestos(data);
    }
  });

  const columnas = [
    {
      name: "Codigo",
      selector: "codigo_repuesto",
      sortable: true,
    },
    {
      name: "Nombre Repuestos",
      selector: "nombre",
      sortable: true,
    },
    {
      name: "Marca",
      selector: "marcar_de_repuestos.marca",
      sortable: true,
    },
    {
      name: "Cantidad",
      selector: "cantidad",
      sortable: true,
    },
    {
      name: "Fecha Factura",
      selector: "fecha_factura",
      sortable: true,
    },
    {
      name: "P/U",
      selector: "precio",
      sortable: true,
    },
    {
      name: "Estado",
      selector: "estado_repuesto_stock.estado_repuestos",
      sortable: true,
    },
  ];
  const paginacionOptiones = {
    rowsPerPageText: "Filas por Pagina:",
    rangeSeparatorText: "de",
    noRowsPerPage: false,
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const [state, guardarState] = useState({
    busqueda: "",
  });

  const [encontrados, guardarEncontrados] = useState();

  const { busqueda } = state;

  const onChange = async (e) => {
    e.persist();
    guardarState({
      ...state,
      [e.target.name]: e.target.value,
    });
    filtrarRepuestos();
  };

  const filtrarRepuestos = () => {
    var search = repuestos.filter((item) => {
      let itemRepuesto = "";
      if (item.nombre.includes(busqueda)) {
        itemRepuesto = item;
      }
      if (item.marcar_de_repuestos.marca.includes(busqueda)) {
        itemRepuesto = item;
      }
      if (item.codigo_repuesto.includes(busqueda)) {
        itemRepuesto = item;
      }
      if (item.fecha_factura.toString().includes(busqueda)) {
        itemRepuesto = item;
      }
      return itemRepuesto;
    });
    if (busqueda === 0) {
      guardarEncontrados(search);
    } else {
      guardarEncontrados(search);
    }
  };

  const conditionalRowStyles = [
    {
      when: (row) => row.cantidad < 3,
      style: {
        background: "#F18E6B ",
        color: "white",
      },
    },
    {
      when: (row) => row.estado_repuesto_stock.estado_repuestos === "Obsoleto",
      style: {
        background: "#DA9AF5 ",
        color: "white",
      },
    },
  ];
  return (
    <Container>
      <div className="box-left">
        <div className="barraBusqueda">
          <input
            type="text"
            placeholder="buscar por nombre, marca"
            className="textFiled"
            name="busqueda"
            value={busqueda}
            onChange={onChange}
          />

          <Button>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
        <Datatable
          columns={columnas}
          data={encontrados}
          title="Lista de datos"
          pagination
          paginationComponentOptions={paginacionOptiones}
          noDataComponent={
            <div className="alert alert-info">
              Escribe nombre o marca en el cuadro de busqueda
            </div>
          }
          conditionalRowStyles={conditionalRowStyles}
        />
      </div>
    </Container>
  );
};

export default BusquedaProductos;
