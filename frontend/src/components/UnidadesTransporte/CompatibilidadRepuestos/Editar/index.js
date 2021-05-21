import React, { useState, useEffect } from "react";
import FormCompatibilidad from "../FormCompatibilidad";
import { useMutation, useSubscription } from "@apollo/client";
import { updateCompatibilidadRepuesto } from "../../../../graphql/Mutations";
import { compatibleRepuestroById } from "../../../../graphql/Suscription";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function EditarCompatibilidaRepuesto() {
  const { idUnidadTransporte, idCompatibilidad } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);

  const [setCompatibilidad] = useMutation(updateCompatibilidadRepuesto);

  const [NuevoCompatibilidadTransporte, setNuevoCompatibilidadTransporte] =
    useState({
      id: idCompatibilidad,
      id_repuesto: "",
      fecha:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      repuesto: {
        nombre: "",
      },
    });
  const { data, loading, error } = useSubscription(compatibleRepuestroById, {
    variables: {
      id: idCompatibilidad,
    },
  });
  useEffect(() => {
    let compatibilidad = {};
    compatibilidad =
      data === undefined
        ? {
            id_repuesto: "",
            fecha:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
            repuesto: {
              nombre: "",
            },
          }
        : data.registro_compatibilidad_repuestos_by_pk;
    setNuevoCompatibilidadTransporte(compatibilidad);
  }, [data, idUnidadTransporte]);

  const changeCompatibilidadTransporte = (e) => {
    setNuevoCompatibilidadTransporte({
      ...NuevoCompatibilidadTransporte,
      [e.target.name]: e.target.value,
    });
  };
  const submitCompatibilidadTransporte = () => {
    setCompatibilidad({
      variables: {
        fecha: NuevoCompatibilidadTransporte.fecha,
        id_repuesto: NuevoCompatibilidadTransporte.id_repuesto,
        id: NuevoCompatibilidadTransporte.id,
      },
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Actualizado correctamente");
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
  if (Loading || loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p className="box-center">{`Error! ${error.message}`}</p>;

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

export default EditarCompatibilidaRepuesto;
