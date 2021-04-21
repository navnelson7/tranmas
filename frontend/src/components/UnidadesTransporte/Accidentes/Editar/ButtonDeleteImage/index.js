import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Fragment } from "react";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { updateImagenesAccidente } from "../../../../../graphql/Mutations";
import { ToastComponent } from "../../../../Toast";

function ButtonDeleteImage({
  infoImage,
  newAccidente,
  setnewAccidente,
  setTextAlert,
}) {
  const { id } = useParams();
  const [ExecuteUpdate, setExecuteUpdate] = useState(false);
  const [updateAccidente] = useMutation(updateImagenesAccidente);

  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [Loading, setLoading] = useState(false);

  const submitDeleteImage = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("filename", infoImage.nameImage);
    axios
      .request({
        method: "POST",
        url: process.env.REACT_APP_BACKEND_FLASK + "delete/image/accidente",
        data: formdata,
      })
      .then(() => {
        // ELIMINO DEL ARRAY LA IMAGEN QUE HAYA SELECCIONADO
        const imagesResults = JSON.parse(newAccidente.registro_fotos).filter(
          (foto) => {
            return foto !== infoImage.nameImage;
          }
        );
        setnewAccidente({
          ...newAccidente,
          registro_fotos: JSON.stringify(imagesResults),
        });
        setExecuteUpdate(true);
      })
      .catch((error) => {
        setTextAlert(error.message);
        setLoading(false);
        setshowAlert(true);
      });
  };

  useEffect(() => {
    if (ExecuteUpdate) {
      updateAccidente({
        variables: {
          id: id,
          registro_fotos: newAccidente.registro_fotos,
        },
      })
        .then((res) => {
          if (res.data) {
            setTextAlert("Actualizado correctamente");
            setLoading(false);
            setshowAlert(true);
          }
        })
        .catch((error) => {
          setTextAlert(error.message);
          setLoading(false);
          setshowAlert(true);
        });
    }
    // eslint-disable-next-line
  }, [ExecuteUpdate, id, newAccidente.registro_fotos]);
  if (Loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return (
    <Fragment>
      <ToastComponent showAlert={showAlert} setShowAlert={setshowAlert} />
      <Button variant="danger" onClick={(e) => submitDeleteImage(e)}>
        Eliminar imagen {infoImage.position + 1}
      </Button>
    </Fragment>
  );
}

export default ButtonDeleteImage;
