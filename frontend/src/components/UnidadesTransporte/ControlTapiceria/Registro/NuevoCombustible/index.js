import React, { Fragment, useState } from 'react'
import { InputGroup, FormControl } from "react-bootstrap";
import ListBoxMotorista from '../../../listbox/ListBoxMotorista';

function NuevoCombustible({ setCombustible, Combustible }) {

    const changeCombustible = (e) => {
        e.preventDefault()
        if (e.target.name === "kilometraje_actual" && e.target.name === "galones_servidos") {
            setCombustible({
                ...Combustible,
                [e.target.name]: parseInt(e.target.value)
            })
        } else {
            setCombustible({
                ...Combustible,
                [e.target.name]: e.target.value
            })
        }
    }
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
                    onChange={e => changeCombustible(e)}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                        Kilometraje actual
                        </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    type="number"
                    placeholder="Kilometraje actual"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="kilometraje_actual"
                    onChange={e => changeCombustible(e)}
                />
            </InputGroup>
            <ListBoxMotorista changeCombustible={changeCombustible} />

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                        Comentarios
                        </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Comentarios"
                    name="comentarios"
                    onChange={e => changeCombustible(e)}
                />
            </InputGroup>
        </Fragment>
    )
}

export default NuevoCombustible
