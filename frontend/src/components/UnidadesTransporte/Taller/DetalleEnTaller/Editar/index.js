import React, { Fragment, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import FormDetalleEnTaller from "../FormDetalleTaller";
import { useSubscription, useMutation } from "@apollo/client";
import { ToastComponent } from "../../../../Toast";
import { StyleRegistroTaller } from "../Registro";
import { listenDetalleTallerUpdate } from "../../../../../graphql/Suscription";
import {
  updateDetalleTrabajoTaller,
  deleteDetalleEnTaller,
} from "../../../../../graphql/Mutations";
import ButtonDesitionsWithDelete from "../../../../ButtonsDesitions/ButtonDesitionsWithDelete";

function EditarDetalleEnTaller() {
  const { id } = useParams();
  const {push} = useHistory();

  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const { data, loading, error } = useSubscription(listenDetalleTallerUpdate, {
    variables: {
      id: id,
    },
  });

  const [setDetalleTrabajoTaller] = useMutation(updateDetalleTrabajoTaller);

  const [NuevoDetallerTaller, setNuevoDetallerTaller] = useState({
    id: id,
    cantidad: 1,
    comentarios: "",
  });

  useEffect(() => {
    let estadoTaller = {};
    estadoTaller = data === undefined ? {} : data.detalle_trabajo_taller_by_pk;

    setNuevoDetallerTaller(estadoTaller);
    // eslint-disable-next-line
  }, [data]);

  const changeTaller = (e) => {
    if (e.target.name === "cantidad") {
      setNuevoDetallerTaller({
        ...NuevoDetallerTaller,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setNuevoDetallerTaller({
        ...NuevoDetallerTaller,
        [e.target.name]: e.target.value,
      });
    }
  };

  const updateDetalle = () => {
    setDetalleTrabajoTaller({
      variables: {
        id: id,
        cantidad: NuevoDetallerTaller.cantidad,
        comentarios: NuevoDetallerTaller.comentarios,
      },
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setTextAlert("Actualizado correctamente");
          setshowAlert(true);
        }
      })
      .catch((error) => {
        if (error !== null || error !== undefined) {
          setTextAlert(error.message);
          setIconType("error");
          setLoading(false);
          setshowAlert(true);
        }
      });
  };
  const [deleteDetalleTallerById] = useMutation(deleteDetalleEnTaller);

  const deleteDetalle = () => {
    deleteDetalleTallerById({
      variables: { id },
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setTextAlert("Eliminado correctamente");
          setshowAlert(true);
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/unidades-transporte");
          }, 2000);
        }
      })
      .catch((error) => {
        if (error !== null || error !== undefined) {
          setTextAlert(error.message);
          setIconType("error");
          setLoading(false);
          setshowAlert(true);
        }
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

  if (error) return <p className="center">Error! ${error.message}</p>;
  return (
    <Fragment>
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <StyleRegistroTaller>
        <div className="container-form">
          <h5>Formulario para editar detalle en taller</h5>
          <FormDetalleEnTaller
            stateDetalleTaller={NuevoDetallerTaller}
            changeTaller={changeTaller}
            repuestoSelected={
              data.detalle_trabajo_taller_by_pk === null
                ? ""
                : data.detalle_trabajo_taller_by_pk.repuesto.nombre
            }
          />
        </div>
      </StyleRegistroTaller>
      <ButtonDesitionsWithDelete
        linkCancel={"/unidades-transporte"}
        submitSave={updateDetalle}
        submitDelete={deleteDetalle}
      />
    </Fragment>
  );
}

export default EditarDetalleEnTaller;