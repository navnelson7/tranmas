import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ObserverImages } from "../../../functions/ObserverImages";
import editIcon from "../icons/edit.svg";

export default function Image({ src, marca, numero_pasajeros, id }) {
  const [showImage, setShowImage] = useState(false);
  const placeHolderRef = useRef(null);

  useEffect(() => {
    ObserverImages(placeHolderRef.current, setShowImage);
  }, []);

  if (showImage) {
    return (
      <Fragment>
        <StyleImage url={src}>
          <div className="img-background">
            <div className="banner-imagen">
              <div className="center-box">
                <div className="box-rounded-pencil">
                  <Link to={`/actualizar-unidad-transporte/${id}`}>
                    <img src={editIcon} alt="" className="icon-edit" />
                  </Link>
                </div>
              </div>
              <h4>
                <strong>{marca}</strong>
              </h4>
              <p>{numero_pasajeros} pasajeros</p>
            </div>
          </div>
        </StyleImage>
      </Fragment>
    );
  }
  return <div className="box-image" ref={placeHolderRef}></div>;
}

const StyleImage = styled.div`
  .img-background {
    height: 180px;
    width: 100%;
    background-image: url(${(props) => props.url});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }

  .banner-imagen {
    position: relative;
    width: 100%;
    height: 180px;
    background: transparent;
    font-size: 19px;
    transition: 0.3s;
    color: transparent;
    padding: 5px;
  }
  .banner-imagen:hover {
    color: white;
    transition: 0.3s;
    background: rgba(0, 0, 0, 0.5);
  }
  .box-rounded-pencil {
    height: 50px;
    width: 50px;
    background: transparent;
    margin-top: 12%;
    border-radius: 50px;
    text-align: center;
    cursor: pointer;
  }
  .icon-edit {
    margin-top: 10px;
  }
  .banner-imagen:hover .box-rounded-pencil {
    color: white;
    transition: 0.3s;
    background: white;
  }
`;
