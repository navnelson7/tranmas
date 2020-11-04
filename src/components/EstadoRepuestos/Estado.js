import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap'
const Estado = ({estado}) => {
    return (
       <Fragment>
           <td>{estado.estado_repuestos}</td>
           <td><Button variant="info">Actualizar</Button></td>
       </Fragment>
    );
}

export default Estado;