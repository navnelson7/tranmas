import React, { useState } from "react";
import FormRefrenda from "../FormRefrenda";
import { useMutation } from "@apollo/client";
import { insertRefrendaCirculacion } from "../../../../graphql/Mutations";
import { useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import { useSubmitGraphQL } from "../../../../hooks/useSubmitGraphQL";

function Registro() {
  const [Execute, setExecute] = useState(false);
  const { id } = useParams();

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

  const { TextAlert, showAlert, IconType, Loading, setshowAlert } =
    useSubmitGraphQL({
      mutationSubmit: setRefrenda,
      variables: NuevoRefrendaCirculacion,
      pushUrl: `/tabla/refrenda/circulacion/${id}`,
      execute: Execute,
    });
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
        submitRefrendaCirculacion={() => {
          setExecute(true);
        }}
      />
    </div>
  );
}

export default Registro;
