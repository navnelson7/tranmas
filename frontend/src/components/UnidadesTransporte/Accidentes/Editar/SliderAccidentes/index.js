import React, { Fragment, useState } from "react";
import { Carousel } from "react-bootstrap";
import ButtonDeleteImage from "../ButtonDeleteImage";

function SliderAccidente({ fotos }) {
  const [infoImage, setinfoImage] = useState({
    position: 0,
    nameImage: "",
  });

  const handleSelect = (selectedIndex) => {
    setinfoImage({
      position: selectedIndex,
      nameImage: fotos[selectedIndex],
    });
  };

  return (
    <Fragment>
      <Carousel onSelect={handleSelect}>
        {fotos.map((foto, index) => {
          return (
            <Carousel.Item key={foto}>
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_BACKEND_FLASK}imagenes/accidentes/${foto}`}
                alt=""
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <br />
      <ButtonDeleteImage infoImage={infoImage} />
    </Fragment>
  );
}

export default SliderAccidente;
