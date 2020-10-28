import React, { Fragment } from 'react';
const Medida = (unidad_de_medida) => {
    return ( 
        <Fragment>
            <td>{unidad_de_medida.unidad_de_medida}</td>
        </Fragment>
     );
}
 
export default Medida;