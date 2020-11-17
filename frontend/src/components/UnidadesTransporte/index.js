import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Image from "./Image";
import { v4 as uuid } from "uuid";

function UnidadesTransporte() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcwuxoNgk7qb7DKtdhlJTAupHoqKF-yYzFEw&usqp=CAU",
    "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s514ff347883282df/image/i511e15eff51e40a2/version/1497910777/image.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcwuxoNgk7qb7DKtdhlJTAupHoqKF-yYzFEw&usqp=CAU",
    "https://www.atodobuschile.cl/galeria/data/media/61/05519-P1340395.jpg",
    "https://www.dinero.com.sv/media/k2/items/cache/bcbee90ec4b5e1aecab9bf5df69d5235_XL.jpg",
    "https://cdn-pro.elsalvador.com/wp-content/uploads/2019/01/asalto3.jpg",
    "https://cdn-pro.elsalvador.com/wp-content/uploads/2017/01/27170244/1434893591038.jpg",
    "https://cdn.pixabay.com/photo/2020/10/24/03/09/street-5680458_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/04/04/17/06/street-5003132_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/11/06/15/33/woman-5718089__340.jpg",
    "https://cdn.pixabay.com/photo/2020/05/20/07/02/gunnera-5195132_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/10/04/11/31/river-3723439_960_720.jpg",
  ];
  return (
    <Fragment>
      <StyleCards>
        <div className="box-left-cards">
          <div className="row hidden-md-up">
            {images.map((image) => {
              return (
                <div className="col-md-4" key={uuid()}>
                  <div className="card mt-3">
                    <div className="card-block">
                      <Image src={image} />
                      <br />
                      <br />
                      <div className="box-placa">
                        <div className="box-blue-top">EL SALVADOR</div>
                        <div className="box-white">
                          <strong>P 246 182</strong>
                        </div>
                        <div className="box-blue-bottom">CENTRO AMERICA</div>
                      </div>
                      <br/>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
        </div>
      </StyleCards>
    </Fragment>
  );
}

export default UnidadesTransporte;

const StyleCards = styled.div`
  .box-left-cards {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  .box-image {
    width: 100%;
    height: 180px;
    background-color: blue;
  }

  .box-placa {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .box-white {
    background: white;
  }
  .box-blue-top {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .box-blue-bottom {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-cards {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-cards {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-cards {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
`;
