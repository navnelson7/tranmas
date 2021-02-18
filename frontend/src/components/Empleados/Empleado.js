import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPrint } from '@fortawesome/free-solid-svg-icons'

const Empleado = ({empleado,eliminarEmpleado,id}) => {
    return (
        <Fragment>
                <td>{empleado.codigo_empleado}</td>
                <td>{empleado.nombres}</td>
                <td>{empleado.apellidos}</td>
                <td>{empleado.edad}</td>
                <td>{empleado.dui}</td>
                <td>
                <Link to={`/actualizar-empleado/${empleado.id}`} variant="danger" value={empleado.id}><Button variant="info" value={empleado.id} ><FontAwesomeIcon icon={faEdit}/></Button></Link>
                <Button variant="danger" value={empleado.id} onClick={()=> eliminarEmpleado(id)} ><FontAwesomeIcon icon={faTrash}/></Button>
                <Link to={`/ficha-empleado/${empleado.id}`} variant="success" value={empleado.id}><Button variant="success" value={empleado.codigo_empleado}><FontAwesomeIcon icon={faPrint}/></Button></Link>
                </td>
        </Fragment>
    );
} 

export default Empleado;