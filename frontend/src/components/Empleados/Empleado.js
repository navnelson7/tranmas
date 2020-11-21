import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const Empleado = ({empleado}) => {
    return (
        <Fragment>
                <td>{empleado.codigo_empleado}</td>
                <td>{empleado.nombres}</td>
                <td>{empleado.apellidos}</td>
                <td>{empleado.edad}</td>
                <td>{empleado.dui}</td>
                <td>
                <Link to={`/actualizar-empleado/${empleado.id}`} variant="danger" value={empleado.id}><Button variant="info" value={empleado.id} ><FontAwesomeIcon icon={faEdit}/></Button></Link>
                <Button variant="danger" value={empleado.id}  ><FontAwesomeIcon icon={faTrash}/></Button>
                </td>
        </Fragment>
    );
} 

export default Empleado;