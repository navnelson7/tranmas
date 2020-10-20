import { gql } from "@apollo/client";

export const setUserOne = gql `
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

export const setRepuestosOne = gql `
    mutation insert_repuestos_one(
      $activo: Boolean
      $cantidad: numeric
      $created_at: date
      $fecha_factura:date
      $fecha_ingreso:data
      $id_estado:uuid
      $id_marca:uuid
      $id_proveedor:uuid
      $comentarios: String
      $id_unidad_medida:uuid
      $id_usuario:uuid
      $codigo_repuesto: String
      $nombre: String
      $numero_factura: Int
      $precio: money
      $updated_at:date
    ){
      insert_repuestos_one(
        object: {
          activo: $activo
          cantidad: $cantidad
          codigo_repuesto: $codigo_repuesto
          created_at: $created_at
          fecha_factura: $fecha_factura
          id_estado: $id_estado
          id_marca: $id_marca
          id_proveedor: $id_proveedor
          comententarios: $comentarios
          id_unidad_medida: $id_unidad_medida
          id_usuario: $id_usuario
          codigo_repuesto: $codigo_repuesto
          nombre: $nombre
          numero_factura: $numero_factura
          precio: $precio
          updated_at: $updated_at
        }
      )
    }
`;