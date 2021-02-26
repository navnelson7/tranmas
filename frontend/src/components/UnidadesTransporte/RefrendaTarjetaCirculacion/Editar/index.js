import React, { useState, useEffect } from "react";
import FormRefrenda from "../FormRefrenda";
import { useMutation, useSubscription } from "@apollo/client";
import { updateRefrendaLicencia } from "../../../../graphql/Mutations";
import { listenRefrendaCirculacion } from "../../../../graphql/Suscription";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function EditarRefrendaCirculacion() {
  const { idRefrenda, idTransporte } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setRefrenda] = useMutation(updateRefrendaLicencia);

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
  }, [data]);

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
          setTextAlert("Actualizado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/tabla/refrenda/circulacion/${idTransporte}`);
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
        submitRefrendaCirculacion={submitRefrendaCirculacion}
        idTransporte={idTransporte}
      />
    </div>
  );
}

export default EditarRefrendaCirculacion;
