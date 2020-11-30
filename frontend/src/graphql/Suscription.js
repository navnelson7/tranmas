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

export const listenUnidadTransporteById = gql`
  subscription unidades_de_transporte_by_pk($id: uuid!) {
    unidades_de_transporte_by_pk(id: $id) {
      activo
      numero_pasajeros
      numero_placa
      marca
      id
      color
      color_tapiceria
      modelo
      numero_equipo
      numero_placa
      numero_pasajeros
      serie_motor
      serie_chasis
      numero_tarjeta_circulacion
      image
    }
  }
`;
