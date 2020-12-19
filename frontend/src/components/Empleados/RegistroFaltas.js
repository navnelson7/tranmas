import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BusquedaEmpleados from './BusquedaEmpleados';
import {useQuery} from "@apollo/client";
import {getEmpleados} from "../../graphql/Queries";
const RegistroFaltas = () => {

    const [listadoEmpleados,setListadoEmpleados] = useState([]);
    const {loading, data} = useQuery(getEmpleados);
    useEffect(()=>{
        if(loading){
            return;
        }
        if(data){
            setListadoEmpleados(data.empleados);
        }
        console.log(data);
    },[data, loading]);

    const [state, setState] = useState({
        codigo:''
    })

    const {
        codigo,
    } =  state
    
    const [encontrados, guardarEncontrados] = useState();

    const onChange = async e =>{
        e.persist();
        await setState({
            ...codigo,
            [e.target.name] : e.target.value
        })
        console.log(codigo);
        filtrarEmpleado();
    }

    const filtrarEmpleado = () =>{
        var search = listadoEmpleados.filter(item =>{
            if(item.codigo_empleado.includes(codigo)){
                return item;
            }
        });
        if(codigo === 0){
            guardarEncontrados(search);
        }else{
            guardarEncontrados(search);
        }
        console.log("Search", search);
    }
    return ( 
        <Fragment>
            <div className="box-left">
                <Container>
                    <BusquedaEmpleados  value={codigo} onChange={onChange} />
                </Container>
            </div>
        </Fragment>
     );
}
 
export default RegistroFaltas;