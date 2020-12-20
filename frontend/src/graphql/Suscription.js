import { gql } from "apollo-boost";

export const listenNotification = gql`
  subscription {
    notificaciones {
      fecha
      id
      usuario
      mensaje
    }
  }
`;

export const listenProveedoresTable = gql`
  subscription proveedores($limit: Int, $offset: Int) {
    proveedores(
      limit: $limit
      offset: $offset
      where: { activo: { _eq: true } }
    ) {
      id
      nombre_proveedor
      nit
      telefono_contacto
      telefono_empresa
      contacto_proveedor
      nrc
      activo
      updated_at
      email_contacto
      email_empresa
      comentarios
    }
  }
`;

export const listenUnidadesTranporte = gql`
  query($paginateNumber: Int) {
    unidades_de_transporte(
      where: { activo: { _eq: true } }
      offset: $paginateNumber
      limit: 10
    ) {
      activo
      numero_pasajeros
      numero_placa
      marca
      id
      image
    }
  }
`;

export const listenMarcasTransporte = gql`
  subscription {
    marca_transporte {
      id
      marca
    }
  }
`;

export const listenMotoristasListBox = gql`
  subscription {
    empleados(
      where: { tipo_empleado: { tipo_empleado: { _eq: "Bodeguero" } } }
    ) {
      id
      nombres
      apellidos
    }
  }
`;


export const listenCombustibleByUnidadId = gql`
  subscription($fecha: date, $id_unidad_transporte: uuid) {
    registro_combustible(
      where: {
        fecha: { _eq: $fecha }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      id
      galones_servidos
    }
  }
`;