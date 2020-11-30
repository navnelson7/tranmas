import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import {
  Form,
  Spinner,
  Container,
  Card,
  Row,
  InputGroup,
  Col,
  FormControl,
} from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { getProveedoresById } from "../../../graphql/Queries";
import { updateProveedorOne } from "../../../graphql/Mutations";
import ButtonsDesitions from "../../ButtonsDesitions";

import { ToastComponent } from "../../Toast";

function EditarProveedor() {
  const { push } = useHistory();
  const params = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const [newProveedor, setnewProveedor] = useState({});

  const { loading, error, data } = useQuery(getProveedoresById, {
    variables: { id: params ? params.id : "" },
  });

  const [updateProveedor] = useMutation(updateProveedorOne);
  useEffect(() => {
    let datos = {};
    datos =
      data === undefined
        ? {}
        : {
            ...data.proveedores_by_pk,
            updated_at:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
          };
    setnewProveedor(datos);
  }, [data]);

  const changeProveedor = (e) => {
    setnewProveedor({
      ...newProveedor,
      [e.target.name]: e.target.value,
    });
  };

  const submitProveedor = (e) => {
    e.preventDefault();
    updateProveedor({
      variables: newProveedor,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/proveedores");
          }, 2000);
        }
      })
      .catch(() => {
        setLoading(false);
        setTextAlert("Ocurrio un problema");
        setIconType("error");
        setshowAlert(true);
      });
  };
  if (loading)
    return (
      <Fragment>
        <div className="box-center">
          <Spinner animation="border" variant="primary" />
        </div>
      </Fragment>
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
      <br />
      {Loading ? (
        <div className="box-center">
          <Spinner />
        </div>
      ) : null}
      <Container>
        <div className="box-left">
          <h1>Formulario para Ingreso de Proveedores</h1>
          <Form>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Nombre de Proveedor
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Nombre de Proveedor"
                        aria-label="codigo"
                        aria-describedby="basic -addon1"
                        name="nombre_proveedor"
                        onChange={(e) => changeProveedor(e)}
                        value={
                          newProveedor ? newProveedor.nombre_proveedor : ""
                        }
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Contacto de proveedor
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Contacto de proveedor"
                        aria-label="nombre"
                        aria-describedby="basic-addon1"
                        name="contacto_proveedor"
                        onChange={(e) => changeProveedor(e)}
                        value={
                          newProveedor ? newProveedor.contacto_proveedor : ""
                        }
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">NIT</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="NIT"
                        aria-label="cantidad"
                        aria-describedby="basic-addon1"
                        name="nit"
                        onChange={(e) => changeProveedor(e)}
                        value={newProveedor ? newProveedor.nit : ""}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">NRC</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="nrc"
                        aria-label="precio"
                        aria-describedby="basic-addon1"
                        name="nrc"
                        onChange={(e) => changeProveedor(e)}
                        value={newProveedor ? newProveedor.nrc : ""}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Email Contacto
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Email Contacto"
                        name="email_contacto"
                        onChange={(e) => changeProveedor(e)}
                        value={newProveedor ? newProveedor.email_contacto : ""}
                      />
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Email Empresa
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Email Empresa"
                        name="email_empresa"
                        onChange={(e) => changeProveedor(e)}
                        value={newProveedor ? newProveedor.email_empresa : ""}
                      />
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Teléfono Contacto
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Teléfono Contacto"
                        name="telefono_contacto"
                        onChange={(e) => changeProveedor(e)}
                        value={
                          newProveedor ? newProveedor.telefono_contacto : ""
                        }
                      />
                    </InputGroup>
                  </Col>

                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          Teléfono Empresa
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Teléfono Empresa"
                        name="telefono_empresa"
                        onChange={(e) => changeProveedor(e)}
                        value={
                          newProveedor ? newProveedor.telefono_empresa : ""
                        }
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>Comentarios</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        as="textarea"
                        aria-label="Comentarios"
                        name="comentarios"
                        onChange={(e) => changeProveedor(e)}
                        value={newProveedor ? newProveedor.comentarios : ""}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </Container>
      <br />
      <ButtonsDesitions
        linkCancel="/proveedores"
        submitSave={submitProveedor}
      />
    </Fragment>
  );
}

export default EditarProveedor;