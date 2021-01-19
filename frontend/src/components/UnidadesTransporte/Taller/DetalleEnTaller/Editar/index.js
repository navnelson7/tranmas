import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonDesitions from "../../../../ButtonsDesitions";
import FormDetalleEnTaller from "../FormDetalleTaller";
import { useSubscription, useMutation } from "@apollo/client";
import { ToastComponent } from "../../../../Toast";
import { StyleRegistroTaller } from "../Registro";
import { listenDetalleTallerUpdate } from "../../../../../graphql/Suscription";
import { updateDetalleTrabajoTaller } from "../../../../../graphql/Mutations";

function EditarDetalleEnTaller() {
  const { id } = useParams();

  //ALERT
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const { data, loading } = useSubscription(listenDetalleTallerUpdate, {
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

  if (Loading || loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

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
          />
        </div>
      </StyleRegistroTaller>
      <ButtonDesitions
        linkCancel={"/unidades-transporte"}
        submitSave={updateDetalle}
      />
    </Fragment>
  );
}

export default EditarDetalleEnTaller;
