import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

function SliderAccidente({fotos}) {
  return (
    <Fragment>
      <Carousel>
        {fotos.map((foto) => {
          return (
            <Carousel.Item key={foto}>
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_BACKEND_FLASK}imagenes/accidentes/${foto}`}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Fragment>
  );
}

export default SliderAccidente;
