import { gql } from 'apollo-boost';

export const getRepuestos = gql `
    query allrepuestos {        
        repuestos{
            id
            nombre
            marcar_de_repuestos{
                marca
            }
            cantidad
            unidad_medida_repuesto{
                unidad_de_medida
            }
            fecha_factura
            precio
            proveedor_de_repuesto{
                nombre_proveedor
            }
            estado_repuesto_stock{
                estado_repuestos
            }
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

export const getEstadoRepuestos = gql `
    query getEstadoRepuestos{
        estado_repuestos_stock{
            id
            estado_repuestos
        }
}

`;