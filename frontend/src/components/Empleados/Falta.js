import React from 'react';
import { Fragment } from 'react';
const Falta = ({falta}) => {
    return ( 
        <Fragment>
            <td>{falta.empleado_que_cometio_falta.codigo_empleado}</td>
            <td>{falta.empleado_que_cometio_falta.nombres} {falta.empleado_que_cometio_falta.apellidos}</td>
            <td>{falta.tipo_de_falta_cometida.falta}</td>
            <td>{falta.descripcion_de_falta}</td>
        </Fragment>
     );
}
 
export default Falta;