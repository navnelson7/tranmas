import React, { Fragment } from 'react';

const Empleado = ({empleado}) => {
    return (
        <Fragment>
                <td>{empleado.codigo_empleado}</td>
                <td>{empleado.nombres}</td>
                <td>{empleado.apellidos}</td>
        </Fragment>
    );
}

export default Empleado;