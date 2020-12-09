import React, {Fragment} from 'react'
import {InputGroup,FormControl } from "react-bootstrap";


function NuevoCombustible() {
    return (
        <Fragment>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                        Galones servidos
                        </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Galones servidos"
                    name="galones_servidos"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                        Kilometraje actual
                        </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Kilometraje actual"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="kilometraje_actual"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                        Motorista
                        </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="select" name="id_empleado_motorista">
                    <option>Selecciona un motorista</option>
                    <option value="test">test</option>
                </FormControl>
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                        Comentarios
                        </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Comentarios"
                    name="comentarios"
                />
            </InputGroup>
        </Fragment>
    )
}

export default NuevoCombustible
