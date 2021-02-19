import React, { useState } from "react";
import FormAireAcondicionado from "../FormAireAccidente";
import { useMutation } from "@apollo/client";
import { newAireAcondicionado } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function Registro() {
  const { id } = useParams();
  const {push} = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setAireAcondicionado] = useMutation(newAireAcondicionado);
  const [NuevoAireAcondicionado, setNuevoAireAcondicionado] = useState({
    descripcion: "",
    fecha:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id_unidad_transporte: id,
    id_empleado_motorista: "",
  });

  const changeAireAcondicionado = (e) => {
    setNuevoAireAcondicionado({
      ...NuevoAireAcondicionado,
      [e.target.name]: e.target.value,
    });
  };
  const submitAireAcondicionado = (e) => {
    setAireAcondicionado({
      variables: NuevoAireAcondicionado,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/tabla/aire/acondicionado/${id}`);
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
      <FormAireAcondicionado
        submitAireAcondicionado={submitAireAcondicionado}
        NuevoAireAcondicionado={NuevoAireAcondicionado}
        changeAireAcondicionado={changeAireAcondicionado}
      />
    </div>
  );
}

export default Registro;
