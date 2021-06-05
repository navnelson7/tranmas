import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { insertDetalleEdificiosOne } from "../../../../graphql/Mutations";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import FormEdificio from "../FormEdificio";

function Registro() {
  const { idMantenimiento } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setEdificio] = useMutation(insertDetalleEdificiosOne);

  const [NuevoEdificio, setNuevoEdificio] = useState({
    id_mantenimiento: idMantenimiento,
    descripcion_de_trabajo: "",
    material: "",
    numero_factura: 0,
    costo: 0,
  });

  const changeEdificio = (e) => {
    setNuevoEdificio({
      ...NuevoEdificio,
      [e.target.name]: e.target.value,
    });
  };
  const submitRegistroEdificio = () => {
    setEdificio({
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
            push(`/tabla/detalle/matenimiento/edificios/${idMantenimiento}`);
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
        idMantenimiento={idMantenimiento}
        changeEdificio={changeEdificio}
        NuevoEdificio={NuevoEdificio}
        submitRegistroEdificio={submitRegistroEdificio}
      />
    </div>
  );
}

export default Registro;
