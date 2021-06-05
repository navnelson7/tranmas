import React, { useState, useEffect } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import { updateDetalleMantenimientoEdificio } from "../../../../graphql/Mutations";
import { listenDetalleMantenimientoEdificioById } from "../../../../graphql/Suscription";
import { useHistory, useParams } from "react-router";
import { ToastComponent } from "../../../Toast";
import FormEdificio from "../FormEdificio";

function Registro() {
  const { idDetalle, idMantenimiento } = useParams();
  const { push } = useHistory();
  //ALERTA
  const [TextAlert, setTextAlert] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [setEdificio] = useMutation(updateDetalleMantenimientoEdificio);

  const [NuevoEdificio, setNuevoEdificio] = useState({
    descripcion_de_trabajo: "",
    material: "",
    numero_factura: 0,
    costo: 0,
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
    edificio =
      data === undefined ? {} : data.detalle_mantenimiento_edificios_by_pk;
    setNuevoEdificio(edificio);
  }, [data, idDetalle]);

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
          setTextAlert("Editado correctamente");
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
        idMantenimiento={idMantenimiento}
        changeEdificio={changeEdificio}
        NuevoEdificio={NuevoEdificio}
        submitRegistroEdificio={submitRegistroEdificio}
      />
    </div>
  );
}

export default Registro;
