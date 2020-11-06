import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap'
const Estado = ({estado}) => {
    return (
       <Fragment>
           <td>{estado.estado_repuestos}</td>
           <>
               <Button variant="info">Actualizar</Button>
               <Button variant="danger">Eliminar</Button>
            </>
       </Fragment>
    );
}

export default Estado;