import React from 'react';
import { Fragment } from 'react';
const Historico = ({historico}) => {
    return ( 
        <Fragment>
            <td>{historico.fecha}</td>
            <td>{historico.unidad_transporte.numero_equipo}</td>
            <td>{historico.empleado_mecanico.nombres} {historico.empleado_mecanico.apellidos}</td>
            <td>{historico.empleado_motorista.nombres} {historico.empleado_motorista.apellidos}</td>
            <td>{historico.viendo_detalle.repuesto.nombre === null ? "No hay registros" : historico.viendo_detalle.repuesto.nombre}</td>
            <td>{historico.viendo_detalle.cantidad === null ? "No hay registro de detalle" :historico.viendo_detalle.cantidad}</td>
            <td>$ {historico.viendo_detalle.repuesto.precio === null ? "No hay registro de detalle" : historico.viendo_detalle.repuesto.precio}</td>
            <td>$ {historico.viendo_detalle.repuesto.precio === null ? "No hay registro de detalle" : parseFloat(historico.viendo_detalle.repuesto.precio) * parseInt(historico.viendo_detalle.cantidad) }</td>
        </Fragment>
     );
}
 
export default Historico;