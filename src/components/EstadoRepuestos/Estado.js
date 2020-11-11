import React, { Fragment, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit,faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

import { deletEstadosbyId } from '../../graphql/Mutations';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

const Estado = ({estado}) => {
    const [borrado, setActivado] = useState("");
    const [variante,setVariante] = useState("danger");
    const [icono, setIcono] = useState("");
    const [accion, setAccion] = useState("");
    const [id, setIdEstado] = useState([]);
    const [deleteEstado] = useMutation(deletEstadosbyId);

    useEffect(()=>{
        if(estado.activo === true){
            setActivado("Ativado")
            console.log(borrado);
        }else{
            setActivado("Inactivo")
        }
        if(estado.activo === false){
            setVariante("warning")
        }
        if(estado.activo ===false){
            setIcono(<FontAwesomeIcon icon={faArrowAltCircleUp}/>)
        }else
            setIcono(<FontAwesomeIcon icon={faTrash}/>)
    },[])

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
         console.log(estado.activo);
     }
    return (

       <Fragment>
            <td>{estado.estado_repuestos}</td>
            <td>
               <Button variant="info" value={estado.id} onClick={editandoEstado}><FontAwesomeIcon icon={faEdit}/></Button>
               <Button variant={variante} value={estado.id} onClick={borrandoEstado}>{icono}</Button>
            </td>
            <td>{borrado}</td>
       </Fragment>
    );
}

export default Estado;