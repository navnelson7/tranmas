import React, { Fragment, useState, useEffect } from "react";
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

import ListBoxEstadoRepuesto from "../../listbox/ListBoxEstadoRepuesto";
import ListBoxProveedores from "../../listbox/ListBoxProveedores";
import ListBoxUnidadMedida from "../../listbox/ListBoxUnidadMedida";
import ListBoxMarcas from "../../listbox/ListBoxMarcas";
import { ToastComponent } from "../../Toast";
import {
  listenRepuestosByEdit,
  listenRelacionesRepuestoEdit,
} from "../../../graphql/Suscription";
import { updateRepuestoById } from "../../../graphql/Mutations";
import { useSubscription, useMutation } from "@apollo/client";
import { useHistory, useParams } from "react-router";

const FormRepuestos = () => {
  const { id } = useParams();
  const { push } = useHistory();

  // ALERTA
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [repuestoin, guardarRepuesto] = useState({
    cantidad: 868681,
    codigo_repuesto: "",
    comentarios: "",
    fecha_factura: "",
    fecha_ingreso: "",
    id_estado: "",
    id_marca: "",
    id_proveedor: "",
    id_unidad_medida: "",
    km_para_cambio: 0,
    nombre: "aaaa",
    numero_factura: 0,
    precio: "$0",
    id: "",
  });
  const { data, loading, error } = useSubscription(listenRepuestosByEdit, {
    variables: {
      id: id,
    },
  });

  const relacionesRepuestos = useSubscription(listenRelacionesRepuestoEdit, {
    variables: {
      id: id,
    },
  });

  const [updateRepuesto] = useMutation(updateRepuestoById);

  useEffect(() => {
    let repuesto = {};
    repuesto = data === undefined ? {} : { ...data.repuestos_by_pk, id: id };
    guardarRepuesto(repuesto);
  }, [data, id]);

  const changeRepuesto = (e) => {
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

  const submitUpdateRepuesto = () => {
    updateRepuesto({
      variables: repuestoin,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setTextAlert("Registrado correctamente");
          setshowAlert(true);
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/listado-repuestos");
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setTextAlert("Ocurrio un problema");
        setIconType("error");
        setshowAlert(true);
      });
  };
  if (loading || relacionesRepuestos.loading || Loading)
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
      <Container>
        <div className="box-left">
          <h1>Formulario para editar Ingreso de Repuestos</h1>
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
                        value={repuestoin.codigo_repuesto}
                        onChange={changeRepuesto}
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
                        value={repuestoin.nombre}
                        onChange={changeRepuesto}
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
                        value={repuestoin.cantidad}
                        onChange={changeRepuesto}
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
                        value={repuestoin.precio}
                        onChange={changeRepuesto}
                      />
                    </InputGroup>
                  </Col>

                  <ListBoxUnidadMedida
                    medidaEscogida={
                      relacionesRepuestos.data.repuestos_by_pk
                        .unidad_medida_repuesto.unidad_de_medida
                    }
                    idMedidaEscogida={
                      relacionesRepuestos.data.repuestos_by_pk.id_unidad_medida
                    }
                    changeMedida={changeRepuesto}
                  />
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
                        value={repuestoin.numero_factura}
                        onChange={changeRepuesto}
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
                        value={repuestoin.fecha_factura}
                        onChange={changeRepuesto}
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
                        value={repuestoin.fecha_ingreso}
                        onChange={changeRepuesto}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <ListBoxMarcas
                      marcaSeleccionada={
                        relacionesRepuestos.data.repuestos_by_pk
                          .marcar_de_repuestos.marca
                      }
                      idmarcaSeleccionada={
                        relacionesRepuestos.data.repuestos_by_pk.id_marca
                      }
                      changeMarca={changeRepuesto}
                    />
                  </Col>
                  <ListBoxProveedores
                    proveedorEscogido={
                      relacionesRepuestos.data.repuestos_by_pk
                        .proveedor_de_repuesto.nombre_proveedor
                    }
                    idproveedorEscogido={
                      relacionesRepuestos.data.repuestos_by_pk.id_proveedor
                    }
                    changeProveedor={changeRepuesto}
                  />
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
                        readOnly
                      />
                    </InputGroup>
                  </Col>
                  <ListBoxEstadoRepuesto
                    estadoRepuestoSeleccionado={
                      relacionesRepuestos.data.repuestos_by_pk
                        .estado_repuesto_stock.estado_repuestos
                    }
                    changeEstadoRepuesto={changeRepuesto}
                  />
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
                        placeholder="Km para cambio de repuesto"
                        value={repuestoin.km_para_cambio}
                        onChange={changeRepuesto}
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
                        value={repuestoin.comentarios}
                        onChange={changeRepuesto}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Button
                  varian="Primary"
                  size="lg"
                  onClick={() => submitUpdateRepuesto()}
                >
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
