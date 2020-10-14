import React, { Fragment } from 'react';
import repuestosContext from '../../context/repuestos/repuestosContext';

const Repuesto = ({ repuesto }) => {
    return (
        <Fragment>
            <td>{repuesto.id}</td>
            <td>{repuesto.nombre}</td>
            <td>{repuesto.cantidad}</td>
            <td>{repuesto.precio}</td>
        </Fragment>
    );
}

export default Repuesto;