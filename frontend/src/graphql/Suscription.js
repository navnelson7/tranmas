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

export const listenRefrendasCiculacion = gql`
  subscription refrendas_tarjeta_circulacion($id: uuid!) {
    refrendas_tarjeta_circulacion(
      where: { id_unidad_transporte: { _eq: $id } }
    ) {
      costo_refrenda
      fecha_emision
      fecha_refrenda
      id
      refrendado
      numero_tarjeta_circulacion
      unidad_transporte {
        numero_tarjeta_circulacion
      }
    }
  }
`;

export const listenRefrendaCirculacion = gql`
  subscription refrendas_tarjeta_circulacion_by_pk($id: uuid!) {
    refrendas_tarjeta_circulacion_by_pk(id: $id) {
      costo_refrenda
      fecha_emision
      fecha_refrenda
      numero_tarjeta_circulacion
      refrendado
    }
  }
`;

export const listenRefrendaVencida = gql`
  subscription refrendas_tarjeta_circulacion($fecha: date) {
    refrendas_tarjeta_circulacion(where: { fecha_refrenda: { _lte: $fecha } }) {
      id
      costo_refrenda
      id_unidad_transporte
      numero_tarjeta_circulacion
      refrendado
      fecha_refrenda
      costo_refrenda
    }
  }
`;

export const listenControlCarwash = gql`
  subscription registro_carwash($id: uuid!) {
    registro_carwash(
      order_by: { id: desc }
      where: { id_unidad_transporte: { _eq: $id } }
    ) {
      id
      costo
      descripcion_trabajo
      fecha
    }
  }
`;

export const listenControlCarwashById = gql`
  subscription registro_carwash_by_pk($id: uuid!) {
    registro_carwash_by_pk(id: $id) {
      costo
      descripcion_trabajo
    }
  }
`;

export const listenKilometrajePenultimo = gql`
  subscription registro_combustible($id: uuid, $fecha: date) {
    registro_combustible(
      limit: 1
      where: { fecha: { _lt: $fecha }, id_unidad_transporte: { _eq: $id } }
    ) {
      kilometraje_actual
    }
  }
`;
export const listenKilometrajeMax = gql`
  subscription registro_combustible_aggregate($id: uuid) {
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

export const listenKmParaCambio = gql`
  subscription {
    repuestos {
      id
      km_para_cambio
      nombre
    }
  }
`;

export const listenUnidadBySearch = gql`
  subscription unidades_de_transporte($numero_unidad: numeric) {
    unidades_de_transporte(where: { numero_equipo: { _eq: $numero_unidad } }) {
      activo
      numero_pasajeros
      numero_placa
      id
      image
      id_marca
      id_repuestos_reparados
      numero_equipo
      marca_transporte {
        marca
      }
    }
  }
`;

export const RepuestosReperadosByUnidadDeTransporte = gql`
  subscription unidades_de_transporte_by_pk($id: uuid!) {
    unidades_de_transporte_by_pk(id: $id) {
      id_repuestos_reparados
    }
  }
`;

export const listenRepuestosByEdit = gql`
  subscription repuestos_by_pk($id: uuid!) {
    repuestos_by_pk(id: $id) {
      cantidad
      fecha_factura
      id_estado
      id_marca
      id_proveedor
      comentarios
      id_unidad_medida
      codigo_repuesto
      nombre
      numero_factura
      precio
      km_para_cambio
      fecha_ingreso
    }
  }
`;

export const listenRelacionesRepuestoEdit = gql`
  subscription repuestos_by_pk($id: uuid!) {
    repuestos_by_pk(id: $id) {
      id_estado
      estado_repuesto_stock {
        estado_repuestos
      }
      id_marca
      marcar_de_repuestos {
        marca
      }
      id_proveedor
      proveedor_de_repuesto {
        nombre_proveedor
      }
      unidad_medida_repuesto {
        unidad_de_medida
      }
      id_unidad_medida
    }
  }
`;

export const listenDetalleTaller = gql`
  subscription detalle_trabajo_taller_aggregate(
    $idRepuesto: uuid
    $idUnidadTransporte: uuid
  ) {
    detalle_trabajo_taller_aggregate(
      where: {
        id_repuesto: { _eq: $idRepuesto }
        registro_taller: { id_unidad_transporte: { _eq: $idUnidadTransporte } }
      }
    ) {
      aggregate {
        count
      }
      nodes {
        id
        registro_taller {
          fecha
          comentarios
          unidad_transporte {
            numero_placa
          }
        }
      }
    }
  }
`;

export const listenNombresDeRepuestos = gql`
  subscription {
    repuestos {
      id
      nombre
    }
  }
`;
