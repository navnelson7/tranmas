import React, { useState } from "react";
import FormViajes from "../FormViajes";
import { useMutation, useSubscription } from "@apollo/client";
import {
  insertViajeOne,
  submitNuevoKilometrajeGlobal,
  updateKilometrajeGlobalExistente,
} from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import {
  listenValidateKilometrajeGlobalByUnidad,
  listenKilometrajeMaxRegistroCombustible,
} from "../../../../graphql/Suscription";

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
    fecha:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    numero_de_viajes_realizados: 0,
    kilometrajes_recogidos: "",
    tipo_viaje: "",
    id_empleado_motorista: "",
    id_unidad_transporte: idUnidadTransporte,
  });

  const { data, loading, error } = useSubscription(
    listenValidateKilometrajeGlobalByUnidad,
    {
      variables: {
        id_unidad_transporte: idUnidadTransporte,
      },
    }
  );

  const KilometrajeMaxRegistroCombustible = useSubscription(
    listenKilometrajeMaxRegistroCombustible,
    {
      variables: {
        id: idUnidadTransporte,
      },
    }
  );

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
    if (NuevoViaje.tipo_viaje === "") {
      setLoading(false);
      setTextAlert("Selecciona el tipo de viaje");
      setIconType("error");
      setshowAlert(true);
    } else {
      setViaje({
        variables: NuevoViaje,
      })
        .then((res) => {
          if (res.data) {
            if (data.kilometraje_global.length === 0) {
              submitKilometrajeGlobalPorPrimeraVez();
            } else {
              submitKilometrajeGlobalExistente();
            }
          }
        })
        .catch((error) => {
          setLoading(false);
          setTextAlert(error.message);
          setIconType("error");
          setshowAlert(true);
        });
    }
  };

  const [setKilometrajeExistente] = useMutation(
    updateKilometrajeGlobalExistente
  );
  // ACTUALIZA EL KILOMETRAJE GLOBAL DE LA UNIDAD DE TRANSPORTE
  const submitKilometrajeGlobalExistente = () => {
    setKilometrajeExistente({
      variables: {
        id_unidad_transporte: idUnidadTransporte,
        kilometraje:
          NuevoViaje.kilometrajes_recogidos *
          NuevoViaje.numero_de_viajes_realizados,
      },
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

  const [setKilometrajePrimeraVez] = useMutation(submitNuevoKilometrajeGlobal);

  const submitKilometrajeGlobalPorPrimeraVez = () => {
    setKilometrajePrimeraVez({
      variables: {
        id_unidad_transporte: idUnidadTransporte,
        kilometraje:
          NuevoViaje.tipo_viaje === "Diario"
            ? NuevoViaje.kilometrajes_recogidos *
              NuevoViaje.numero_de_viajes_realizados
            : NuevoViaje.kilometrajes_recogidos,
      },
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
  if (Loading || loading || KilometrajeMaxRegistroCombustible.loading)
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
        submitViaje={submitViaje}
        NuevoViaje={NuevoViaje}
        changeViaje={changeViaje}
      />
    </div>
  );
}

export default Registro;
