import React, { Fragment } from 'react';
const Repuesto = ({ repuesto }) => {
    return (
        <Fragment>
            <td>{repuesto.id}</td>
            <td>{repuesto.nombre}</td>
        </Fragment>
    );
}

export default Repuesto;