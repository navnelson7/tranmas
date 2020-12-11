import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { getEmpleadosListBox } from "../../graphql/Queries";

const ListBoxMotorista = ({ changeCombustible, motoristaSeleccionado = "" }) => {
    const { data, loading, error } = useQuery(getEmpleadosListBox);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    return (
        <InputGroup className="mb-3"> 
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Motorista</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                as="select"
                name="id_empleado_motorista"
                onChange={changeCombustible}
            >
                <option>
                    {motoristaSeleccionado === ""
                        ? "Seleccione un motorista"
                        : motoristaSeleccionado}
                </option>
                {data.empleados.lenght === 0 ? (
                    <option id="">No hay data</option>
                ) : (
                        data.empleados.map((empleado) => (
                            <option key={empleado.id} value={empleado.id}>
                                {empleado.nombres} {empleado.apellidos}
                            </option>
                        ))
                    )}
            </FormControl>
        </InputGroup>
    );
};
export default ListBoxMotorista;
