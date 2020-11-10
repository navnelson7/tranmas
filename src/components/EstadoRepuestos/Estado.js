import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

import { deletEstadosbyId } from '../../graphql/Mutations';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

const Estado = ({estado}) => {
    const [id, setIdEstado] = useState([]);
    const [deleteEstado] = useMutation(deletEstadosbyId);

     const borrandoEstado= (e)=> {
         e.preventDefault()
         setIdEstado(estado.id)
         console.log(id);
         if(id === ''){
             return
         }else{
            deleteEstado({
                variables: id
            }).then((res) => {
               if (res.data) {
                 console.log("Borrado")
               }
             })
             .catch((error) => {
               console.log("error")
             });
         }
     }

     const editandoEstado = (e) =>{
         e.preventDefault();
         console.log(estado.id);
     }
    return (

       <Fragment>
            <td>{estado.estado_repuestos}</td>
            <td>
               <Button variant="info" value={estado.id} onClick={editandoEstado}><FontAwesomeIcon icon={faEdit}/></Button>
               <Button variant="danger" value={estado.id} onClick={borrandoEstado}><FontAwesomeIcon icon={faTrash}/></Button>
            </td>
       </Fragment>
    );
}

export default Estado;