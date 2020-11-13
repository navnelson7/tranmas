import React, { Fragment, useState } from "react";
import { useQuery } from "@apollo/client";
import { getEmpleados } from "../../../graphql/Queries";
import { SplitButton, Dropdown } from "react-bootstrap";

function Empleados({ setStateUser }) {
  const [nombreEmpleado, setnombreEmpleado] = useState("");
  const { loading, error, data } = useQuery(getEmpleados);

  if (loading) return "";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <SplitButton
        title={nombreEmpleado ? nombreEmpleado : "Empleado"}
        className="btn-block mt-dropdown"
      >
        {data.empleados.map((empleado) => {
          return (
            <Fragment key={empleado.id}>
              <Dropdown.Item
                eventKey="1"
                onClick={() => {
                  setStateUser("id_empleado", empleado.id);
                  setnombreEmpleado(
                    empleado.nombres + " " + empleado.apellidos
                  );
                }}
              >
                {empleado.nombres} {empleado.apellidos}
              </Dropdown.Item>
            </Fragment>
          );
        })}
      </SplitButton>
    </div>
  );
}

export default Empleados;
