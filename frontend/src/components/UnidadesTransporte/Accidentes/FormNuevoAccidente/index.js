import React, { Fragment } from "react";
import { Form, InputGroup, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import ListBoxMotorista from "../../../listbox/ListBoxMotorista";
import Upload from "../Upload";
function Registro() {
  return (
    <Fragment>
      <StyleRegitroUnidades>
        <div className="box-left-container">
          <div className="grid-form-transporte">
            <div>
              <h5>Especificaciones</h5>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Modelo</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="comentarios"
                  placeholder="Comentarios"
                  required
                />
              </InputGroup>
              <Row>
                <Col sm={5}>
                  <ListBoxMotorista />
                </Col>
                <Col sm={7}>
                  jaja
                </Col>
              </Row>
            </div>

            <div><Upload/></div>

            <br />
            <br />
            <br />
          </div>
        </div>
      </StyleRegitroUnidades>
    </Fragment>
  );
}

export default Registro;

const StyleRegitroUnidades = styled.div`
  .center-txt {
    text-align: center;
  }
  .box-center-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-container {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-container {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-container {
      margin-left: 15%;
      margin-top: 2%;
    }
  }

  //GRID FORM TRANSPORTE

  /* MOBILE */
  @media (max-width: 1025px) {
    .grid-form-transporte {
      display: grid;
      grid-template-columns: 100%;
    }
  }

  /* DESKTOP */
  @media (min-width: 1025px) {
    .grid-form-transporte {
      display: grid;
      grid-template-columns: 60% 40%;
    }
    .box-left-container {
      margin-left: 20%;
      margin-top: 2%;
      overflow-x: hidden;
    }
  }
`;
