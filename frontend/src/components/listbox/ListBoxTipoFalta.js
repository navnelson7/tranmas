import React, { useState } from 'react';
import { InputGroup, FormControl } from "react-bootstrap";
import { useQuery } from "@apollo/client"
import { getTipoFaltas } from "../../graphql/Queries"

const ListBoxTipoFaltas = ({changeFalta, faltaSeleccionada=""}) => {
    const [faltas] = useState([
        {
            id: "",
            falta: "",
        },
    ])

    const {id} = faltas;

    const {data, loading, error} = useQuery(getTipoFaltas);

    if(loading) return "Loading ....";
    if(error) return `Error! ${error.message}`;

    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Tipo de Falta</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                as="select"
                name="id_falta"
                value={id}
                onChange={changeFalta}
            >
                <option>
                    { faltaSeleccionada === ""
                        ? "Seleccione una Falta"
                        : faltaSeleccionada
                    }
                </option>
                {data.tipos_de_faltas.length === 0 ? (
                    <option id="">No hay data</option>
                ): (
                    data.tipos_de_faltas.map((falta)=>(
                        <option key={falta.id} value={falta.id}>
                            {falta.falta}
                        </option>
                    ))
                )}
            </FormControl>
        </InputGroup>
    );
}

export default ListBoxTipoFaltas;