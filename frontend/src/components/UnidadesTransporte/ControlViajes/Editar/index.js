import React, { useState, useEffect } from "react";
import FormViajes from "../FormViajes";
import { useMutation, useSubscription } from "@apollo/client";
import { updateViajesById } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import { listenViajeById } from "../../../../graphql/Suscription";
function EditarViaje() {
  const { idUnidadTransporte, idViaje } = useParams();
  const { push } = useHistory();

  const { data, loading, error } = useSubscription(listenViajeById, {
    variables: {
      id: idViaje,
    },
  });
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setViaje] = useMutation(updateViajesById);
  const [NuevoViaje, setNuevoViaje] = useState({
    fecha: "",
    numero_de_viajes_realizados: 0,
    kilometrajes_recogidos: "",
    tipo_viaje: "",
    id_empleado_motorista: "",
    id_unidad_transporte: idUnidadTransporte,
  });

  useEffect(() => {
    let viaje = {};
    viaje =
      data === undefined
        ? {
            fecha: "",
            numero_de_viajes_realizados: 0,
            kilometrajes_recogidos: "",
            tipo_viaje: "",
            id_empleado_motorista: "",
            id_unidad_transporte: idUnidadTransporte,
          }
        : {
            fecha: data.control_viajes_by_pk.fecha,
            numero_de_viajes_realizados:
              data.control_viajes_by_pk.numero_de_viajes_realizados,
            id_empleado_motorista:
              data.control_viajes_by_pk.id_empleado_motorista,
            kilometrajes_recogidos:
              data.control_viajes_by_pk.kilometrajes_recogidos,
            tipo_viaje: data.control_viajes_by_pk.tipo_viaje,
            id_unidad_transporte: idUnidadTransporte,
            id: data.control_viajes_by_pk.id,
          };
    setNuevoViaje(viaje);
  }, [data, idUnidadTransporte]);
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
  const submitViaje = () => {
    setViaje({
      variables: NuevoViaje,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Actualizado correctamente");
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
      <FormViajes
        motorista={data.control_viajes_by_pk.empleado_motorista}
        submitViaje={submitViaje}
        NuevoViaje={NuevoViaje}
        changeViaje={changeViaje}
      />
    </div>
  );
}

export default EditarViaje;
