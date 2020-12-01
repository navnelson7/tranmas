import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ObserverImages } from "../../../../functions/ObserverImages";

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
                    <svg className="icon-edit" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
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
    fill: transparent;
  }
  .icon-edit {
    margin-top: 10px;
  }
  .banner-imagen:hover .box-rounded-pencil {
    color: white;
    transition: 0.3s;
    background: white;
    fill: black;
  }
`;
