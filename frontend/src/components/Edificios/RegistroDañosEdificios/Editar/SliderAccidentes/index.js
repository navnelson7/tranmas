import React, { Fragment, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import ButtonDeleteImage from "../ButtonDeleteImage";

function SliderAccidente({
  fotos,
  newAccidente,
  setnewAccidente,
  setTextAlert,
}) {
  const [infoImage, setinfoImage] = useState({
    position: 0,
    nameImage: fotos[0],
  });

  useEffect(() => {
    setinfoImage({
      position: 0,
      nameImage: fotos[0],
    });
  }, [fotos]); 

  const handleSelect = (selectedIndex) => {
    setinfoImage({
      position: selectedIndex,
      nameImage: fotos[selectedIndex],
    });
  };
  return (
    <Fragment>
      <Carousel onSelect={handleSelect}>
        {fotos.map((foto) => {
          return (
            <Carousel.Item key={foto}>
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_BACKEND_FLASK}imagenes/daño/edificio/${foto}`}
                alt=""
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <br />
      <ButtonDeleteImage
        setnewAccidente={setnewAccidente}
        newAccidente={newAccidente}
        infoImage={infoImage}
        setTextAlert={setTextAlert}
      />
    </Fragment>
  );
}

export default SliderAccidente;
