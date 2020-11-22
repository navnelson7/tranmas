import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import FichaEmpleado from './FichaEmpleado';
const PdfEmpleado = () => {
    return ( 
        <PDFViewer>
            <FichaEmpleado/>
        </PDFViewer>
     );
}
 
export default PdfEmpleado;