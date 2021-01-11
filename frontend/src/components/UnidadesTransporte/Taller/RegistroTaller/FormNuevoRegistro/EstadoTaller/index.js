import React, { Fragment, useEffect, useState } from "react";
import { InputGroup, Col, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { setEstadoTaller } from "../../../../../../graphql/Mutations";
import { useMutation } from "@apollo/client";

function EstadoTaller({ ExecuteEstadoTaller }) {
  const [EstadoEnTaller, setEstadoEnTaller] = useState({
    estado: "Reparación",
    activo: true,
  });
  const changeEstadoTaller = (e) => {
    setEstadoEnTaller({
      ...EstadoEnTaller,
      [e.target.name]: e.target.value,
    });
  };

  const [addEstadoTaller] = useMutation(setEstadoTaller);

  useEffect(() => {
    if (ExecuteEstadoTaller) {
      addEstadoTaller({
        variables: EstadoEnTaller,
      })
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            console.log("success");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    // eslint-disable-next-line
  }, [ExecuteEstadoTaller]);
  return (
    <Fragment>
      <Col sm={6}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Estado</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="select"
            name="estado"
            onChange={(e) => changeEstadoTaller(e)}
          >
            <option>Reparación</option>
            <option>Prueba</option>
            <option>Finalizado</option>
          </FormControl>
        </InputGroup>
      </Col>
      <Col sm={6}>
        <StyleSwitch>
          <div className="grid-toggle">
            <div>
              <p>Activo</p>
            </div>
            {/* Rounded switch */}
            <label className="switch">
              <input
                type="checkbox"
                name="plantilla"
                defaultChecked={true}
                onChange={(e) => setEstadoEnTaller(e)}
              />
              <span className="slider round" />
            </label>
          </div>
        </StyleSwitch>
      </Col>
    </Fragment>
  );
}

export default EstadoTaller;

const StyleSwitch = styled.div`
  .grid-toggle {
    display: grid;
    grid-template-columns: 15% auto;
    margin-top: 10px;
  }
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 53px;
    height: 25px;
  }
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: #1a77fa;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`;
