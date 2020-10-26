import React, { Fragment } from 'react';
const Medida = (medida) => {
    return ( 
        <Fragment>
            <td>{medida.id}</td>
            <td>{medida.unidad_de_medida}</td>
        </Fragment>
     );
}
 
export default Medida;