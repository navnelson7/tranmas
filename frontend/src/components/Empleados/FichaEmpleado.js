import React, { Fragment} from 'react';
import {Container} from 'react-bootstrap';
import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
import PdfEmpleado from './PdfEmpleado';
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section:{
        margin: 10,
        padding: 10,
        flexGrow:1
    }
});
const FichaEmpleado = () => {
    return (
        <Container>
            <div className="box-left">
            <Document>
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
            </Page>
        </Document>
            </div>
            <PDFDownloadLink document={<PdfEmpleado />} fileName="somename.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </Container>
    );
}

export default FichaEmpleado;