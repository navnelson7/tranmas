import React, { Fragment, useState } from "react";
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
    nameImage: "",
  });

  const handleSelect = (selectedIndex) => {
    setinfoImage({
      position: selectedIndex,
      nameImage: fotos[selectedIndex === "" ? 0 : selectedIndex],
    });
  };

  return (
    <Fragment>
      <Carousel onSelect={handleSelect}>
        {fotos.map((foto) => {
          return (
            <Carousel.Item>
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
