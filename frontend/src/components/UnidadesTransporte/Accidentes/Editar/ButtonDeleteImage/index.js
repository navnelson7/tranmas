import React from "react";
import { Button } from "react-bootstrap";
import { Fragment } from "react";
import axios from "axios";

function ButtonDeleteImage({ infoImage }) {
  const submitDeleteImage = (e) => {
    e.preventDefault();
    axios
      .request({
        method: "POST",
        url: process.env.REACT_APP_BACKEND_FLASK + "delete/image/accidente",
        data: {
          filename: infoImage.nameImage,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      <Button variant="danger" onClick={(e) => submitDeleteImage(e)}>
        Eliminar imagen {infoImage.position + 1}
      </Button>
    </Fragment>
  );
}

export default ButtonDeleteImage;
