import { gql } from 'apollo-boost';

export const getRepuestos = gql `
    query {        
        repuestos{
            id
            nombre
            cantidad
    }
}
`;