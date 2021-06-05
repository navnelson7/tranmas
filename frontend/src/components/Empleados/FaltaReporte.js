import React from 'react';
import { Fragment } from 'react';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTable, faTrash} from '@fortawesome/free-solid-svg-icons';
const FaltaReporte = ({falta,eliminarFalta,id}) => {
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