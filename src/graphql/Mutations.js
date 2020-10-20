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
    mutation addRepuestos(
      $activo: Boolean,
      $cantidad: numeric,
      $fecha_factura: date,
      $fecha_ingreso:date,
      $id_estado: uuid,
      $id_marca: uuid,
      $id_proveedor: uuid,
      $comentarios: String,
      $id_unidad_medida: uuid,
      $id_usuario: uuid,
      $codigo_repuesto: String
      $nombre: String,
      $precio: money,
      $numero_factura: Int,
    ) {
      insert_repuestos_one(
        object: {
          activo: $activo, 
          cantidad: $cantidad, 
          codigo_repuesto: $codigo_repuesto, 
          comentarios: $comentarios, 
          fecha_factura: $fecha_factura, 
          fecha_ingreso: $fecha_ingreso, 
          id_estado: $id_estado, 
          id_marca: $id_marca, 
          id_proveedor: $id_proveedor, 
          id_unidad_medida: $id_unidad_medida, 
          id_usuario: $id_usuario, 
          nombre: $nombre, 
          numero_factura: $numero_factura, 
          precio: $precio, 
          }) {
        activo
        cantidad
        codigo_repuesto
        comentarios
        created_at
      }
}
`;