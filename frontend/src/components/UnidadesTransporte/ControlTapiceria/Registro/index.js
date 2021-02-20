import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { insertTapiceriaOne } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";
import { useHistory, useParams } from "react-router-dom";
import ImageSelected from "./ImageSelected";
import axios from "axios";
import FormTapiceria from "../FormTapiceria";

function Registro() {
  const { id } = useParams();
  const { push } = useHistory();
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const [UnidadTransporte, setUnidadTransporte] = useState({});

  const [EstadoTapiceria, setEstadoTapiceria] = useState({
    descripcion_dano: "",
    fecha:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id_unidades_transporte: id,
    id_empleado_motorista: "",
    foto: "",
  });

  const [addTapiceria] = useMutation(insertTapiceriaOne);

  const changeTapiceria = (e) => {
    setEstadoTapiceria({
      ...EstadoTapiceria,
      [e.target.name]: e.target.value,
    });
  };

  const [newImageChange, setnewImageChange] = useState(null);
  const [Progress, setProgress] = useState(0);
  const [ExecuteSave, setExecuteSave] = useState(false);
  const [ImagenUrlGetting, setImagenUrlGetting] = useState(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    // create formData object
    const formData = new FormData();
    formData.append("file", newImageChange);

    if (newImageChange === null) {
      setLoading(false);
      setTextAlert("Selecciona una imagen");
      setIconType("error");
      setshowAlert(true);
    } else {
      // Send to cloudianry
      axios
        .post(`${process.env.REACT_APP_BACKEND_FLASK}upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress(e) {
            let progress = Math.round((e.loaded * 100.0) / e.total);
            setProgress(progress);
            if (progress === 100) {
              setExecuteSave(true);
            }
          },
        })
        .then((res) => {
          const urlImage = res.data.filename;
          setEstadoTapiceria({
            ...UnidadTransporte,
            foto: urlImage,
          });
          setImagenUrlGetting(true);
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
    if (ExecuteSave && ImagenUrlGetting) {
      submitTransporte();
    }
    // eslint-disable-next-line
  }, [ExecuteSave, ImagenUrlGetting]);

  const submitTransporte = () => {
    setLoading(true);
    addTapiceria({
      variables: EstadoTapiceria,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/tabla/tapiceria/${id}`);
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
            <FormTapiceria
              EstadoTapiceria={EstadoTapiceria}
              changeTapiceria={changeTapiceria}
              submitSave={uploadImage}
            />
            <div>
              <ImageSelected
                setnewImageChange={setnewImageChange}
                Progress={Progress}
              />
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

export default Registro;

const StyleRegitroUnidades = styled.div`
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
