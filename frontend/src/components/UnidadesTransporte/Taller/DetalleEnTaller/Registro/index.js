import React, { Fragment, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import ButtonDesitions from "../../../../ButtonsDesitions";
import FormDetalleEnTaller from "../FormDetalleTaller";
import { useMutation } from "@apollo/client";
import { ToastComponent } from "../../../../Toast";
import {
  updateCantidadRepuesto,
  insertDetalleTaller,
} from "../../../../../graphql/Mutations";

function RegistroDetalleEnTaller() {
  const { id } = useParams();
  const { push } = useHistory();

  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [NuevoDetallerTaller, setNuevoDetallerTaller] = useState({
    cantidad: 1,
    comentarios: "",
    id_repuesto: "",
    id_registro_taller: id,
  });
  const [ExecuteDetalleTaller, setExecuteDetalleTaller] = useState(false);
  const [setDetalleTaller] = useMutation(insertDetalleTaller);
  const [updateRespuesto] = useMutation(updateCantidadRepuesto);
  
  const changeTaller = (e) => {
    if (e.target.name === "cantidad") {
      setNuevoDetallerTaller({
        ...NuevoDetallerTaller,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setNuevoDetallerTaller({
        ...NuevoDetallerTaller,
        [e.target.name]: e.target.value,
      });
    }
  };
  // GUARDA EL ESTADO EN TALLER
  useEffect(() => {
    if (ExecuteDetalleTaller) {
      setLoading(true);
      setDetalleTaller({
        variables: NuevoDetallerTaller,
      })
        .then((res) => {
          if (res.data) {
            setLoading(false);
            setIconType("success");
            setTextAlert("Estado en taller registrado correctamente");
            setshowAlert(true);
            setExecuteDetalleTaller(true); 
            setNuevoDetallerTaller({
              ...NuevoDetallerTaller,
              cantidad: 1,
              comentarios: "",
              id_registro_taller: id,
            });
            setTimeout(() => {
              //si todo va bien lo redirecciona al inicio
              push("/unidades-transporte");
            }, 2000);
          }
        })
        .catch((error) => {
          if (error !== null || error !== undefined) {
            setTextAlert(error.message);
            setIconType("error");
            setLoading(false);
            setshowAlert(true);
          }
        });
    }
    // eslint-disable-next-line
  }, [ExecuteDetalleTaller, id]);

  //ACTUALIZA LA CANTIDAD DE REPUESTOS EN STOCK
  const submitUpdateCantidadDeRespuesto = (e) => {
    e.preventDefault();
    if (NuevoDetallerTaller.cantidad < 1) {
      setTextAlert("La cantidad debe ser mayor a uno");
      setIconType("error");
      setLoading(false);
      setshowAlert(true);
    } else {
      setLoading(true);
      updateRespuesto({
        variables: {
          id: NuevoDetallerTaller.id_repuesto,
          cantidad: NuevoDetallerTaller.cantidad / -1, // CONVIERTE EL NUMERO EN NEGATIVO
        },
      })
        .then((res) => {
          if (res.data) {
            setLoading(false);
            setIconType("success");
            setTextAlert("Registrado correctamente");
            setshowAlert(true);
            setExecuteDetalleTaller(true);
          }
        })
        .catch((error) => {
          if (error !== null || error !== undefined) {
            setTextAlert(error.message);
            setIconType("error");
            setLoading(false);
            setshowAlert(true);
          }
        });
    }
  };

  if (Loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleRegistroTaller>
        <div className="container-form">
          <h5>Formulario para registro de detalle en taller</h5>
          <FormDetalleEnTaller
            stateDetalleTaller={NuevoDetallerTaller}
            changeTaller={changeTaller}
          />
        </div>
      </StyleRegistroTaller>
      <ButtonDesitions
        linkCancel={"/unidades-transporte"}
        submitSave={submitUpdateCantidadDeRespuesto}
      />
    </Fragment>
  );
}

export default RegistroDetalleEnTaller;

export const StyleRegistroTaller = styled.div`
  /* MOBILE */

  @media (max-width: 1025px) {
    .container-form {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
    }
  }

  /* DESKTOP */

  @media (min-width: 720px) {
    .container-form {
      margin-left: 5%;
      margin-top: 50px;
    }
  }

  /* DESKTOP */

  @media (min-width: 1025px) {
    .container-form {
      margin-left: 20%;
      margin-right: 1%;
      margin-top: 50px;
    }
  }
`;
