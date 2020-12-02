import React,{Fragment} from 'react';
import { Form, Container, InputGroup, FormControl} from 'react-bootstrap';
const BusquedaEmpleados = ({id_empleado,onChange}) => {
    return (
        <Fragment>
            <Container>
                <div className="box-lef">
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Codigo Empleado</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Codigo Empleado"
                                aria-label="codigo_empleado"
                                aria-describedby="basic-addon1"
                                value={id_empleado}
                                onChange={onChange}
                            />
                        </InputGroup>
                    </Form>
                </div>
            </Container>
        </Fragment>
    );
}

export default BusquedaEmpleados;