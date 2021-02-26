import React, { useState, useEffect } from "react";
import FormAireAcondicionado from "../FormAireAccidente";
import { useMutation, useSubscription } from "@apollo/client";
import { updateAireAcondicionadoOne } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import { listenAireAcondicionadoById } from "../../../../graphql/Suscription";

function Editar() {
  const { idTransporte, idAireAcondicionado } = useParams();
  const { push } = useHistory();
  const AireAcondicionado = useSubscription(listenAireAcondicionadoById, {
    variables: {
      id: idAireAcondicionado,
    },
  });

  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setAireAcondicionado] = useMutation(updateAireAcondicionadoOne);

  const [NuevoAireAcondicionado, setNuevoAireAcondicionado] = useState({
    descripcion: "",
    id_empleado_motorista: "",
  });

  useEffect(() => {
    let aire = {};
    aire =
      AireAcondicionado.data === undefined
        ? {}
        : {
            ...AireAcondicionado.data.aire_acondicionado_by_pk,
            fecha:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
            id: idAireAcondicionado,
          };
    setNuevoAireAcondicionado(aire);
  }, [AireAcondicionado.data, idAireAcondicionado]);

  const changeAireAcondicionado = (e) => {
    setNuevoAireAcondicionado({
      ...NuevoAireAcondicionado,
      [e.target.name]: e.target.value,
    });
  };
  const submitAireAcondicionado = () => {
    console.log(NuevoAireAcondicionado);
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
            push(`/tabla/aire/acondicionado/${idTransporte}`);
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

export default Editar;
