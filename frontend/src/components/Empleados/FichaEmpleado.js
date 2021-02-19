import { PDFDownloadLink } from '@react-pdf/renderer';
import React,{useEffect, useState, Fragment} from 'react';
import {Container} from 'react-bootstrap';
import PdfEmpleado from './PdfEmpleado';
import {useQuery} from '@apollo/client';
import {EmpleadoByid} from '../../graphql/Queries'
import { useParams } from "react-router-dom";

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
             setEmpleado(data.empleados)
             console.log(data);

         }
     })
    
    return (
        <Fragment>
            <div className="box-left">
            <Container>     
                <h1>Algo {Id}</h1>
            </Container>
            </div>
        </Fragment>
    );
}

export default FichaEmpleado;