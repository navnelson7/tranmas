import React,{Fragment, useEffect, useState} from 'react';
import { useSubscription } from '@apollo/react-hooks';
import {Container, Table, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { getEmpleados } from '../../graphql/Queries';
import BusquedaEmpleados from './BusquedaEmpleados';
import FormularioContratos from  './FormularioContratos';
const ContratosEmpleados = () => {
    
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const [listadoEmpleados, setListadoEmpleados] =useState([]);
    const {loading, data} = useSubscription(getEmpleados);

    useEffect(()=>{
        if(loading){
            return;
        }
        if(data){
            setListadoEmpleados(data.empleados);
        }
    }, [data,loading]);

    const [state, setState] = useState({
        codigo:"",
    });

    const {codigo} = state;
    const [encontrados, guardarEncontrados] = useState([]);
    const [Id, setId] = useState("");
    const [Nombre, setNombre] = useState("");

    const onChange = async (e) =>{
        e.persist();
        setState({
            ...codigo,
            [e.target.name]: e.target.value,
        });
        filtrarEmpleado();
    };

    const filtrarEmpleado = () =>{
        var search = listadoEmpleados.filter((item)=>{
            return item.codigo_empleado.includes(codigo);
        });
        if(codigo === 0){
            guardarEncontrados(search);
        }else{
            guardarEncontrados(search);
        }
    };

    const agregarContrato = () =>{
        setMostrarFormulario(true);
    }
    return (
        <Fragment>
            <div className="box-left">
                <Container>
                    <h1>Registro de Contratos a Empleados</h1>
                    <BusquedaEmpleados value={codigo} onChange={onChange} />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre de Empleado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {encontrados.length === 0 ? (
                                <tr>
                                    <td colSpan="4">Busca el nombre del empleado</td>
                                </tr>
                            ):(
                                encontrados.map((encontrado)=>(
                                    <tr key={encontrado.codigo_empleado}>
                                        <td>{encontrado.codigo_empleado}</td>
                                        <td>{encontrado.nombres} {encontrado.apellidos}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                onClick={()=>{
                                                    agregarContrato();
                                                    setId(encontrado.id);
                                                    setNombre(encontrado.nombres);
                                                }}
                                                value={encontrado.id}
                                                name="id"
                                            >
                                                Agregar Contrato{" "}
                                                <FontAwesomeIcon icon={faExclamationCircle} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                    {mostrarFormulario === true ?(
                        <Fragment>
                            <FormularioContratos Id={Id} Nombre={Nombre} />
                        </Fragment>
                    ):(
                        <h1>No hay Nada que mostrar</h1>
                    )}
                </Container>
            </div>
        </Fragment>
    );
    
}
export default ContratosEmpleados;
