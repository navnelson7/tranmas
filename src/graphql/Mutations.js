import { gql } from "@apollo/client";

export const setUserOne = gql`
  mutation insert_users_one(
    $email: String
    $password: String
    $user: String
    $id_role: uuid
    $id_empleado: uuid
  ) {
    insert_users_one(
      object: {
        email: $email
        password: $password
        user: $user
        id_role: $id_role
        id_empleado: $id_empleado
      }
    ) {
      id
      email
    }
  }
`;

export const setRepuestosOne = gql`
  mutation addRepuestos(
    $activo: Boolean
    $cantidad: numeric
    $fecha_factura: date
    $fecha_ingreso: date
    $id_estado: uuid
    $id_marca: uuid
    $id_proveedor: uuid
    $comentarios: String
    $id_unidad_medida: uuid
    $id_usuario: uuid
    $codigo_repuesto: String
    $nombre: String
    $precio: money
    $numero_factura: Int
  ) {
    insert_repuestos_one(
      object: {
        activo: $activo
        cantidad: $cantidad
        codigo_repuesto: $codigo_repuesto
        comentarios: $comentarios
        fecha_factura: $fecha_factura
        fecha_ingreso: $fecha_ingreso
        id_estado: $id_estado
        id_marca: $id_marca
        id_proveedor: $id_proveedor
        id_unidad_medida: $id_unidad_medida
        id_usuario: $id_usuario
        nombre: $nombre
        numero_factura: $numero_factura
        precio: $precio
      }
    ) {
      activo
      cantidad
      codigo_repuesto
      comentarios
      created_at
    }
  }
`;

export const setProveedorOne = gql`
  mutation insert_proveedores_one(
    $nombre_proveedor: String
    $activo: Boolean
    $comentarios: String
    $contacto_proveedor: String
    $created_at: date
    $email_contacto: String
    $email_empresa: String
    $nit: String
    $nrc: String
    $telefono_contacto: String
    $telefono_empresa: String
    $updated_at: date
  ) {
    insert_proveedores_one(
      object: {
        nombre_proveedor: $nombre_proveedor
        activo: $activo
        comentarios: $comentarios
        contacto_proveedor: $contacto_proveedor
        created_at: $created_at
        email_contacto: $email_contacto
        email_empresa: $email_empresa
        nit: $nit
        nrc: $nrc
        telefono_contacto: $telefono_contacto
        telefono_empresa: $telefono_empresa
        updated_at: $updated_at
      }
    ) {
      id
    }
  }
`;

//update mutation
const updateActivoRepuesto = gql`
  mutation updateActivoRepuesto($id: uuid!, $activo: Boolean!) {
    update_repuestos(where: { id: { _eq: $id } }, _set: { activo: $activo }) {
      affected_rows
    }
  }
`;

export const updateActivoProveedor = gql`
  mutation update_proveedores_by_pk($id: uuid!, $activo: Boolean) {
    update_proveedores_by_pk(
      pk_columns: { id: $id }
      _set: { activo: $activo }
    ) {
      activo
    }
  }
`;

export const updateProveedorOne = gql`
  mutation update_proveedores_by_pk(
    $nombre_proveedor: String
    $activo: Boolean
    $comentarios: String
    $contacto_proveedor: String
    $created_at: date
    $email_contacto: String
    $email_empresa: String
    $nit: String
    $nrc: String
    $telefono_contacto: String
    $telefono_empresa: String
    $updated_at: date
    $id: uuid!
    $__typename: String
  ) {
    update_proveedores_by_pk(
      _set: {
        id: $id
        nombre_proveedor: $nombre_proveedor
        activo: $activo
        comentarios: $comentarios
        contacto_proveedor: $contacto_proveedor
        created_at: $created_at
        email_contacto: $email_contacto
        email_empresa: $email_empresa
        nit: $nit
        nrc: $nrc
        telefono_contacto: $telefono_contacto
        telefono_empresa: $telefono_empresa
        updated_at: $updated_at
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const setMarcasOne = gql`
  mutation addMarcas($marca: String) {
    insert_marcas_one(object: { marca: $marca }) {
      id
      marca
    }
  }
`;

export const setMedidasOne = gql`
  mutation addMedidas($unidad_de_medida: String) {
    insert_unidades_de_medida_one(
      object: { unidad_de_medida: $unidad_de_medida }
    ) {
      id
      unidad_de_medida
    }
  }
`;

export const setEstadosOne = gql`
  mutation insert_estado_repuestos_stock_one(
    $estado_repuestos: String
    $activo: Boolean
    $updated_at: date
  ) {
    insert_estado_repuestos_stock_one(
      object: {
        estado_repuestos: $estado_repuestos
        activo: $activo
        updated_at: $updated_at
      }
    ) {
      id
      estado_repuestos
      activo
    }
  }
`;
