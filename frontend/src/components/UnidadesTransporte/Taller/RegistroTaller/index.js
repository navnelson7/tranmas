import React from "react";
import { Fragment } from "react";
import FormNuevoRegistro from "./FormNuevoRegistro";
import Registros from "./Registros";

function RegistroTaller() {
  return (
    <Fragment>
      <FormNuevoRegistro />
      <Registros />
    </Fragment>
  );
}

export default RegistroTaller;
