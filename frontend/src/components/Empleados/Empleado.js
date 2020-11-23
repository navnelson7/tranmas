import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPrint } from '@fortawesome/free-solid-svg-icons'

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
                <Link to={`/ficha-empleado/${empleado.codigo_empleado}`} variant="success" value={empleado.codigo_empleado}><Button variant="success" value={empleado.codigo_empleado}><FontAwesomeIcon icon={faPrint}/></Button></Link>
                </td>
        </Fragment>
    );
} 

export default Empleado;