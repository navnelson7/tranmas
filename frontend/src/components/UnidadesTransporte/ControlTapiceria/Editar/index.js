import React, { Fragment, useState, useEffect } from "react";
import FormTapiceria from "../FormTapiceria";
import { useParams, useHistory } from "react-router-dom";
import { StyleRegitroUnidades } from "../Registro";
import axios from "axios";
import ImageSelected from "../Registro/ImageSelected";
import { useMutation, useSubscription } from "@apollo/client";
import { ToastComponent } from "../../../Toast";
import { updateTapiceriaOne } from "../../../../graphql/Mutations";
import { listenTapiceriaOne } from "../../../../graphql/Suscription";

function EditarControlTapiceria() {
  const { idTapiceria, idTransporte } = useParams();
  const { push } = useHistory();
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const { loading, data, error } = useSubscription(listenTapiceriaOne, {
    variables: {
      id: idTapiceria,
    },
  });

  const [EstadoTapiceria, setEstadoTapiceria] = useState({
    descripcion_dano: "",
    fecha:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id_unidades_transporte: idTransporte,
    id_empleado_motorista: "",
    foto: "",
  });

  const [addTapiceria] = useMutation(updateTapiceriaOne);

  const changeTapiceria = (e) => {
    setEstadoTapiceria({
      ...EstadoTapiceria,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    let tapiceria = {};
    tapiceria =
      data === undefined
        ? {}
        : {
            ...data.control_tapiceria_carroceria_by_pk,
            fecha:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
          };
    setEstadoTapiceria(tapiceria);
  }, [data]);

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
      setExecuteSave(true);
      setImagenUrlGetting(true);
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
            ...EstadoTapiceria,
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
      variables: {
        id: idTapiceria,
        descripcion_dano: EstadoTapiceria.descripcion_dano,
        foto: EstadoTapiceria.foto,
        id_unidades_transporte: EstadoTapiceria.id_unidades_transporte,
        id_empleado_motorista: EstadoTapiceria.id_empleado_motorista,
        fecha: EstadoTapiceria.fecha,
      },
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Actualizado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/tabla/tapiceria/${idTransporte}`);
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

  if (Loading || loading)
    return (
      <div className="box-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p align="center">{`Error! ${error.message}`}</p>;

  console.log(data);
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
              data={data}
            />
            <div>
              <ImageSelected
                ImagePreviousSelected={
                  data.control_tapiceria_carroceria_by_pk.foto
                }
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

export default EditarControlTapiceria;
