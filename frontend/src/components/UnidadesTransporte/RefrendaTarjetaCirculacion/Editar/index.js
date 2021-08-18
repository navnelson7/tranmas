import React, { useState, useEffect } from "react";
import FormRefrenda from "../FormRefrenda";
import { useMutation, useSubscription } from "@apollo/client";
import { updateRefrendaLicencia } from "../../../../graphql/Mutations";
import { listenRefrendaCirculacion } from "../../../../graphql/Suscription";
import { useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import { useSubmitGraphQL } from "../../../../hooks/useSubmitGraphQL";

function EditarRefrendaCirculacion() {
  const { idRefrenda, idTransporte } = useParams();
  const [setRefrenda] = useMutation(updateRefrendaLicencia);

  const [Execute, setExecute] = useState(false);

  const { data, loading, error } = useSubscription(listenRefrendaCirculacion, {
    variables: {
      id: idRefrenda,
    },
  });

  const [NuevoRefrendaCirculacion, setNuevoRefrendaCirculacion] = useState({
    costo_refrenda: 0,
    fecha_emision: "",
    fecha_refrenda: "",
    numero_tarjeta_circulacion: "",
    refrendado: true,
  });

  useEffect(() => {
    let refrenda = {};
    refrenda =
      data === undefined
        ? {}
        : { ...data.refrendas_tarjeta_circulacion_by_pk, id: idRefrenda };
    setNuevoRefrendaCirculacion(refrenda);
  }, [data, idRefrenda]);

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
      pushUrl: `/tabla/refrenda/circulacion/${idTransporte}`,
      execute: Execute,
    });

  if (Loading || loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p align="box-center">{`Error! ${error.message}`}</p>;
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
        submitRefrendaCirculacion={() => setExecute(true)}
        idTransporte={idTransporte}
      />
    </div>
  );
}

export default EditarRefrendaCirculacion;
