import React, { useState } from "react";
import FormCarWash from "../FormCarwash";
import { useMutation } from "@apollo/client";
import { insertControlCarwash } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";

function Registro() {
  const { id } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setCarwash] = useMutation(insertControlCarwash);
  const [NuevoControlCarwash, setNuevoControlCarwash] = useState({
    costo: 0,
    descripcion_trabajo: "",
    fecha:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    id_unidad_transporte: id,
  });

  const changeControlCarwash = (e) => {
    if (e.target.name === "costo") {
      setNuevoControlCarwash({
        ...NuevoControlCarwash,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setNuevoControlCarwash({
        ...NuevoControlCarwash,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    }
  };
  const submitControlCarwash = (e) => {
    setCarwash({
      variables: NuevoControlCarwash,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push(`/tabla/consumo/carwash/${id}`);
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
      <FormCarWash
        NuevoCarwash={NuevoControlCarwash}
        changeControlTransporte={changeControlCarwash}
        submitControlCarwash={submitControlCarwash}
      />
    </div>
  );
}

export default Registro;
