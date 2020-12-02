import React, { Fragment, useState } from 'react';
import { Container } from 'react-bootstrap';
import BusquedaEmpleados from './BusquedaEmpleados';
const RegistroFaltas = () => {
    const [codigo, setCodigo] = useState({
        id_empleado:''
    })
    const {
        id_empleado
    } = codigo

    const onChange = e =>{
        setCodigo({
            ...codigo,
            [e.target.name] : e.target.value
        })
    }
    return ( 
        <Fragment>
            <div className="box-left">
                <Container>
                    <BusquedaEmpleados  value={id_empleado} onChange={onChange} />
                </Container>
            </div>
        </Fragment>
     );
}
 
export default RegistroFaltas;