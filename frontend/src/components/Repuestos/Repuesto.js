import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Repuesto = ({ repuesto }) => {
    return ( <
        Fragment >
        <
        td > { repuesto.nombre } < /td> <
        td > { repuesto.marcar_de_repuestos.marca } < /td> <
        td > { repuesto.cantidad } < /td> <
        td > { repuesto.unidad_medida_repuesto.unidad_de_medida } < /td> <
        td > { repuesto.precio } < /td> <
        td > { repuesto.proveedor_de_repuesto.nombre_proveedor } < /td> <
        td > { repuesto.estado_repuesto_stock.estado_repuestos } < /td> <
        td >
        <
        Link to = { `/actualizar-repuestos/${repuesto.id}` }
        variant = "danger"
        value = { repuesto.id } > < Button variant = "info"
        value = { repuesto.id } > < FontAwesomeIcon icon = { faEdit }
        /></Button > < /Link> <
        Button variant = "danger"
        value = { repuesto.id } > < FontAwesomeIcon icon = { faTrash }
        /></Button >
        <
        /td> <
        /Fragment>
    );
}

export default Repuesto;