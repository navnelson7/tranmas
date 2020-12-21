import React from 'react';
import { Fragment } from 'react';
import {Form, InputGroup} from 'react-bootstrap'
const FormularioFaltas = () => {
    return ( 
        <Fragment>  
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Codigo Empleado</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form>
        </Fragment>
     );
}
 
export default FormularioFaltas;