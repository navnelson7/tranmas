import React, { Fragment, useState, useRef } from "react";
import styled from "styled-components";
import editIcon from "../icons/edit.svg";
import tranmasImage from "../icons/tranmas.png";

function ImageSelected({ setnewImageChange, Progress }) {
  const refFile = useRef(null);
  const [Imageprevious, setImageprevious] = useState(null);
  const changeImage = (e) => {
    setnewImageChange(e.target.files[0]);
    //convierto la imagen en url para poder mostrarla en la interfaz
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageprevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };
  return (
    <Fragment>
      <StyleImageSelected
        src={Imageprevious === null ? tranmasImage : Imageprevious}
      >
        <h5 className="center-txt">
          <strong>Fotografia de bus</strong>
        </h5>

        <div className="box-center-image">
          <div className="img-bus">
            <div className="banner-imagen txt-editar">
              <input
                className="d-none"
                ref={refFile}
                type="file"
                onChange={(e) => changeImage(e)}
              />
              <div
                className="grid-box-editar"
                onClick={() => refFile.current.click()}
              >
                {Progress === 100 ? (
                  <p className="text-center ml-1 mt-1">Completado</p>
                ) : (
                  <Fragment>
                    <div>
                      <img src={editIcon} alt="" />
                    </div>
                    <div>
                      <p className="mt-txt">Seleccionar</p>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </StyleImageSelected>
      {Progress !== 0 && (
        <div className="alert alert-primary m-4" role="alert">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${Progress}%` }}
              aria-valuenow={Progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {Progress} %{" "}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ImageSelected;

const StyleImageSelected = styled.div`
  .banner-imagen {
    top: 160px;
    position: relative;
    width: 52%;
    cursor: pointer;
    border-radius: 10%;
    height: 30px;
    background: white;
    font-size: 14px;
    border: 1.5px solid #e1e4e8;
  }
  .grid-box-editar {
    display: grid;
    grid-template-columns: auto auto;
  }
  .mt-txt {
    margin-top: 5px;
  }
  .txt-editar {
    color: black;
  }
  .img-bus {
    height: 200px;
    width: 200px;
    background-image: url(${(props) => props.src});
    border-radius: 50%;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
`;
