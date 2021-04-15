import React, { useState, useEffect } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import { updateRegistroEdificios } from "../../../../graphql/Mutations";
import { listenDetalleMantenimientoEdificioById } from "../../../../graphql/Suscription";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import FormEdificio from "../FormEdificio";

function EditarEdficio() {
  const { idDetalle } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [updateEdificio] = useMutation(updateRegistroEdificios);
  const [NuevoEdificio, setNuevoEdificio] = useState({
    nombre: "",
    descripcion: "",
    extension: "",
    funcion_edificio: "",
  });

  const { data, loading, error } = useSubscription(
    listenDetalleMantenimientoEdificioById,
    {
      variables: {
        id: idDetalle,
      },
    }
  );
  useEffect(() => {
    let edificio = {};
    edificio = data === undefined ? {} : data.registro_edificios_by_pk;
    setNuevoEdificio(edificio);
  }, [data, idDetalle]);

  const changeEdificio = (e) => {
    setNuevoEdificio({
      ...NuevoEdificio,
      [e.target.name]: e.target.value,
    });
  };
  const submitRegistroEdificio = () => {
    updateEdificio({
      variables: NuevoEdificio,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Actualizado correctamente");
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
      <FormEdificio
        changeEdificio={changeEdificio}
        NuevoEdificio={NuevoEdificio}
        submitRegistroEdificio={submitRegistroEdificio}
      />
    </div>
  );
}

export default EditarEdficio;
