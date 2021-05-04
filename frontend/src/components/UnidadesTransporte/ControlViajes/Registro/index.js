import React, { useState } from "react";
import FormViajes from "../FormViajes";
import { useMutation } from "@apollo/client";
import { insertViajeOne } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function Registro() {
  const { idUnidadTransporte } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setViaje] = useMutation(insertViajeOne);
  const [NuevoViaje, setNuevoViaje] = useState({
    fecha: "",
    numero_de_viajes_realizados: 0,
    kilometrajes_recogidos: "",
    tipo_viaje: "",
    id_empleado_motorista: "",
    id_unidad_transporte: idUnidadTransporte,
  });

  const changeViaje = (e) => {
    if (e.target.type === "number") {
      setNuevoViaje({
        ...NuevoViaje,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setNuevoViaje({
        ...NuevoViaje,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submitViaje = (e) => {
    setViaje({
      variables: NuevoViaje,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/control/viajes/${idUnidadTransporte}`);
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
      <FormViajes
        submitViaje={submitViaje}
        NuevoViaje={NuevoViaje}
        changeViaje={changeViaje}
      />
    </div>
  );
}

export default Registro;
