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
      where: { tipo_empleado: { tipo_empleado: { _eq: "Motorista" } } }
    ) {
      id
      nombres
      apellidos
    }
  }
`;

export const listenRepuestosListbox = gql`
  subscription {
    repuestos(where: { activo: { _eq: true }, cantidad: { _gt: 0 } }) {
      nombre
      id
    }
  }
`;

export const listenMecanicoListBox = gql`
  subscription {
    empleados(
      where: { tipo_empleado: { tipo_empleado: { _eq: "Mecanico" } } }
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

export const listenKilomatrajeMax = gql`
  subscription registro_combustible_aggregate($id: uuid!) {
    registro_combustible_aggregate(
      where: { id_unidad_transporte: { _eq: $id } }
    ) {
      aggregate {
        max {
          kilometraje_actual
        }
      }
    }
  }
`;

export const listenRegistrosTaller = gql`
  subscription registro_taller($id_unidad_transporte: uuid!) {
    registro_taller(
      where: { id_unidad_transporte: { _eq: $id_unidad_transporte } }
    ) {
      id
      fecha
      comentarios
      kilometraje
      estado_taller {
        estado
      }
    }
  }
`;

export const listenDetallesTaller = gql`
  subscription detalle_trabajo_taller($id_registro_taller: uuid!) {
    detalle_trabajo_taller(
      where: { id_registro_taller: { _eq: $id_registro_taller } }
      order_by: { id: asc }
      limit: 1
    ) {
      id
      cantidad
      comentarios
      repuesto {
        nombre
      }
    }
  }
`;

export const listenDetalleTallerUpdate = gql`
  subscription detalle_trabajo_taller_by_pk($id: uuid!) {
    detalle_trabajo_taller_by_pk(id: $id) {
      cantidad
      comentarios
      repuesto {
        nombre
      }
    }
  }
`;

export const listenRegistroTallerById = gql`
  query registro_taller_by_pk($id: uuid!) {
    registro_taller_by_pk(id: $id) {
      kilometraje
      comentarios
      id_empleado_mecanico
      id_empleado_motorista
      id_estado
      empleado_mecanico {
        nombres
        apellidos
      }
      empleado_motorista {
        nombres
        apellidos
      }
      estado_taller {
        activo
        estado
        id
      }
    }
  }
`;

export const listenDetalleTrabajoExcludeId = gql`
  subscription detalle_trabajo_taller($id: uuid!, $id_registro_taller: uuid!) {
    detalle_trabajo_taller(
      where: {
        id: { _neq: $id }
        id_registro_taller: { _eq: $id_registro_taller }
      }
    ) {
      id
      cantidad
      comentarios
      repuesto {
        nombre
      }
    }
  }
`;

export const listenAccidentes = gql`
  subscription accidentes($id_unidad_transporte: uuid!) {
    accidentes(
      where: { id_unidad_transporte: { _eq: $id_unidad_transporte } }
    ) {
      descripcion_accidente
      id
      registro_fotos
      empleado_motorista {
        nombres
        apellidos
      }
      fecha
    }
  }
`;

export const listenTableAireAcondicionado = gql`
  subscription aire_acondicionado($id: uuid!) {
    aire_acondicionado(
      order_by: { id: desc }
      where: { id_unidad_transporte: { _eq: $id } }
    ) {
      fecha
      id
      motorista {
        nombres
        apellidos
      }
      descripcion
    }
  }
`;

export const listenAireAcondicionadoById = gql`
  subscription aire_acondicionado_by_pk($id: uuid!) {
    aire_acondicionado_by_pk(id: $id) {
      descripcion
      id_empleado_motorista
    }
  }
`;

export const listenTapiceria = gql`
  subscription control_tapiceria_carroceria($id: uuid!) {
    control_tapiceria_carroceria(
      order_by: { id: desc }
      where: { id_unidades_transporte: { _eq: $id } }
    ) {
      descripcion_dano
      id
      empleado_motorista {
        nombres
        apellidos
      }
      foto
      fecha
    }
  }
`;

export const listenTapiceriaOne = gql`
  subscription control_tapiceria_carroceria_by_pk($id: uuid!) {
    control_tapiceria_carroceria_by_pk(id: $id) {
      descripcion_dano
      foto
      id_unidades_transporte
      id_empleado_motorista
      id
      empleado_motorista {
        nombres
        apellidos
      }
    }
  }
`;
