import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardsEdificios() {
  return (
    <Fragment>
      <StyleCards>
        <div className="box-left-cards">
          <Row>
            <Col md={4}>
              <Link to="/tabla/edificios" className="txt-decoration">
                <Card className="card-hover" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Registro de edificios
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link
                to="/tabla/matenimiento/edificios"
                className="txt-decoration"
              >
                <Card className="card-hover" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Mantenimiento de edificios
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col md={4}>
              <Card className="card-hover" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">
                    Registro de daños en edificios
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </StyleCards>
    </Fragment>
  );
}

export default CardsEdificios;

const StyleCards = styled.div`
  .box-left-cards {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
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
  .card-hover {
    transition: 0.5s;
  }
  .txt-decoration {
    text-decoration: none;
    color: black;
  }
  .card-hover:hover {
    transition: 0.5s;
    background: #e63946;
    color: white;
  }
`;
