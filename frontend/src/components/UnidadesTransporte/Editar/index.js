import React, { Fragment, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import editIcon from "../icons/edit.svg";
import { useMutation } from "@apollo/client";
import { updateUnidadOne } from "../../../graphql/Mutations";
import { ToastComponent } from "../../Toast";
import { useHistory, useParams } from "react-router-dom";
import ButtonsDesitions from "../../ButtonsDesitions";
import { useSubscription } from "@apollo/client";
import { listenUnidadTransporteById } from "../../../graphql/Suscription";

function EditarTransporte() {
  const { push } = useHistory();
  const params = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const { data, loading, error } = useSubscription(listenUnidadTransporteById, {
    variables: { id: params.id },
  });

  const [UnidadTransporte, setUnidadTransporte] = useState({});

  useEffect(() => {
    let unidad = {};
    unidad =
      data === undefined
        ? {}
        : {
            ...data.unidades_de_transporte_by_pk,
            updated_at:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
          };
    setUnidadTransporte(unidad);
  }, [data]);

  const [addTransporte] = useMutation(updateUnidadOne);

  const changeTransporte = (e) => {
    if (e.target.name === "numero_equipo" || "numero_pasajeros") {
      setUnidadTransporte({
        ...UnidadTransporte,
        [e.target.name]: parseInt(e.target.value),
      });
    }
    setUnidadTransporte({
      ...UnidadTransporte,
      [e.target.name]: e.target.value,
    });
  };

  const refFile = useRef(null);
  const [newImageChange, setnewImageChange] = useState(null);
  const [Imageprevious, setImageprevious] = useState(null);

  const changeImage = (e) => {
    setnewImageChange(e.target.files[0]);
    //convierto la imagen en url para poder mostrarla en la interfaz
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImageprevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
    };
  };

  const submitTransporte = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("lo que mande -->", UnidadTransporte);
    addTransporte({
      variables: UnidadTransporte,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/unidades-transporte");
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
  if (loading || Loading)
    return (
      <div className="box-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="box-center">
        <p>{error.message}</p>
      </div>
    );
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleRegitroUnidades
        src={
          Imageprevious === null
            ? "https://i.blogs.es/0b13f1/tmb-bus-electric/840_560.jpg"
            : Imageprevious
        }
      >
        <div className="box-left-container">
          <div className="grid-form-transporte">
            <div>
              <h5>Especificaciones</h5>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Modelo</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Modelo"
                  name="modelo"
                  type="text"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.modelo}
                />
              </InputGroup>
              <br />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Marca</InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                  type="text"
                  name="marca"
                  placeholder="Marca"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.marca}
                />
              </InputGroup>
              <br />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="color"
                  placeholder="Color"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.color}
                />
              </InputGroup>
              <br />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Color de tapiceria
                  </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                  type="text"
                  name="color_tapiceria"
                  placeholder="Color de tapiceria"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.color_tapiceria}
                />
              </InputGroup>
              <br />
              <h5>Numeraciones</h5>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Numero de equipo
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  name="numero_equipo"
                  placeholder="Numero de equipo"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.numero_equipo}
                />
              </InputGroup>
              <br />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Numero de pasajeros
                  </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                  type="number"
                  name="numero_pasajeros"
                  placeholder="Numero de pasajeros"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.numero_pasajeros}
                />
              </InputGroup>
              <br />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Numero de placa
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="numero_placa"
                  placeholder="Numero de placa"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.numero_placa}
                />
              </InputGroup>
              <br />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Numero de tarjeta de circulación
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="numero_tarjeta_circulacion"
                  placeholder="Numero de tarjeta de circulación"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.numero_tarjeta_circulacion}
                />
              </InputGroup>

              <br />
              <h5>Series</h5>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Serie de chasis
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="serie_chasis"
                  placeholder="Serie de chasis"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.serie_chasis}
                />
              </InputGroup>
              <br />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Serie de motor
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="serie_motor"
                  placeholder="Serie de motor"
                  onChange={(e) => changeTransporte(e)}
                  value={UnidadTransporte.serie_motor}
                />
              </InputGroup>
              <br />
              <ButtonsDesitions
                linkCancel="/unidades-transporte"
                submitSave={submitTransporte}
              />
            </div>

            <div>
              <h5 className="center-txt">
                <strong>Fotografia de bus</strong>
              </h5>

              <div className="box-center-image">
                <div className="img-bus">
                  <div className="banner-imagen txt-editar">
                    <div className="grid-box-editar">
                      <input
                        className="d-none"
                        ref={refFile}
                        type="file"
                        onChange={(e) => changeImage(e)}
                      />
                      <div
                        className="grid-box-editar"
                        onClick={() => refFile.current.click()}
                      >
                        <img src={editIcon} alt="" />
                      </div>
                      <div>
                        <p className="mt-txt">
                          <a>Editar</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </StyleRegitroUnidades>
    </Fragment>
  );
}

export default EditarTransporte;

const StyleRegitroUnidades = styled.div`
  .center-txt {
    text-align: center;
  }
  .img-bus {
    height: 200px;
    width: 200px;
    background-image: url(${(props) => props.src});
    border-radius: 50%;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }

  .box-center-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-container {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-container {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-container {
      margin-left: 15%;
      margin-top: 2%;
    }
  }

  .banner-imagen {
    top: 160px;
    position: relative;
    width: 45%;
    cursor: pointer;
    border-radius: 10%;
    height: 30px;
    background: white;
    font-size: 14px;
    border: 1.5px solid #e1e4e8;
  }
  .grid-box-editar {
    display: grid;
    grid-template-columns: 40% 60%;
  }
  .mt-txt {
    margin-top: 5px;
  }
  .txt-editar {
    color: black;
  }

  //GRID FORM TRANSPORTE

  /* MOBILE */
  @media (max-width: 1025px) {
    .grid-form-transporte {
      display: grid;
      grid-template-columns: 100%;
    }
  }

  /* DESKTOP */
  @media (min-width: 1025px) {
    .grid-form-transporte {
      display: grid;
      grid-template-columns: 60% 40%;
    }
    .box-left-container {
      margin-left: 18.5%;
      margin-top: 2%;
      overflow-x: hidden;
    }
  }
`;
