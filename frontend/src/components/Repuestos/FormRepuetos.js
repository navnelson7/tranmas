import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Form,
  FormControl,
  Col,
  InputGroup,
  Card,
  Button,
} from "react-bootstrap";

import ListBoxEstadoRepuesto from "../listbox/ListBoxEstadoRepuesto";
import ListBoxProveedores from "../listbox/ListBoxProveedores";
import ListBoxUnidadMedida from "../listbox/ListBoxUnidadMedida";
import ListBoxMarcas from "../listbox/ListBoxMarcas";

import { useMutation } from "@apollo/client";
import { setRepuestosOne } from "../../graphql/Mutations";

import { ToastComponent } from "../Toast";
import { parse } from "graphql";
//import { concatPagination } from '@apollo/client/utilities';

const FormRepuestos = () => {
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");

  const [addRepuetos] = useMutation(setRepuestosOne);

  const [repuestoin, guardarRepuesto] = useState({
    activo: "",
    cantidad: "",
    fecha_factura: "",
    fecha_ingreso: "",
    id_estado: "",
    id_marca: "",
    id_proveedor: "",
    comentarios: "",
    id_unidad_medida: "",
    id_usuario: "74ce2303-ba9c-4682-84d9-7936679e2610",
    codigo_repuesto: "",
    nombre: "",
    numero_factura: "",
    precio: "",
    km_para_cambio: 0,
  });

  const onChange = (e) => {
    if (e.target.name === "km_para_cambio") {
      guardarRepuesto({
        ...repuestoin,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      guardarRepuesto({
        ...repuestoin,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleCheck = (e) => {
    guardarRepuesto({
      ...repuestoin,
      [e.target.name]: e.target.checked,
    });
  };

  const {
    codigo_repuesto,
    precio,
    cantidad,
    id_usuario,
    numero_factura,
    fecha_factura,
    fecha_ingreso,
    activo,
    nombre,
    comentarios,
    km_para_cambio,
  } = repuestoin;

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      codigo_repuesto.trim() === "" ||
      precio.trim() === "" ||
      cantidad.trim() === "" ||
      id_usuario.trim() === "" ||
      numero_factura.trim() === "" ||
      fecha_factura.trim() === "" ||
      fecha_ingreso.trim() === "" ||
      activo === "" ||
      nombre.trim() === "" ||
      comentarios.trim() === ""
    ) {
      setIconType("error");
      setshowAlert(true);
      setTextAlert("Debes llenar todos los campos");
      return;
    } else {
      addRepuetos({
        variables: repuestoin,
      })
        .then((res) => {
          if (res.data) {
            setIconType("success");
            setshowAlert(true);
            setTextAlert("Registrado correctamente");
            setTimeout(() => {}, 2000);
          }
        })
        .catch((error) => {
          setTextAlert(error.message);
          setIconType("error");
          setshowAlert(true);
        });
    }

    guardarRepuesto({
      activo: "",
      cantidad: "",
      fecha_factura: "",
      fecha_ingreso: "",
      id_estado: "",
      id_marca: "",
      id_proveedor: "",
      comentarios: "",
      id_unidad_medida: "",
      id_usuario: "74ce2303-ba9c-4682-84d9-7936679e2610",
      codigo_repuesto: "",
      nombre: "",
      numero_factura: "",
      precio: "",
      km_para_cambio: "",
    });
  };
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <Container>
        <div className="box-left">
          <h1>Formulario para Ingreso de Repuestos</h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Codigo Repuesto
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="0000000000"
                        aria-label="codigo"
                        aria-describedby="basic -addon1"
                        name="codigo_repuesto"
                        value={codigo_repuesto}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Nombre
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Nombre del Repuesto"
                        aria-label="nombre"
                        aria-describedby="basic-addon1"
                        name="nombre"
                        value={nombre}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Cantidad
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="00"
                        aria-label="cantidad"
                        aria-describedby="basic-addon1"
                        name="cantidad"
                        value={cantidad}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                        <InputGroup.Text id="basic-addon1">
                          Precio
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="0.00"
                        aria-label="precio"
                        aria-describedby="basic-addon1"
                        name="precio"
                        value={precio}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>

                  <ListBoxUnidadMedida changeMedida={onChange} />
                </Row>
                <Row>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                        <InputGroup.Text id="basic-addon1">
                          Factura
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="000000000"
                        aria-label="numero_factura"
                        arita-describedby="basic-addon1"
                        name="numero_factura"
                        value={numero_factura}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Fecha Factura
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="date"
                        aria-label="fecha_factura"
                        aria-describedby="basic-addon1"
                        name="fecha_factura"
                        value={fecha_factura}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Fecha Ingreso
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="date"
                        aria-label="fecha_ingreso"
                        aria-describedby="basic-addon1"
                        name="fecha_ingreso"
                        value={fecha_ingreso}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <ListBoxMarcas changeMarca={onChange} />
                  </Col>
                  <ListBoxProveedores changeProveedor={onChange} />
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Usuario
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="usuario"
                        aria-label="id_usuario"
                        aria-describedby="basic-addon1"
                        name="id_usuario"
                        value={id_usuario}
                        readOnly
                      />
                    </InputGroup>
                  </Col>
                  <ListBoxEstadoRepuesto changeEstadoRepuesto={onChange} />
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          Km para cambio de repuesto
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="number"
                        name="km_para_cambio"
                        value={km_para_cambio}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>Comentarios</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        as="textarea"
                        aria-label="Comentarios"
                        name="comentarios"
                        value={comentarios}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={3}>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Activo"
                        name="activo"
                        value={activo}
                        onChange={handleCheck}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button varian="Primary" size="lg" onClick={onSubmit}>
                  Guardar
                </Button>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
};

export default FormRepuestos;
