import { gql } from 'apollo-boost';

export const getRepuestos = gql `
    query allrepuestos {        
        repuestos{
            id
            nombre
            cantidad
            fecha_factura
            precio
        }
        unidades_de_medida{
            unidad_de_medida
        }
}
`;

export const getDepartamentos = gql `
    query getDepartamentos {
        departamentos{
        id
        departamento
  }
}
`;