import React, { Fragment, useState, useEffect } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { saveMarcaTransporte } from "../../../../graphql/Mutations";

function NuevaMarca({
  UnidadTransporte,
  executeNewMarca,
  setUnidadTransporte,
}) {
  const [Marca, setMarca] = useState("");
  const [insertMarcaTransporte] = useMutation(saveMarcaTransporte);

  const submitTransporte = () => {
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    submitTransporte();
  }, [executeNewMarca]);

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
          onBlur={() => submitTransporte()}
          onChange={(e) => setMarca(e.target.value)}
        />
      </InputGroup>
    </Fragment>
  );
}

export default NuevaMarca;
