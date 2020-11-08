import React, { Fragment, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { listenNotification } from "../../../../graphql/Suscription";
import { useSubscription } from "@apollo/client";
import alertSound from "../sonido/alert.mp3";

function DropdownNotificaciones() {
  const [Notificaciones, setNotificaciones] = useState([]);
  const [NumberNotification, setNumberNotification] = useState(0);
  const { data, loading } = useSubscription(listenNotification);
  useEffect(() => {
    let datos = [];
    datos = data === undefined ? [] : data.notificaciones;
    setNotificaciones(datos);
    setNumberNotification(NumberNotification + 1);
    if (NumberNotification >= 2) {
      var audio = new Audio(alertSound);
      audio.play();
    }
  }, [data]);
  if (loading) {
    return "";
  }
  return (
    <Fragment>
      <div className="dropdown scroll-container">
        {Notificaciones.map((notificacion) => {
          return (
            <span key={uuidv4()}>
              <strong>{notificacion.usuario}</strong> {notificacion.mensaje}
            </span>
          );
        })}
      </div>
    </Fragment>
  );
}

export default DropdownNotificaciones;
