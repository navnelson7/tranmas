import { useSubscription } from '@apollo/react-hooks';
import React,{Fragment, useEffect, useState} from 'react';
import {Container, Table} from 'react-bootstrap';
import { getEmpleados } from '../../graphql/Queries';
import BusquedaEmpleados from './BusquedaEmpleados';
const ContratosEmpleados = () => {
    
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
                            </tr>
                        </thead>
                        <tbody>
                            {encontrados.length === 0 ? (
                                <tr>
                                    <td colSpan="4">Busca el nombre del empleado</td>
                                </tr>
                            ):(
                                encontrados.map((encontrado)=>(
                                    <tr>
                                        <td>vamos</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </Fragment>
    );
    
}
export default ContratosEmpleados;
