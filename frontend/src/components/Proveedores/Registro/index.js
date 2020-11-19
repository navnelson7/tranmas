import React, { Fragment, useState } from "react";
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
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { setProveedorOne } from "../../../graphql/Mutations";
import { ToastComponent } from "../../Toast";
import ButtonDesitions from "../../ButtonsDesitions";

function RegistroProveedor() {
  const [addProveedor] = useMutation(setProveedorOne);

  const { push } = useHistory();

  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const [newProveedor, setnewProveedor] = useState({
    nombre_proveedor: "",
    nit: "",
    telefono_contacto: "",
    telefono_empresa: "",
    contacto_proveedor: "",
    nrc: "",
    updated_at:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    created_at:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    email_contacto: "",
    email_empresa: "",
    comentarios: "",
    activo: true,
  });
  
  const changeProveedor = (e) => {
    setnewProveedor({
      ...newProveedor,
      [e.target.name]: e.target.value,
    });
  };

  const submitProveedor = (e) => {
    e.preventDefault();
    setLoading(true);
    addProveedor({
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
      <ButtonDesitions
        linkCancel={"/proveedores"}
        submitSave={submitProveedor}
      />
    </Fragment>
  );
}

export default RegistroProveedor;
