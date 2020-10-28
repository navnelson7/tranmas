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
        }
    ]
    return (
        <Container>
            <div>
            <Datatable 
                columns={columnas}
                data={repuestos}
                title="Lista de datos"
            />
        </div>
        </Container>
    );
}

export default BusquedaProductos;