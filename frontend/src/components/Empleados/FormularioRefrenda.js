import React, { useState } from "react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  InputGroup,
  FormControl,
  Col,
  Row,
  Button,
} from "react-bootstrap";

<<<<<<< HEAD
import {useMutation} from "@apollo/client";
//import {setRefrendaOne} from  '../../graphql/Mutations';

const FormularioRefrenda = ({Id,Nombre,Licencia}) => {

    const [showAlert, setshowAlert] = useState(false);
    const [IconType, setIconType] = useState("");
    const [TextAlert, setTextAlert] = useState("");

   // const [addReRefrenda] = useMutation(setRefrendaOne);

    const [refrenda, setRefrenda] = useState({
        id_empleado: '',
        fecha_emision: '',
        fecha_refrenda: '',
        numero_licencia_conducir:''
=======
const FormularioRefrenda = ({ Id, Nombre, Licencia }) => {
  const [refrenda, setRefrenda] = useState({
    id_empleado: "",
    fecha_emision: "",
    fecha_refrenda: "",
    numero_licencia_conducir: "",
  });

  const onChange = (e) => {
    setRefrenda({
      ...refrenda,
      [e.target.name]: e.target.value,
      id_empleado: Id,
      numero_licencia_conducir: Licencia,
>>>>>>> 19417dc3c5004b335c08f818d76ff1fddda49c1e
    });
  };

<<<<<<< HEAD
    const {
        id_empleado,
        fecha_emision,
        fecha_refrenda,
        numero_licencia_conducir
    } = refrenda;

    const onChange = e => {
        setRefrenda({
            ...refrenda,
            [e.target.name] : e.target.value,
            id_empleado: Id,
            numero_licencia_conducir:Licencia
        })
    }

    const onSubmit = (e) => {
        if(id_empleado.trim() === ""||
        fecha_emision.trim() === "" ||
        fecha_refrenda.trim() === "" ||
        numero_licencia_conducir.trim() === ""
        ){
            setIconType("error")
            setshowAlert("true")
            setTextAlert("Debes llenar todos los campos");
            return
        }else{

        }
    }

    return (
        <Fragment>
            <ToastComponent
                showAlert={showAlert}
                setShowAlert={setshowAlert}
                iconType={IconType}
                textAlert={TextAlert}
            />
            <h1>Agregar detalle de Refrenda a: {Nombre}</h1>
            <Form>
                <Row>
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <InputGroup.Text id="basic -addon1">
                                    Fecha de Emision
                                </InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl 
                                aria-label="Nacimiento"
                                aria-describedby="Nacimiento"
                                type="date"
                                name="fecha_emision"
                                value={refrenda.fecha_emision}
                                onChange={onChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <InputGroup.Text id="basic -addon1">
                                    Fecha de Refrenda
                                </InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl 
                                aria-label="Nacimiento"
                                aria-describedby="Nacimiento"
                                type="date"
                                name="fecha_refrenda"
                                value={refrenda.fecha_refrenda}
                                onChange={onChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Button variant="danger" onClick={onSubmit}>  Agregar Refrenda <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon></Button>
            </Form>
        </Fragment>
    );
}

export default FormularioRefrenda;
=======
  const onSubmit = (e) => {
    console.log("clicando");
  };
  return (
    <Fragment>
      <h1>Agregar detalle de Refrenda a: {Nombre}</h1>
      <Form>
        <Row>
          <Col sm={6}>
            <InputGroup className="mb-3">
              <InputGroup.Append>
                <InputGroup.Text id="basic -addon1">
                  Fecha de Emision
                </InputGroup.Text>
              </InputGroup.Append>
              <FormControl
                aria-label="Nacimiento"
                aria-describedby="Nacimiento"
                type="date"
                name="fecha_emision"
                value={refrenda.fecha_emision}
                onChange={onChange}
              />
            </InputGroup>
          </Col>
          <Col sm={6}>
            <InputGroup className="mb-3">
              <InputGroup.Append>
                <InputGroup.Text id="basic -addon1">
                  Fecha de Refrenda
                </InputGroup.Text>
              </InputGroup.Append>
              <FormControl
                aria-label="Nacimiento"
                aria-describedby="Nacimiento"
                type="date"
                name="fecha_refrenda"
                value={refrenda.fecha_refrenda}
                onChange={onChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Button variant="danger" onClick={onSubmit}>
          {" "}
          Agregar Refrenda{" "}
          <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
        </Button>
      </Form>
    </Fragment>
  );
};

export default FormularioRefrenda;
>>>>>>> 19417dc3c5004b335c08f818d76ff1fddda49c1e
