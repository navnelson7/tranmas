import { gql } from 'apollo-boost';

export const getRepuestos = gql `
    query {        
        repuestos{
            id
            nombre
            cantidad
            fecha_factura
        }
        unidades_de_medida{
            unidad_de_medida
        }
}
`;