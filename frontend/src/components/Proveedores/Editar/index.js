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
import { Link, useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { getProveedoresById } from "../../../graphql/Queries";
import { updateProveedorOne } from "../../../graphql/Mutations";

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
    datos = data === undefined ? {} : data.proveedores_by_pk;
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
    setnewProveedor({
      ...newProveedor,
      updated_at:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
    });
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
      .catch((error) => {
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
                        value={newProveedor ? newProveedor.nombre_proveedor : ''}
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
                        value={newProveedor ? newProveedor.contacto_proveedor : ''}
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
                        value={newProveedor ? newProveedor.nit : ''}
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
                        value={newProveedor ? newProveedor.nrc : ''}
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
                        value={newProveedor ? newProveedor.email_contacto : ''}
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
                        value={newProveedor ? newProveedor.email_empresa : ''}
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
                        value={newProveedor ? newProveedor.telefono_contacto : ''}
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
                        value={newProveedor ? newProveedor.telefono_empresa : ''}
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
                        value={newProveedor ? newProveedor.comentarios : ''}
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
      <StyleBtn>
        <div>
          <ul>
            <li>
              <Link to="/proveedores">
                <button className="btn-opcion bg-cancelar">
                  <strong>Cancelar</strong>
                </button>
              </Link>
              <button
                className="btn-opcion bg-guardar"
                onClick={(e) => submitProveedor(e)}
              >
                <strong>Guardar</strong>
              </button>
            </li>
          </ul>
        </div>
        <br />
        <br />
      </StyleBtn>
    </Fragment>
  );
}

export default EditarProveedor;

const StyleNuevoProveedor = styled.div`
  .box-left-proveedor {
    margin-left: 18%;
    margin-top: 2%;
  }
  .grid-forms-proveedor {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 1%;
    margin-left: 1%;
    margin-right: 2%;
  }
  .mt-grid {
    margin-top: 10px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-proveedor {
      margin-left: 2%;
      margin-top: 2%;
    }
    .grid-forms-proveedor {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1%;
      margin-left: 1%;
      margin-right: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-proveedor {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-proveedor {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
`;

const StyleBtn = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: black;
  }
  .btn-opcion {
    display: inline-block;
    font-weight: 400;
    height: 40px;
    width: 100px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    /* BORDER RADIUS */
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }
  .bg-cancelar {
    transition: 0.3s;
    color: black;
    background: transparent;
  }
  .bg-cancelar:hover {
    transition: 0.3s;
    color: black;
    background: #e6ecf0;
  }
  .bg-guardar {
    transition: 0.3s;
    color: #ffffff;
    background: #3d50fa;
  }
  .bg-guardar:hover {
    transition: 0.3s;
    color: #ffffff;
    background: #1f30cc;
  }
`;
