import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BusquedaEmpleados from './BusquedaEmpleados';
import {useQuery} from "@apollo/client";
import {getEmpleados} from "../../graphql/Queries";
const RegistroFaltas = () => {

    const [listadoEmpleados,setListadoEmpleados] = useState([]);
    const {loading, data, error} = useQuery(getEmpleados);
    useEffect(()=>{
        if(loading){
            return;
        }
        if(data){
            setListadoEmpleados(data.empleados);
        }
        console.log(data);
    },[data, loading]);

    const [codigo, setCodigo] = useState({
        id_empleado:''
    })
    const {
        id_empleado
    } = codigo

    const onChange = e =>{
        setCodigo({
            ...codigo,
            [e.target.name] : e.target.value
        })
    }
    return ( 
        <Fragment>
            <div className="box-left">
                <Container>
                    <BusquedaEmpleados  value={id_empleado} onChange={onChange} />
                </Container>
            </div>
        </Fragment>
     );
}
 
export default RegistroFaltas;