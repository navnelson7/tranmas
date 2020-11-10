import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const editandoMarca = (e)=> {
    e.PreventDefault();

}

const borrandoMarca = (e) => {
    e.PreventDefault();
}

const Marca = ({marca}) => {
    return ( 
        <Fragment>
            <td>{marca.marca}</td>     
            <td>
                <Button variant="info" value={marca.id} onClick={editandoMarca}><FontAwesomeIcon icon={faEdit}/></Button>
               <Button variant="danger" value={marca.id} onClick={borrandoMarca} ><FontAwesomeIcon icon={faTrash}/></Button>
            </td>
        </Fragment>
     );
}
 
export default Marca;