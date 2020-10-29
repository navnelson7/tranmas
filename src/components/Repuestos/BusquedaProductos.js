import React from 'react';
import { Container } from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {getRepuestos} from '../../graphql/Queries';
import Datatable from 'react-data-table-component';
import { useState } from 'react';
import { useEffect } from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";





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
    ];
    const paginacionOptiones = {
        rowsPerPageText: 'Filas por Pagina:', 
        rangeSeparatorText: 'de', 
        noRowsPerPage: false, 
        selectAllRowsItem: true, 
        selectAllRowsItemText: 'Todos'
    }

    const [state, guardarState] = useState({
        busqueda:''
    })
    

    const [encontrados, guardarEncontrados] = useState();

    const {
        busqueda,
    } = state

     const onChange = e => {
         guardarState({
             ...state,
            [e.target.name]: e.target.value,
            
        })
        filtrarRepuestos()
     }

     const filtrarRepuestos = () =>{
         var search = repuestos.filter(item=>{
             if(item.nombre.includes(busqueda)){
                 return item;
             }
         });
         if(busqueda.length === 0 ){
            guardarEncontrados(repuestos)
         }else{
            guardarEncontrados(search);
        }  
     }
    return (
        <Container>
            <div className='box-left'>
            <div className="barraBusqueda">
                <input 
                    type="text"
                    placeholder_="buscar"
                    className="textFiled"
                    name="busqueda"
                    value={busqueda}
                    onChange={onChange}
                />
                
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <Datatable 
                columns={columnas}
                //data={repuestos}
                data={encontrados}
                title="Lista de datos"
                pagination
                paginationComponentOptions={paginacionOptiones}
            />
        </div>
        </Container>
    );
}

export default BusquedaProductos;