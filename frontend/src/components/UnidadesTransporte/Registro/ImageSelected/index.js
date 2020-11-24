import React, { Fragment, useState, useRef } from 'react'
import styled from 'styled-components'
import editIcon from "../icons/edit.svg";
import saveIcon from "../icons/save.svg";
import axios from "axios"


function ImageSelected() {
    const refFile = useRef(null);
  const [newImageChange, setnewImageChange] = useState(null);
  const [Imageprevious, setImageprevious] = useState(null);
  const [Progress, setProgress] = useState(0);

  const changeImage = (e) => {
    setnewImageChange(e.target.files[0]);
    //convierto la imagen en url para poder mostrarla en la interfaz
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImageprevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
    };
  };

  const uploadImage = async (e)=> {
    e.preventDefault();
    // create formData object
    const formData = new FormData();
    formData.append('file', newImageChange);

    // Send to cloudianry
    const res = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress (e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                setProgress(progress)
            }
        }
    );
    console.log(res);
  }
    return (
        <Fragment>
            <StyleImageSelected src={
          Imageprevious === null
            ? "https://i.blogs.es/0b13f1/tmb-bus-electric/840_560.jpg"
            : Imageprevious
        }>

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
                      onClick={(e) => {
                          if (newImageChange === null) {
                            refFile.current.click()
                          }else{
                            uploadImage(e)
                          }
                      }}
                    >
                      {
                        Progress === 100 ?  <p className="text-center ml-1 mt-1">Completado</p> : <Fragment>
                          <div>
                        <img src={newImageChange === null ? editIcon : saveIcon} alt="" />
                      </div>
                      <div>
                        <p className="mt-txt">
                            <a>{newImageChange === null ? "Editar" : "Guardar"}</a>
                        </p>
                      </div>
                        </Fragment>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </StyleImageSelected>
            {
              Progress !== 0 && <div className="alert alert-primary m-4" role="alert">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: `${Progress}%`}} aria-valuenow={Progress} aria-valuemin={0} aria-valuemax={100}>{Progress} % </div>
                </div>
              </div>
            }
        </Fragment>
    )
}

export default ImageSelected


const StyleImageSelected = styled.div`
.banner-imagen {
    top: 160px;
    position: relative;
    width: 45%;
    cursor: pointer;
    border-radius: 10%;
    height: 30px;
    background: white;
    font-size: 14px;
    border: 1.5px solid #e1e4e8;
  }
  .grid-box-editar {
    display: grid;
    grid-template-columns: 40% 60%;
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
`