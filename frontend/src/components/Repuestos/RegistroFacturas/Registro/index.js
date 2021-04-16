import React, { useState } from "react";
import FormFacturaRepuesto from "../FormFacturaRepuesto";
import { useMutation } from "@apollo/client";
import { insertOneFacturaRepuesto } from "../../../../graphql/Mutations";
import { ToastComponent } from "../../../Toast";
import { useHistory } from "react-router";

function RegistroFactura() {
  const { push } = useHistory();
  // ALERTAS
  const [showAlert, setshowAlert] = useState(false);
  const [IconType, setIconType] = useState("");
  const [TextAlert, setTextAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const [addFactura] = useMutation(insertOneFacturaRepuesto);

  const [NuevaFactura, setNuevaFactura] = useState({
    numero_factura: 0,
    cantidad_comprada: 1,
    fecha: "",
    id_repuesto: "",
    precio_repuesto: "",
  });

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
    addFactura({
      variables: NuevaFactura,
    })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIconType("success");
          setshowAlert(true);
          setTextAlert("Registrado correctamente");
          setTimeout(() => {
            //si todo va bien lo redirecciona al inicio
            push("/facturas/repuestos");
          }, 2000);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        setTextAlert(error.message);
        setIconType("error");
        setshowAlert(true);
      });
  };
  if (Loading)
    return (
      <div className="box-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
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
      />
    </div>
  );
}

export default RegistroFactura;
