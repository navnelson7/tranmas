import { PDFDownloadLink } from '@react-pdf/renderer';
import React,{useEffect, useState, Fragment} from 'react';
import {Container} from 'react-bootstrap';
import PdfEmpleado from './PdfEmpleado';
import {useQuery} from '@apollo/client';
import {getEmpleadosbyId} from '../../graphql/Queries'
import { useParams } from "react-router-dom";

const FichaEmpleado = () => {

    const {id} = useParams()
     const [empleado, setEmpleado] = useState([]);
     const {loading, data, error} = useQuery(getEmpleadosbyId,{
         variables: {
             id:id
         }
     });
    
     useEffect(() =>{
         if(loading){
             return;
         }
         if(data){
             setEmpleado(data.empleados)
             console.log(empleado);

         }
     })
    return (
        <Fragment>
            <div className="box-left">
            <Container>     
                <h1>Algo</h1>
            </Container>
            </div>
        </Fragment>
    );
}

export default FichaEmpleado;