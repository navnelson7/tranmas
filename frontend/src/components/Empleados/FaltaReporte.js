import React from 'react';
import { Fragment } from 'react';
const FaltaReporte = ({falta}) => {
    return ( 
        <Fragment>
            <td>{falta.fecha_de_falta}</td>
            <td>{falta.empleado_que_cometio_falta.nombres} {falta.empleado_que_cometio_falta.apellidos}</td>
            <td>{falta.tipo_de_falta_cometida.falta}</td>
            <td>{falta.descripcion_de_falta}</td>
        </Fragment>
     );
}
 
export default FaltaReporte;