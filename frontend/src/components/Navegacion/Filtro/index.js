import React, { Fragment, useContext } from "react";
import ContextInputSearch from "../../../context/ContextInputSearch";
import { v4 as uuidv4 } from "uuid";
import { InputGroup, DropdownButton, Dropdown } from "react-bootstrap";

function FiltroDropdown() {
  const { setSelectField, setNombreField, NombreField } = useContext(
    ContextInputSearch
  );

  const Fields = [
    {
      nombre: "Nombre de proveedor",
      field: "nombre_proveedor",
    },
    {
      nombre: "NIT",
      field: "nit",
    },
    {
      nombre: "Teléfono de contacto",
      field: "telefono_contacto",
    },
    {
      nombre: "Teléfono de empresa",
      field: "telefono_empresa",
    },
    {
      nombre: "Contacto de proveedor",
      field: "contacto_proveedor",
    },
    {
      nombre: "nrc",
      field: "nrc",
    },
    {
      nombre: "Fecha de actualización",
      field: "updated_at",
    },
    {
      nombre: "Correo de contacto",
      field: "email_contacto",
    },
    {
      nombre: "Correo de empresa",
      field: "email_empresa",
    },
    {
      nombre: "Comentarios",
      field: "comentarios",
    },
  ];
  return (
    <Fragment>
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-primary"
        title={NombreField === "" ? "Buscar" : NombreField}
      >
        {Fields.map((field) => {
          return (
            <Dropdown.Item
              onClick={() => {
                setNombreField(field.nombre);
                setSelectField(field.field);
              }}
              key={uuidv4()}
            >
              {field.nombre}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </Fragment>
  );
}

export default FiltroDropdown;
