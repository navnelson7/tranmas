import React, { Fragment } from 'react';
import repuestosContext from '../../context/repuestos/repuestosContext';

const Repuesto = ({ repuesto }) => {
    return (
        <Fragment>
            <td>{repuesto.nombre}</td>
            <td>{repuesto.marcar_de_repuestos.marca}</td>
            <td>{repuesto.cantidad}</td>
            <td>{repuesto.unidad_medida_repuesto.unidad_de_medida}</td>
            <td>{repuesto.precio}</td>
            <td>{repuesto.proveedor_de_repuesto.nombre_proveedor}</td>
            <td>{repuesto.estado_repuesto_stock.estado_repuestos}</td>
        </Fragment>
    );
}

export default Repuesto;