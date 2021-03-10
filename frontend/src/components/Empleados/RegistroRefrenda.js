import React,{Fragment, useEffect, useState} from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import BusquedaEmpleados from './BusquedaEmpleados';
import { useSubscription } from "@apollo/client";
import { getEmpleados } from "../../graphql/Queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import FormularioRefrenda from './FormularioRefrenda';
//importar formulario refrendas
//importar tabla refrenda
const RegistroRefrenda = () => {

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const [listadoEmpleado, setListadoEmpleado] = useState([]);
    const {loading, data} = useSubscription(getEmpleados);
    useEffect(()=>{
        if(loading){
            return
        }
        if(data){
            setListadoEmpleado(data.empleados);
        }
    },[data, loading]);

    const [state, setState] = useState({
        codigo:''
    })

    const {
        codigo,
    } = state
    const [encontrados, guardarEncontrados] = useState([]);
    const [Id, setId] = useState("");
    const [Nombre, setNombre] = useState("");

    const onChange = async e =>{
        e.persist();
        setState({
            ...codigo,
            [e.target.name] : e.target.value
        })
        filtrarEmpleado();
    }

    const filtrarEmpleado= () =>{
        var search = listadoEmpleado.filter(item=>{
            if(item.codigo_empleado.includes(codigo)){
                return item;
            }
        });
        if(codigo === 0){
            guardarEncontrados(search);
        }else{
            guardarEncontrados(search)
        }
    
    }

    const agregarRefrenda = () =>{
        setMostrarFormulario(true)
    }
    return (
        <Fragment>
            <div className="box-left">
                <Container>
                    <BusquedaEmpleados value={codigo} onChange={onChange} />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th># de licencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                encontrados.length === 0 ? (
                                    <tr>
                                        <td colSpan="4">Busca con el nombre empleado</td>
                                    </tr>
                                ):(
                                    encontrados.map((encontrado)=>(
                                        <tr key={encontrado.codigo_empleado}>
                                            <td>{encontrado.codigo_empleado}</td>
                                            <td>{encontrado.nombres}</td>
                                            <td>{encontrado.apellidos}</td>
                                            <td>{encontrado.licencia_conducir}</td>
                                            <td><Button variant="danger" onClick={() => {
                                            agregarRefrenda();
                                            setId(encontrado.id);
                                            setNombre(encontrado.nombres);
                                            }
                                            } value={encontrado.id} name="id">Agregar Refrenda <FontAwesomeIcon icon={faExclamationCircle}/></Button></td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </Table>
                
                {
                    mostrarFormulario === true ? (
                        <Fragment>
                            <FormularioRefrenda 
                                Id={Id}
                                Nombre={Nombre}
                            />
                        </Fragment>
                    ):(
                        <h1>No hay nada que mostrar</h1>
                    )
                }
                </Container>
            </div>
        </Fragment>
    );
}

export default RegistroRefrenda;