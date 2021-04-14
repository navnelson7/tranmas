import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { insertRegistroEdificiosOne } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import FormEdificio from "../FormEdificio";

function Registro() {
  const { id } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setCarwash] = useMutation(insertRegistroEdificiosOne);
  const [NuevoEdificio, setNuevoEdificio] = useState({
    nombre: "",
    descripcion: "",
    extension: "",
    funcion_edificio: "",
  });

  const changeEdificio = (e) => {
    setNuevoEdificio({
      ...NuevoEdificio,
      [e.target.name]: e.target.value,
    });
  };
  const submitRegistroEdificio = () => {
    setCarwash({
      variables: NuevoEdificio,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/tabla/edificios");
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
      <FormEdificio
        changeEdificio={changeEdificio}
        NuevoEdificio={NuevoEdificio}
        submitRegistroEdificio={submitRegistroEdificio}
      />
    </div>
  );
}

export default Registro;
