import React from "react";
import { Fragment, useState } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function InputSearch({ listadoRepuestos, setListadoRepuestos }) {
  const [TextSearch, setTextSearch] = useState("");
  const FilterProduct = (value) => {
    const searchResults = listadoRepuestos.filter((repuesto) => {
      return repuesto.nombre === value || repuesto.codigo_repuesto === value;
    });

    setListadoRepuestos(searchResults);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <InputGroup>
              <FormControl
                list="repuestos"
                placeholder="Buscar por nombre o código de repuesto"
                onChange={(e) => {
                  setTextSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setTextSearch(e.target.value);
                  }
                }}
              />
            </InputGroup>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => FilterProduct(TextSearch)}>
              Buscar repuesto
            </Button>
          </Col>
        </Row>
      </Container>

      <datalist id="repuestos">
        {listadoRepuestos.map((repuesto) => {
          return (
            <Fragment key={repuesto.id}>
              <option value={repuesto.nombre}></option>
              <option value={repuesto.codigo_repuesto}></option>
            </Fragment>
          );
        })}
      </datalist>
    </div>
  );
}

export default InputSearch;
