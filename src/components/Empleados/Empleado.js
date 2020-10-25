import React, { Fragment } from 'react';

const Empleado = ({empleado}) => {
    return (
        <Fragment>
                <td>{empleado.nombres}</td>
        </Fragment>
    );
}

export default Empleado;