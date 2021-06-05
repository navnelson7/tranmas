import React, { useState, useEffect } from "react";
import FormCarwash from "../FormCarwash";
import { useMutation, useSubscription } from "@apollo/client";
import { updateControlCarwashById } from "../../../../graphql/Mutations";
import { listenControlCarwashById } from "../../../../graphql/Suscription";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function EditarControlCarwash() {
  const { idCarwash, idTransporte } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setCarwash] = useMutation(updateControlCarwashById);

  const { data, loading, error } = useSubscription(listenControlCarwashById, {
    variables: {
      id: idCarwash,
    },
  });

  const [CarwashState, setCarwashState] = useState({
    costo: 0,
    descripcion_trabajo: "",
  });

  useEffect(() => {
    let refrenda = {};
    refrenda =
      data === undefined
        ? {}
        : {
            ...data.registro_carwash_by_pk,
            id: idCarwash,
            fecha:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
          };
    setCarwashState(refrenda);
  }, [data, idCarwash]);

  const changeCarwashState = (e) => {
    if (e.target.name === "costo") {
      setCarwashState({
        ...CarwashState,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setCarwashState({
        ...CarwashState,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    }
  };
  const submitRefrendaCirculacion = (e) => {
    setCarwash({
      variables: CarwashState,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Actualizado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/tabla/consumo/carwash/${idTransporte}`);
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
      <FormCarwash
        NuevoCarwash={CarwashState}
        changeControlTransporte={changeCarwashState}
        submitControlCarwash={submitRefrendaCirculacion}
      />
    </div>
  );
}

export default EditarControlCarwash;
