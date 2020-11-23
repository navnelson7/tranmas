import { PDFDownloadLink } from '@react-pdf/renderer';
import React,{useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import PdfEmpleado from './PdfEmpleado';
const FichaEmpleado = () => {

   
    return (
        <Container>     
    
            <PDFDownloadLink document={<PdfEmpleado />} fileName="somename.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>

        </Container>
    );
}

export default FichaEmpleado;