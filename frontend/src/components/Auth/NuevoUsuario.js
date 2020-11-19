import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import {
  Card,
  Form,
  Button,
  Dropdown,
  Spinner,
  SplitButton,
} from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import { getRoles } from "../../graphql/Queries";
import { setUserOne } from "../../graphql/Mutations";
import { ToastComponent } from "../Toast";
import Empleados from "./Empleados";
import { getEmailUsers } from "../../graphql/Queries";


function NuevoUsuario() {
  const { push } = useHistory(); 

  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");

  //QUERIES
  const { loading, error, data } = useQuery(getRoles);
  const responseUsers = useQuery(getEmailUsers);

  const [EmailTotales, setEmailTotales] = useState([]);


  useEffect(() => {
    let users = [];
    users = responseUsers.data === undefined ? [] : responseUsers.data.users;
    setEmailTotales(users)
  }, [responseUsers.data]);

  //MUTATIONS
  const [addUser] = useMutation(setUserOne);

  const [RolSelected, setRolSelected] = useState("");

  const [newUser, setnewUser] = useState({
    email: "",
    password: "",
    user: "",
    id_role: "",
    id_empleado: "",
  });

  const setStateUser = (name, value, showRol) => {
    setnewUser({
      ...newUser,
      [name]: value,
    });
    if (name === "id_role") {
      setRolSelected(showRol);
    }
  };

  if (responseUsers.loading)
    return (
      <Fragment>
        <div className="box-center">
          <Spinner animation="border" variant="primary" />
        </div>
      </Fragment>
    );
  if (loading)
    return (
      <Fragment>
        <div className="box-center">
          <Spinner animation="border" variant="primary" />
        </div>
      </Fragment>
    );
  if (error || responseUsers.error) return <p align="center">{`Error! ${error.message}`}</p>;


  //ENVIAMOS LA INFO A GRAPHQL
  const onSubmit = (e, emailSelected) => {
    e.preventDefault();
    if (newUser.id_role === "") {
      setIconType("error")
      setshowAlert(true);
      setTextAlert("Debes seleccionar un rol");
    }
    if (newUser.email === "") {
      setIconType("error")
      setshowAlert(true);
      setTextAlert("Debes escribir un correo electronico");
    }
    if (newUser.password === "") {
      setIconType("error")
      setshowAlert(true);
      setTextAlert("Debes escribir una contraseña");
    }
    if (newUser.user === "") {
      setIconType("error")
      setshowAlert(true);
      setTextAlert("Debes escribir tu nombre de usuario");
    }
    if (newUser.id_empleado === "") {
      setIconType("error")
      setshowAlert(true);
      setTextAlert("Debes seleccionar tu nombre en empleado");
    } else {
      let emailExists = false;
      for (const iterator of EmailTotales) {
        if (newUser.email === iterator.email) {
          emailExists = true
        }
      }
      if (emailExists) {
        setTextAlert("Correo existente");
        setIconType("error")
        setshowAlert(true);
      } else {
        addUser({
          variables: newUser,
        })
          .then((res) => {
            if (res.data) {
              setIconType("success")
              setshowAlert(true);
              setTextAlert("Registrado correctamente");
              setTimeout(() => {
                //si todo va bien lo redirecciona al inicio
                push('/')
              }, 2000);
            }
          })
          .catch(() => {
            setTextAlert("Ocurrio un problema");
            setIconType("error")
            setshowAlert(true);
          });
      }
    }
  };

  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      Registro de Usuario
      <div className="abs-center">
        <Card>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="user"
                  autoComplete="off"
                  placeholder="Nombre de Usuario"
                  onChange={(e) => setStateUser(e.target.name, e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="usuario@correo.com"
                  onChange={(e) => setStateUser(e.target.name, e.target.value)}
                ></Form.Control>
              </Form.Group>

              <div>
                <SplitButton
                  title={newUser.id_role === "" ? "Rol" : RolSelected}
                  className="btn-block"
                >
                  {data.roles.map((rol) => {
                    return (
                      <Fragment key={rol.id}>
                        <Dropdown.Item
                          id="dropdown-basic-button"
                          onClick={() =>
                            setStateUser("id_role", rol.id, rol.role)
                          }
                          style={{ width: "100%" }}
                        >
                          {rol.role}
                        </Dropdown.Item>
                      </Fragment>
                    );
                  })}
                </SplitButton>
              </div>

              <Empleados setStateUser={setStateUser} />

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={(e) => setStateUser(e.target.name, e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary" size="lg" block>
                Ingresar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default NuevoUsuario;
