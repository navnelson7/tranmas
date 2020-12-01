import React,{Fragment, useState} from 'react';
import { Form, Container, InputGroup, FormControl} from 'react-bootstrap';
const BusquedaEmpleados = () => {
    const [codigo, setCodigo] = useState()
    return (
        <Fragment>
            <Container>
                <div className="box-lef">
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>Codigo Empleado</InputGroup.Append>
                            <FormControl
                                placeholder="Codigo Empleado"
                                aria-label="codigo_empleado"
                                aria-describedby="basic-addon1"
                                value={codigo}
                            />
                        </InputGroup>
                    </Form>
                </div>
            </Container>
        </Fragment>
    );
}

export default BusquedaEmpleados;