import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const Estado = ({estado,deleteEstado}) => {
     const borrandoEstado= (e)=> {
         e.preventDefault()
         console.log(estado.id);
     }
    return (

       <Fragment>
            <td>{estado.estado_repuestos}</td>
            <td>
               <Button variant="info" value={estado.id} onClick={deleteEstado}><FontAwesomeIcon icon={faEdit}/></Button>
               <Button variant="danger" value={estado.id} onClick={borrandoEstado} ><FontAwesomeIcon icon={faTrash}/></Button>
            </td>
       </Fragment>
    );
}

export default Estado;