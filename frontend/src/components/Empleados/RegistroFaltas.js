import React, { Fragment, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import BusquedaEmpleados from './BusquedaEmpleados';
import {useQuery} from "@apollo/client";
import {getEmpleados} from "../../graphql/Queries";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import FormularioFaltas from "../Empleados/FormularioFaltas";
import TablaListaFaltas from "../tablas/TablaListaFaltas";
const RegistroFaltas = () => {

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    

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
    
    const [encontrados, guardarEncontrados] = useState([]);
    const [Id, setId] = useState("");
    const [Nombre, setNombre] = useState("");

    const onChange = async e =>{
        e.persist();
        setState({
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
        console.log("encontrados", encontrados);
    }

    const agregarFalta = () => {
        setMostrarFormulario(true)
    }
    return ( 
        <Fragment>
            <div className="box-left">
                <Container>
                    <BusquedaEmpleados  value={codigo} onChange={onChange} />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            { encontrados.length === 0 ? (
                                <tr>
                                    <td colSpan="4">Busca con el codigo de empleado</td>
                                </tr>   
                            ):(
                                encontrados.map((encontrado)=>(
                                    <tr key={encontrado.codigo_empleado}>
                                        <td>{encontrado.codigo_empleado}</td>
                                        <td>{encontrado.nombres}</td>
                                        <td>{encontrado.apellidos}</td>
                                        <td><Button variant="danger" onClick={() => {
                                            agregarFalta();
                                            setId(encontrado.id);
                                            setNombre(encontrado.nombres);
                                            }
                                            } value={encontrado.id} name="id">Agregar Falta <FontAwesomeIcon icon={faExclamationCircle}/></Button></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                    {
                        mostrarFormulario === true ? (
                            <Fragment>
                                <FormularioFaltas  
                                Id={Id}
                                Nombre={Nombre}
                            />
                            <TablaListaFaltas />
                            </Fragment>
                        ): (
                            <h1>Sin datos que mostrar</h1>
                        )
                    }
                </Container>
            </div>
        </Fragment>
     );
}
 
export default RegistroFaltas;