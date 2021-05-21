import React, { useState } from "react";
import FormCompatibilidad from "../FormCompatibilidad";
import { useMutation } from "@apollo/client";
import { insertCompatibilidadRepuesto } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function RegistroCompatibilidaRepuesto() {
  const { idUnidadTransporte } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);

  const [setCompatibilidad] = useMutation(insertCompatibilidadRepuesto);

  const [NuevoCompatibilidadTransporte, setNuevoCompatibilidadTransporte] =
    useState({
      id_repuesto: "",
      fecha:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      id_unidad_transporte: idUnidadTransporte,
    });

  const changeCompatibilidadTransporte = (e) => {
    setNuevoCompatibilidadTransporte({
      ...NuevoCompatibilidadTransporte,
      [e.target.name]: e.target.value,
    });
  };
  const submitCompatibilidadTransporte = () => {
    setCompatibilidad({
      variables: NuevoCompatibilidadTransporte,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/tabla/compatibilidad/repuesto/${idUnidadTransporte}`);
          }, 2000);
        }
      })
      .catch((error) => {
        setLoading(false);
        setTextAlert(error.message);
        setIconType("error");
        setshowAlert(true);
      });
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
    <div>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <FormCompatibilidad
        NuevoCompatibilidadTransporte={NuevoCompatibilidadTransporte}
        changeCompatibilidadTransporte={changeCompatibilidadTransporte}
        submitCompatibilidadTransporte={submitCompatibilidadTransporte}
        idUnidadTransporte={idUnidadTransporte}
      />
    </div>
  );
}

export default RegistroCompatibilidaRepuesto;
