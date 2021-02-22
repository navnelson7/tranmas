import React, { Fragment, useState, useEffect } from "react";
import {
  Container,
  Card,
  Form,
  FormControl,
  InputGroup,
  Row,
  Col,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import ListBoxTipoEmpleados from "../Empleados/ListBoxTipoEmpleados";
import ListBoxDepartamentos from "./ListBoxDepartamentos";
import ListBoxEstadoEmpleado from "./ListBoxEstadoEmpleado";
import CapturaFotoEmpleado from "./CapturaFotoEmpleado";
import { ToastComponent } from "../Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { useMutation, useQuery } from "@apollo/client";
import { EmpleadoByid } from "../../graphql/Queries";
import { updateEmpledoById } from "../../graphql/Mutations";
import { Link, useHistory, useParams } from "react-router-dom";

const EditarEmpleado = () => {
  const { id } = useParams();
  const { push } = useHistory();

  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const { data, loading, error } = useQuery(EmpleadoByid, {
    variables: {
      id,
    },
  });
  const [setUpdatedEmpleado] = useMutation(updateEmpledoById);
  const [image, setImage] = useState(
    "https://st.depositphotos.com/1898481/3660/i/600/depositphotos_36608939-stock-photo-unknown-person.jpg"
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handelShow = () => setShow(true);
  //EJECUTANDO EFECTO HASTA QUE CAMBIE IMAGEN
  useEffect(() => {
    setEmpleado({
      ...Empleado,
      picture: image,
    });
    // eslint-disable-next-line
  }, [image]);
  const [Empleado, setEmpleado] = useState({
    codigo_empleado: "",
    nombres: "",
    apellidos: "",
    edad: 0,
    sexo: "",
    telefono: "",
    direccion: "",
    dui: "",
    nit: "",
    afp: "",
    isss: "",
    fecha_ingreso_empresa: "",
    fecha_nacimiento: "",
    estado_civil: "",
    licencia_conducir: "",
    licencia_arma: "",
    id_tipo_empleado: "",
    id_estado_empleados: "",
    id_departamento: "",
    comentarios: "",
    picture: image,
  });

  useEffect(() => {
    let empleadoOne = {};
    empleadoOne = data === undefined ? {} : data.empleados_by_pk;
    setEmpleado(empleadoOne);
  }, [data]);

  const onChange = (e) => {
    if (e.target.name === "edad") {
      setEmpleado({
        ...Empleado,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setEmpleado({
        ...Empleado,
        [e.target.name]: e.target.value,
      });
    }
  };
  const updateEmpleado = () => {
    setUpdatedEmpleado({
      variables: Empleado,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setTextAlert("Registrado correctamente");
          setshowAlert(true);
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/listado-empleados");
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setTextAlert(error.message);
        setIconType("error");
        setshowAlert(true);
      });
  };
  if (loading || Loading)
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
          <h1>REGISTRO DE EMPLEADOS</h1>
          <Image
            src={Empleado.picture == null ? image : Empleado.picture}
            alt="Foto empleado"
            rounded
            responsive="true"
          ></Image>

          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Append></InputGroup.Append>
              <FormControl
                value={Empleado.picture}
                onChange={onChange}
                hidden
              />
            </InputGroup>
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Codigo
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="Codigo de Empleado"
                        arial-label="codigo_empleado"
                        arial-describedby="basic-addon1"
                        name="codigo_empleado"
                        value={
                          Empleado.codigo_empleado
                            ? Empleado.codigo_empleado
                            : ""
                        }
                        onChange={(e) => onChange(e)}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={2}>
                    <Button onClick={handelShow}>
                      <FontAwesomeIcon icon={faCamera} />
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>Nombres</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="nombres"
                        name="nombres"
                        onChange={(e) => onChange(e)}
                        value={Empleado.nombres ? Empleado.nombres : ""}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>Apellidos</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Apellidos"
                        name="apellidos"
                        onChange={(e) => onChange(e)}
                        value={Empleado.apellidos ? Empleado.apellidos : ""}
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <Row>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Edad
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        aria-label="Edad"
                        aria-describedby="basic-addon1"
                        name="edad"
                        onChange={(e) => onChange(e)}
                        value={Empleado.edad ? Empleado.edad : ""}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text>Sexo</InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        as="select"
                        name="sexo"
                        value={Empleado.sexo}
                        onChange={(e) => onChange(e)}
                      >
                        <option value="null">
                          {Empleado.sexo === "M"
                            ? "Masculino"
                            : Empleado.sexo == "F"
                            ? "Femenino"
                            : "Selecciona un sexo"}
                        </option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                      </FormControl>
                    </InputGroup>
                  </Col>
                  <Col sm={4}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Telefono
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="Telefono"
                        aria-label="Telefono"
                        aria-describedby="basic -addon1"
                        name="telefono"
                        onChange={(e) => onChange(e)}
                        value={Empleado.telefono}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Direccion
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="Direccion"
                        aria-label="Direccion"
                        aria-describedby="basic -addon1"
                        name="direccion"
                        onChange={(e) => onChange(e)}
                        value={Empleado.direccion}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          DUI
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="00000000-0"
                        aria-label="DUI"
                        aria-describedby="DUI"
                        name="dui"
                        onChange={(e) => onChange(e)}
                        value={Empleado.dui}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          NIT
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="000-000000-000-0"
                        aria-label="NIT"
                        aria-describedby="NIT"
                        name="nit"
                        onChange={(e) => onChange(e)}
                        value={Empleado.nit}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          ISSS
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="000000000"
                        aria-label="ISSS"
                        aria-describedby="ISSS"
                        name="isss"
                        onChange={(e) => onChange(e)}
                        value={Empleado.isss}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          AFP
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="0000000000000"
                        aria-label="AFP"
                        aria-describedby="AFP"
                        name="afp"
                        onChange={(e) => onChange(e)}
                        value={Empleado.afp}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Nacimiento
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        aria-label="Nacimiento"
                        aria-describedby="Nacimiento"
                        type="date"
                        name="fecha_nacimiento"
                        onChange={(e) => onChange(e)}
                        value={Empleado.fecha_nacimiento}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Ingreso
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        aria-label="Ingreso"
                        aria-describedby="Ingreso"
                        type="date"
                        name="fecha_ingreso_empresa"
                        onChange={(e) => onChange(e)}
                        value={Empleado.fecha_ingreso_empresa}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Estado Civil
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        as="select"
                        name="estado_civil"
                        onChange={(e) => onChange(e)}
                      >
                        <option value=""></option>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="Viudo">Viudo</option>
                        <option value="Divorciado">Divorciado</option>
                      </FormControl>
                    </InputGroup>
                  </Col>
                  <ListBoxTipoEmpleados changeTipoEmleado={onChange} />
                </Row>
                <Row>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Licencia de Conducir
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="00000000"
                        aria-label="Licencia de Conducir"
                        aria-describedby="Licencia de Conducir"
                        name="licencia_conducir"
                        onChange={(e) => onChange(e)}
                        value={Empleado.licencia_conducir}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={6}>
                    <InputGroup className="mb-3">
                      <InputGroup.Append>
                        <InputGroup.Text id="basic -addon1">
                          Licencia de Arma
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        placeholder="00000000"
                        aria-label="Licencia de Arma"
                        aria-describedby="Licencia de Arma"
                        name="licencia_arma"
                        onChange={(e) => onChange(e)}
                        value={Empleado.licencia_arma}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <ListBoxEstadoEmpleado changeEstadoEmpleado={onChange} />
                  <ListBoxDepartamentos changeDepartamentos={onChange} />
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
                        onChange={(e) => onChange(e)}
                        value={Empleado.comentarios}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Button
                  varian="Primera"
                  size="lg"
                  onClick={() => updateEmpleado()}
                >
                  Guardar
                </Button>
                <Link to="/listado-empleados">
                  <Button variant="warning" size="lg">
                    Cancelar
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Form>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Capturador de Imganes Tranmas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CapturaFotoEmpleado setImage={setImage} image={image} />
          </Modal.Body>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default EditarEmpleado;
