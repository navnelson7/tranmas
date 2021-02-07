import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
import styled from "styled-components";
function Accidentes() {
  return (
    <Fragment>
      <StyleCards>
        <div className="box-left-cards">
          <div className="container-viewport">
            <div className="d-flex justify-content-end mr-2">
              <Button variant="primary">Nueva Unidad</Button>
            </div>
            <div className="row hidden-md-up">
              <div className="col-md-4">
                <div className="card mt-3">
                  <div className="card-block">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg"
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDM_tJpMrd0dTwm3Ce7wmP7u2wIeWSwn3VRg&usqp=CAU"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRennfeb6-49pTxEJg7O_vrgWCrUsu8EzxVg&usqp=CAU"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyleCards>
    </Fragment>
  );
}
export default Accidentes;

const StyleCards = styled.div`
  .box-left-cards {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  .container-viewport {
    min-height: 120vh;
    height: 100%;
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

  li {
    padding: 1rem;
    margin: 1rem;
    min-height: 100px;
  }
`;
