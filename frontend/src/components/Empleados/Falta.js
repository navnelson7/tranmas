import React from 'react';
import { Fragment } from 'react';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
const Falta = ({falta,eliminarFalta,id}) => {
    return ( 
        <Fragment>
            <td>{falta.empleado_que_cometio_falta.codigo_empleado}</td>
            <td>{falta.empleado_que_cometio_falta.nombres} {falta.empleado_que_cometio_falta.apellidos}</td>
            <td>{falta.tipo_de_falta_cometida.falta}</td>
            <td>{falta.descripcion_de_falta}</td>
            {/* <td><Button variant="danger" onClick={()=> eliminarFalta(falta.id)}><FontAwesomeIcon  icon={faTrash}/></Button></td> */}
            <td><Button variant="danger" onClick={()=> eliminarFalta(id)}><FontAwesomeIcon  icon={faTrash} value={id}/></Button></td>
        </Fragment>
     );
}
 
export default Falta;