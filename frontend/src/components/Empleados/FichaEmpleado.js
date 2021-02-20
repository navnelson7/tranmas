import { PDFDownloadLink } from '@react-pdf/renderer';
import React,{useEffect, useState, Fragment} from 'react';
import {Container, Table} from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {EmpleadoByid} from '../../graphql/Queries'
import { useParams } from "react-router-dom";
import { NoSchemaIntrospectionCustomRule } from 'graphql';


const FichaEmpleado = () => {

    const {Id} = useParams()
     const [empleado, setEmpleado] = useState([]);
     const {loading, data, error} = useQuery(EmpleadoByid,{
         variables: {
             id:Id
         }
     });
    
     useEffect(() =>{
         if(loading){
            console.log(Id);
             return;
         }
         if(data){
             setEmpleado(data.empleados_by_pk)
             console.log(empleado);

         }
     })
    
    return (
        <Fragment>
            <div className="box-left">
            <Container>     
                <Table bordered>
                    <thead>
                        <tr>
                            <th colSpan="3">FICHA DE EMPLEADO {empleado.nombres} {empleado.apellidos} CODIGO: {empleado.codigo_empleado}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="4">
                                <img src={empleado.picture} />
                            </td>
                            <td>Nombre: {empleado.nombres} {empleado.apellidos}</td>
                        </tr>
                        <tr>
                            <td>DUI: {empleado.dui}</td>
                        </tr>
                        <tr>
                            <td>Edad: {empleado.edad}</td>
                        </tr>
                        <tr>
                            <td>Direccion: {empleado.direccion}</td>
                        </tr>
                        <tr>
                            <td>DUI: {empleado.dui}</td>
                            <td>NIT: {empleado.nit}</td>
                        </tr>
                        <tr>
                            <td>AFP: {empleado.afp}</td>
                            <td>AFP: {empleado.isss}</td>
                        </tr>
                        <tr>
                            <td>Licencia Conducir #: {empleado.licencia_conducir}</td>
                            <td>Licencia de Arma: {empleado.licencia_arma}</td>
                        </tr>
                        <tr>
                            <td>Estado Civil: {empleado.estado_civil}</td>
                            <td>Fecha Nacimiento: {empleado.fecha_nacimiento}</td>
                        </tr>
                        <tr>
                            <td>Telefono: {empleado.telefono}</td>
                            <td>Fecha de Ingreso a la Empresa: {empleado.fecha_ingreso_empresa}</td>
                        </tr>
                        <tr>
                            <td key={empleado}>Departamento: </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            </div>
        </Fragment>
    );
}

export default FichaEmpleado;