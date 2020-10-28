import React from 'react';
import { Container } from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {getRepuestos} from '../../graphql/Queries';
import Datatable from 'react-data-table-component';
import { useState } from 'react';
import { useEffect } from 'react';





const BusquedaProductos = () => {
    const [repuestos, setRepuestos] = useState([]);
    const { data, loading, error } = useQuery(getRepuestos);

    const obtenerRepuestos =()=> {
        setRepuestos(data.repuestos)
        console.log(data.repuestos);
    }

    useEffect(()=>{
        if(loading) return
        if(data){
            obtenerRepuestos(data)
        }
    })

    const columnas = [
        {
            name: 'Codigo',
            selector: 'codigo_repuesto',
            sortable: true
        },
        {
            name: 'Nombre Repuestos',
            selector: 'nombre',
            sortable: true
        },
        {
            name: 'Marca',
            selector: 'marcar_de_repuestos.marca',
            sortable: true
        },
        {
            name: 'Cantidad',
            selector:'cantidad',
            sortable:true
        },
        {
            name: 'Fecha Factura',
            selector: 'fecha_factura',
            sortable: true
        },
        {
            name: 'P/U',
            selector: 'precio',
            sortable: true,
        },
        {
            name: 'Estado',
            selector: 'estado_repuesto_stock.estado_repuestos',
            sortable: true
        }
    ]
    return (
        <Container>
            <div className='box-left'>
            <Datatable 
                columns={columnas}
                data={repuestos}
                title="Lista de datos"
                pagination
            />
        </div>
        </Container>
    );
}

export default BusquedaProductos;