import React, { Fragment } from 'react';
import {Container} from 'react-bootstrap'


const Marca = ({marca}) => {
    return ( 
        <Fragment>
            <td>{marca.id}</td>
            <td>{marca.marca}</td>     
        </Fragment>
     );
}
 
export default Marca;