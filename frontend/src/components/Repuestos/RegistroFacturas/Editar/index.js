import React, { useState, useEffect } from "react";
import FormFacturaRepuesto from "../FormFacturaRepuesto";
import { useMutation, useSubscription } from "@apollo/client";
import { updateRegistroFacturaRepuesto } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";
import { useHistory, useParams } from "react-router";
import { listenFacturaRepuestoById } from "../../../../graphql/Suscription";

function EditarFactura() {
  const { id } = useParams();
  const { push } = useHistory();
  // ALERTAS
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const { data, loading, error } = useSubscription(listenFacturaRepuestoById, {
    variables: {
      id: id,
    },
  });
  const [updateFactura] = useMutation(updateRegistroFacturaRepuesto);

  const [NuevaFactura, setNuevaFactura] = useState({
    numero_factura: 0,
    cantidad_comprada: 1,
    fecha: "",
    id_repuesto: "",
  });

  useEffect(() => {
    let factura = {};
    factura =
      data === undefined
        ? {}
        : {
            numero_factura: data.registro_facturas_by_pk.numero_factura,
            cantidad_comprada: data.registro_facturas_by_pk.cantidad_comprada,
            fecha: data.registro_facturas_by_pk.fecha,
            id_repuesto: data.registro_facturas_by_pk.id_repuesto,
          };
    setNuevaFactura(factura);
  }, [data, id]);

  const changeFactura = (e) => {
    if (
      e.target.name === "numero_factura" ||
      e.target.name === "cantidad_comprada"
    ) {
      setNuevaFactura({
        ...NuevaFactura,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setNuevaFactura({
        ...NuevaFactura,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitFactura = () => {
    setLoading(true);
    updateFactura({
      variables: {
        ...NuevaFactura,
        id: id,
      },
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Actualizado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/facturas/repuestos");
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
      <div className="box-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p align="center">{`Error! ${error.message}`}</p>;
  console.log(data.registro_facturas_by_pk);
  return (
    <div>
      <br />
      <ToastComponent
        showAlert={showAlert}
        setShowAlert={setshowAlert}
        iconType={IconType}
        textAlert={TextAlert}
      />
      <FormFacturaRepuesto
        NuevaFactura={NuevaFactura}
        changeFactura={changeFactura}
        submitFactura={submitFactura}
        repuestoSeleccionado={data.registro_facturas_by_pk.repuesto.nombre}
      />
    </div>
  );
}

export default EditarFactura;
