import React, { useState } from "react";
import FormRefrenda from "../FormRefrenda";
import { useMutation } from "@apollo/client";
import { insertRefrendaCirculacion } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function Registro() {
  const { id } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setRefrenda] = useMutation(insertRefrendaCirculacion);
  const [NuevoRefrendaCirculacion, setNuevoRefrendaCirculacion] = useState({
    costo_refrenda: 0,
    fecha_emision: "",
    fecha_refrenda: "",
    numero_tarjeta_circulacion: "",
    refrendado: true,
    id_unidad_transporte: id,
  });

  const changeNuevoRefrendaCirculacion = (e) => {
    if (e.target.name === "costo_refrenda") {
      setNuevoRefrendaCirculacion({
        ...NuevoRefrendaCirculacion,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setNuevoRefrendaCirculacion({
        ...NuevoRefrendaCirculacion,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    }
  };
  const submitRefrendaCirculacion = (e) => {
    setRefrenda({
      variables: NuevoRefrendaCirculacion,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/tabla/refrenda/circulacion/${id}`);
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
      <FormRefrenda
        NuevoRefrendaCirculacion={NuevoRefrendaCirculacion}
        changeNuevoRefrendaCirculacion={changeNuevoRefrendaCirculacion}
        submitRefrendaCirculacion={submitRefrendaCirculacion}
      />
    </div>
  );
}

export default Registro;
