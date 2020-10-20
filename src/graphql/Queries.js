import { gql } from "apollo-boost";

export const getRepuestos = gql`
  query allrepuestos {
    repuestos {
      id
      nombre
      marcar_de_repuestos {
        marca
      }
      cantidad
      unidad_medida_repuesto {
        unidad_de_medida
      }
      fecha_factura
      precio
      proveedor_de_repuesto {
        nombre_proveedor
      }
      estado_repuesto_stock {
        estado_repuestos
      }
    }
    unidades_de_medida {
      unidad_de_medida
    }
  }
`;

export const getDepartamentos = gql`
  query getDepartamentos {
    departamentos {
      id
      departamento
    }
  }
`;

export const getEstadoRepuestos = gql`
  query getEstadoRepuestos {
    estado_repuestos_stock {
      id
      estado_repuestos
    }
  }
`;

export const getProveedores = gql`
  query getProveedores {
    proveedores {
      id
      nombre_proveedor
    }
  }
`;

export const getUnidadMedida = gql`
  query getUnidadesMedida {
    unidades_de_medida {
      id
      unidad_de_medida
    }
  }
`;

export const getMarcas = gql`
  query getMarcas {
    marcas {
      id
      marca
    }
  }
`;

export const getRoles = gql`
  query {
    roles {
      id
      role
    }
  }
`;

export const getEmpleados = gql`
  query {
    empleados {
      activo
      id
      apellidos
      nit
      nombres
    }
  }
`;

export const getEmailUsers = gql`
  query {
    users {
      email
    }
  }
`;

export const getProveedoresTable = gql`
query proveedores(
  $limit: Int
  $offset: Int
) {
  proveedores(limit: $limit, offset: $offset){
    id
    nombre_proveedor
    nit
    telefono_contacto
    telefono_empresa
    contacto_proveedor
    nrc
    updated_at
    email_contacto
    email_empresa
  }
}
`;
