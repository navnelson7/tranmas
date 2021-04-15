import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import FormMantenimientoEdificio from "../FormMantenimientoEdificio";
import ImageSelected from "./ImageSelected";
import axios from "axios";
import { insertRegistroMantenimientoEdificiosOne } from "../../../../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { ToastComponent } from "../../../Toast";

function Registro() {
  const { push } = useHistory();
  //MUTATION
  const [setMantenimiento] = useMutation(
    insertRegistroMantenimientoEdificiosOne
  );

  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const [NuevoMantenimiento, setNuevoMantenimiento] = useState({
    fecha: "",
    id_edificio: "",
    id_empleado: "",
    imagen_antes: "",
    imagen_despues: "",
  });

  const changeMantenimiento = (e) => {
    setNuevoMantenimiento({
      ...NuevoMantenimiento,
      [e.target.name]: e.target.value,
    });
  };

  const [newImageChangeBefore, setnewImageChangeBefore] = useState(null);
  const [ProgressBefore, setProgressBefore] = useState(0);
  const [ExecuteSaveBefore, setExecuteSaveBefore] = useState(false);
  const [ImagenUrlGettingBefore, setImagenUrlGettingBefore] = useState(false);

  const uploadImageBefore = async (e) => {
    e.preventDefault();
    // create formData object
    const formData = new FormData();
    formData.append("file", newImageChangeBefore);

    if (newImageChangeBefore === null) {
      setLoading(false);
      setExecuteSaveBefore(true);
      setImagenUrlGettingBefore(true);
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_FLASK}upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress(e) {
            let progress = Math.round((e.loaded * 100.0) / e.total);
            setProgressBefore(progress);
            if (progress === 100) {
              setExecuteSaveBefore(true);
            }
          },
        })
        .then((res) => {
          const urlImage = res.data.filename;
          setNuevoMantenimiento({
            ...NuevoMantenimiento,
            imagen_antes: urlImage,
          });
          setImagenUrlGettingBefore(true);
        })
        .catch(function (error) {
          if (error !== undefined || error !== null) {
            if (error.response.data.message === "Image not found") {
              setLoading(false);
              setTextAlert("Selecciona una imagen");
              setIconType("error");
              setshowAlert(true);
            }
          }
        });
    }
  };

  // ESPERA SI LA IMAGEN YA SE SUBIO Y SE OBTUVO LA URL PARA GUARDARLA EN EL TRANSPORTE
  useEffect(() => {
    if (ExecuteSaveBefore && ImagenUrlGettingBefore) {
      uploadImageAfter();
    }
    // eslint-disable-next-line
  }, [ExecuteSaveBefore, ImagenUrlGettingBefore]);

  const [newImageChangeAfter, setnewImageChangeAfter] = useState(null);
  const [ProgressAfter, setProgressAfter] = useState(0);
  const [ExecuteSaveAfter, setExecuteSaveAfter] = useState(false);
  const [ImagenUrlGettingAfter, setImagenUrlGettingAfter] = useState(false);

  const uploadImageAfter = async () => {
    // create formData object
    const formData = new FormData();
    formData.append("file", newImageChangeAfter);

    if (newImageChangeAfter === null) {
      setLoading(false);
      setExecuteSaveAfter(true);
      setImagenUrlGettingAfter(true);
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKEND_FLASK}upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress(e) {
            let progress = Math.round((e.loaded * 100.0) / e.total);
            setProgressAfter(progress);
            if (progress === 100) {
              setExecuteSaveAfter(true);
            }
          },
        })
        .then((res) => {
          const urlImage = res.data.filename;
          setNuevoMantenimiento({
            ...NuevoMantenimiento,
            imagen_despues: urlImage,
          });
          setImagenUrlGettingAfter(true);
        })
        .catch(function (error) {
          if (error !== undefined || error !== null) {
            if (error.response.data.message === "Image not found") {
              setLoading(false);
              setTextAlert("Selecciona una imagen");
              setIconType("error");
              setshowAlert(true);
            }
          }
        });
    }
  };

  // ESPERA SI LA IMAGEN YA SE SUBIO Y SE OBTUVO LA URL PARA GUARDARLA EN EL TRANSPORTE
  useEffect(() => {
    if (ExecuteSaveAfter && ImagenUrlGettingAfter) {
      submitMantenimiento();
    }
    // eslint-disable-next-line
  }, [ExecuteSaveAfter, ImagenUrlGettingAfter]);

  const submitMantenimiento = () => {
    setLoading(true);
    setMantenimiento({
      variables: NuevoMantenimiento,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/tabla/matenimiento/edificios");
          }, 2000);
        }
      })
      .catch((error) => {
        setLoading(false);
        setTextAlert(error.message);
        setIconType("error");
        setshowAlert(true);
      });
  };
  if (Loading)
    return (
      <div className="box-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return (
    <Fragment>
      <br />
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleRegitroUnidades>
        <div className="box-left-container">
          <div className="grid-form-transporte">
            <FormMantenimientoEdificio
              NuevoMantenimiento={NuevoMantenimiento}
              changeMantenimiento={changeMantenimiento}
              submitSave={uploadImageBefore}
            />
            <div>
              <ImageSelected
                setnewImageChange={setnewImageChangeBefore}
                Progress={ProgressBefore}
                tiempo="de antes"
              />
              <br />
              <br />
              <ImageSelected
                setnewImageChange={setnewImageChangeAfter}
                Progress={ProgressAfter}
                tiempo="después"
              />
            </div>

            <br />
          </div>
        </div>
      </StyleRegitroUnidades>
    </Fragment>
  );
}

export default Registro;

export const StyleRegitroUnidades = styled.div`
  .center-txt {
    text-align: center;
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
      margin-left: 20%;
      margin-top: 2%;
      overflow-x: hidden;
    }
  }
`;
