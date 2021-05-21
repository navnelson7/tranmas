import React from 'react';
import { Fragment } from 'react';
const Historico = ({historico}) => {
    console.log(historico.trabajo_detalle[0].repuesto.nombre);
    return ( 
        <Fragment>
            <td>{historico.fecha}</td>
            <td>{historico.unidad_transporte.numero_equipo}</td>
            <td>{historico.empleado_mecanico.nombres} {historico.empleado_mecanico.apellidos}</td>
            <td>{historico.empleado_motorista.nombres} {historico.empleado_motorista.apellidos}</td>
            <td>{historico.trabajo_detalle[0].repuesto.nombre}</td>
            <td>{historico.trabajo_detalle[0].cantidad}</td>
            <td>{historico.trabajo_detalle[0].repuesto.precio}</td>
        </Fragment>
     );
}
 
export default Historico;