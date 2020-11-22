import React, { Fragment} from 'react';
import {Container} from 'react-bootstrap';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/dom';
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
        <Document>
            <Page size="Letter" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section</Text>
                </View>
            </Page>
        </Document>
    );
}

export default FichaEmpleado;