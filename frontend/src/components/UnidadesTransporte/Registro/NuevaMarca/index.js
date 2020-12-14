import React, { Fragment, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import {
  saveMarcaTransporte,
  updateNuevaMarcaTransporteById,
} from "../../../../graphql/Mutations";

function NuevaMarca({
  UnidadTransporte,
  setUnidadTransporte,
  setMarca,
  Marca,
}) {
  const [insertMarcaTransporte] = useMutation(saveMarcaTransporte);
  const [updateMarcaTransporteById] = useMutation(updateNuevaMarcaTransporteById)
  const [NuevaMarcaGuardada, setNuevaMarcaGuardada] = useState(false);
  const [NumberEdit, setNumberEdit] = useState(0);

  const submitTransporte = (e) => {
    e.preventDefault();
    if (Marca === "") {
      return;
    }
    if (NumberEdit >= 1) {
      updateMarcaTransporte();
    } else {
      insertMarcaTransporte({
        variables: {
          marca: Marca,
        },
      })
        .then((res) => {
          if (res.data) {
            setUnidadTransporte({
              ...UnidadTransporte,
              id_marca: res.data.insert_marca_transporte_one.id,
            });
            setNumberEdit(1);
            setNuevaMarcaGuardada(true)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const updateMarcaTransporte = () => {
    updateMarcaTransporteById({
      variables: {
        id: UnidadTransporte.id_marca,
        marca: Marca,
      },
    })
      .then((res) => {
        if (res.data) {
          setNuevaMarcaGuardada(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Nueva Marca</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          name="id_marca"
          placeholder="Marca"
          value={Marca}
          onChange={(e) => {
            setMarca(e.target.value);
            setNuevaMarcaGuardada(false)
          }}
        />
        {NuevaMarcaGuardada ? (
          <InputGroup.Prepend>
            <Button variant="success">Guardado</Button>
          </InputGroup.Prepend>
        ) : (
          <InputGroup.Prepend>
            <Button variant="primary" onClick={(e) => submitTransporte(e)}>
              Guardar
            </Button>
          </InputGroup.Prepend>
        )}
      </InputGroup>
    </Fragment>
  );
}

export default NuevaMarca;
