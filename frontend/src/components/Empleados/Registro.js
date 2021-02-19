import React, { Fragment, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import ListBoxTipoEmpleados from "../Empleados/ListBoxTipoEmpleados";
import ListBoxDepartamentos from "./ListBoxDepartamentos";
import ListBoxEstadoEmpleado from "./ListBoxEstadoEmpleado";
import CapturaFotoEmpleado from "./CapturaFotoEmpleado";
import { ToastComponent } from "../Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/client";
import { setEmpleadosOne } from "../../graphql/Mutations";
const Registro = () => {
  const {push} = useHistory();
  const [image, setImage] = useState(
    "https://st.depositphotos.com/1898481/3660/i/600/depositphotos_36608939-stock-photo-unknown-person.jpg "
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handelShow = () => setShow(true);

  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");

  const [addEmpleados] = useMutation(setEmpleadosOne);

  const [empleadoEstado, guardarRegistro] = useState({
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
    activo: true,
  });

  const onChange = (e) => {
    if (e.target.name === "edad") {
      guardarRegistro({
        ...empleadoEstado,
        [e.target.name]: parseInt(e.target.value),
        picture: image,
      });
    } else {
      guardarRegistro({
        ...empleadoEstado,
        [e.target.name]: e.target.value,
        picture: image,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      empleadoEstado.codigo_empleado === "" ||
      empleadoEstado.nombres === "" ||
      empleadoEstado.apellidos === "" ||
      empleadoEstado.sexo === "" ||
      empleadoEstado.telefono === "" ||
      empleadoEstado.direccion === "" ||
      empleadoEstado.dui === "" ||
      empleadoEstado.nit === "" ||
      empleadoEstado.isss === "" ||
      empleadoEstado.afp === "" ||
      empleadoEstado.echa_nacimiento === "" ||
      empleadoEstado.fecha_ingreso_empresa === "" ||
      empleadoEstado.estado_civil === "" ||
      empleadoEstado.id_tipo_empleado === "" ||
      empleadoEstado.licencia_conducir === "" ||
      empleadoEstado.licencia_arma === "" ||
      empleadoEstado.id_estado_empleados === "" ||
      empleadoEstado.id_departamento === "" ||
      empleadoEstado.comentarios === ""
    ) {
      setIconType("error");
      setshowAlert(true);
      setTextAlert("Debes llenar todos los campos");
      return;
    } else {
      addEmpleados({
        variables: empleadoEstado,
      })
        .then((res) => {
          if (res.data) {
            setIconType("success");
            setshowAlert(true);
            setTextAlert("Registrado correctamente");
            setTimeout(() => {
              push("/listado-empleados")
            }, 2000);
          }
        })
        .catch((error) => {
          setTextAlert("Ocurrio un problema");
          setIconType(error.message);
          setshowAlert(true);
        });
    }

    //pasarlo a la accion

    //reinicar el form
  };
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        picture
        iconType={IconType}
        textAlert={TextAlert}
      />
      <Container>
        <div className="box-left">
          <h1>REGISTRO DE EMPLEADOS</h1>
          <Image
            src={image}
            alt="Foto empleado"
            rounded
            responsive="true"
          ></Image>

          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Append></InputGroup.Append>
              <FormControl value={empleadoEstado.picture} onChange={onChange} hidden />
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
                        value={empleadoEstado.codigo_empleado}
                        onChange={onChange}
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
                        value={empleadoEstado.nombres}
                        onChange={onChange}
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
                        value={empleadoEstado.apellidos}
                        onChange={onChange}
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
                        type="number"
                        value={empleadoEstado.edad}
                        onChange={onChange}
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
                        value={empleadoEstado.sexo}
                        onChange={onChange}
                      >
                        <option value="null"> </option>
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
                        value={empleadoEstado.telefono}
                        onChange={onChange}
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
                        value={empleadoEstado.direccion}
                        onChange={onChange}
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
                        value={empleadoEstado.dui}
                        onChange={onChange}
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
                        value={empleadoEstado.nit}
                        onChange={onChange}
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
                        value={empleadoEstado.isss}
                        onChange={onChange}
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
                        value={empleadoEstado.afp}
                        onChange={onChange}
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
                        value={empleadoEstado.fecha_nacimiento}
                        onChange={onChange}
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
                        value={empleadoEstado.fecha_ingreso_empresa}
                        onChange={onChange}
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
                        value={empleadoEstado.estado_civil}
                        onChange={onChange}
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
                        value={empleadoEstado.licencia_conducir}
                        onChange={onChange}
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
                        value={empleadoEstado.licencia_arma}
                        onChange={onChange}
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
                        value={empleadoEstado.comentarios}
                        onChange={onChange}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Button varian="Primera" size="lg" onClick={onSubmit}>
                  Guardar
                </Button>
                <Link to={`/listado-empleados`} variant="warning">
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
            <Modal.Title>Capturadore de Imganes Tranmas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CapturaFotoEmpleado setImage={setImage} image={image} />
          </Modal.Body>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default Registro;
