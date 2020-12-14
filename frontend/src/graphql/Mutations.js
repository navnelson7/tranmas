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

export const deletEstadosbyId = gql`
  mutation deleteEstadoRepuestos($id: uuid) {
    update_estado_repuestos_stock(
      where: { id: { _eq: $id } }
      _set: { activo: false }
    ) {
      affected_rows
      returning {
        id
        estado_repuestos
        activo
      }
    }
  }
`;

export const activateEstadosbyId = gql`
  mutation deleteEstadoRepuestos($id: uuid) {
    update_estado_repuestos_stock(
      where: { id: { _eq: $id } }
      _set: { activo: true }
    ) {
      affected_rows
      returning {
        id
        estado_repuestos
        activo
      }
    }
  }
`;

export const updateRepuestoOne = gql`
  mutation update_repuestos_by_pk(
    $activo: Boolean
    $cantidad: numeric
    $codigo_repuesto: String
    $fecha_factura: date
    $fecha_ingreso: date
    $nombre: String
    $numero_factura: Int
    $precio: money
    $updated_at: date
    $id: uuid!
    $__typename: String
  ) {
    update_repuestos_by_pk(
      _set: {
        id: $id
        cantidad: $cantidad
        codigo_repuesto: $codigo_repuesto
        nombre: $nombre
        numero_factura: $numero_factura
        precio: $precio
        updated_at: $updated_at
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const setTransporteOne = gql`
  mutation(
    $activo: Boolean
    $color: String
    $color_tapiceria: String
    $modelo: String
    $numero_equipo: numeric
    $numero_pasajeros: numeric
    $numero_placa: String
    $numero_tarjeta_circulacion: String
    $serie_chasis: String
    $serie_motor: String
    $updated_at: date
    $created_at: date
    $image: String
    $id_marca: uuid
  ) {
    insert_unidades_de_transporte_one(
      object: {
        activo: $activo
        color: $color
        color_tapiceria: $color_tapiceria
        modelo: $modelo
        numero_equipo: $numero_equipo
        numero_pasajeros: $numero_pasajeros
        numero_placa: $numero_placa
        numero_tarjeta_circulacion: $numero_tarjeta_circulacion
        serie_chasis: $serie_chasis
        serie_motor: $serie_motor
        updated_at: $updated_at
        created_at: $created_at
        image: $image
        id_marca: $id_marca
      }
    ) {
      id
    }
  }
`;

export const setEmpleadosOne = gql`
  mutation(
    $codigo_empleado: String
    $nombres: String
    $apellidos: String
    $edad: Int
    $sexo: bpchar
    $telefono: String
    $direccion: String
    $dui: String
    $nit: String
    $afp: String
    $isss: String
    $licencia_conducir: String
    $licencia_arma: String
    $fecha_ingreso_empresa: date
    $fecha_nacimiento: date
    $estado_civil: String
    $id_tipo_empleado: uuid
    $id_departamento: uuid
    $id_estado_empleados: uuid
    $comentarios: String
    $picture: String
  ) {
    insert_empleados_one(
      object: {
        codigo_empleado: $codigo_empleado
        nombres: $nombres
        apellidos: $apellidos
        edad: $edad
        sexo: $sexo
        telefono: $telefono
        direccion: $direccion
        dui: $dui
        nit: $nit
        afp: $afp
        isss: $isss
        licencia_conducir: $licencia_conducir
        licencia_arma: $licencia_arma
        fecha_ingreso_empresa: $fecha_ingreso_empresa
        fecha_nacimiento: $fecha_nacimiento
        estado_civil: $estado_civil
        id_tipo_empleado: $id_tipo_empleado
        id_departamento: $id_departamento
        id_estado_empleados: $id_estado_empleados
        comentarios: $comentarios
        picture: $picture
      }
    ) {
      id
    }
  }
`;

export const updateUnidadOne = gql`
  mutation update_unidades_de_transporte_by_pk(
    $id: uuid!
    $activo: Boolean
    $color: String
    $color_tapiceria: String
    $created_at: date
    $modelo: String
    $numero_equipo: numeric
    $numero_pasajeros: numeric
    $numero_placa: String
    $numero_tarjeta_circulacion: String
    $serie_chasis: String
    $serie_motor: String
    $updated_at: date
    $__typename: String
    $image: String
    $id_marca: uuid
  ) {
    update_unidades_de_transporte_by_pk(
      pk_columns: { id: $id }
      _set: {
        numero_pasajeros: $numero_pasajeros
        numero_placa: $numero_placa
        color: $color
        color_tapiceria: $color_tapiceria
        modelo: $modelo
        numero_equipo: $numero_equipo
        serie_motor: $serie_motor
        serie_chasis: $serie_chasis
        numero_tarjeta_circulacion: $numero_tarjeta_circulacion
        updated_at: $updated_at
        image: $image
        id_marca: $id_marca
      }
    ) {
      activo
    }
  }
`;

export const deleteTransporte = gql`
  mutation delete_unidades_de_transporte_by_pk($id: uuid!) {
    delete_unidades_de_transporte_by_pk(id: $id) {
      id
    }
  }
`;

export const saveMarcaTransporte = gql`
  mutation insert_marca_transporte_one($marca: String) {
    insert_marca_transporte_one(object: { marca: $marca }) {
      id
    }
  }
`;

export const saveRegistroCombustible = gql`
  mutation insert_registro_combustible_one(
    $comentarios: String
    $fecha: date
    $galones_servidos: numeric
    $id_empleado_motorista: uuid
    $id_usuario: uuid
    $kilometraje_actual: numeric
  ) {
    insert_registro_combustible_one(
      object: {
        comentarios: $comentarios
        fecha: $fecha
        id_empleado_motorista: $id_empleado_motorista
        id_usuario: $id_usuario
        galones_servidos: $galones_servidos
        kilometraje_actual: $kilometraje_actual
      }
    ) {
      id
    }
  }
`;

export const updateUnidadTransporteByIdCombustible = gql`
  mutation update_unidades_de_transporte_by_pk(
    $id: uuid!
    $id_combustible: uuid
  ) {
    update_unidades_de_transporte_by_pk(
      pk_columns: { id: $id }
      _set: { id_combustible: $id_combustible }
    ) {
      id
    }
  }
`;
export const updateRegistroCombustibleById = gql`
  mutation update_registro_combustible_by_pk(
    $comentarios: String
    $fecha: date
    $galones_servidos: numeric
    $id_empleado_motorista: uuid
    $kilometraje_actual: numeric
    $id: uuid!
  ) {
    update_registro_combustible_by_pk(
      pk_columns: { id: $id }
      _set: {
        comentarios: $comentarios
        fecha: $fecha
        id_empleado_motorista: $id_empleado_motorista
        kilometraje_actual: $kilometraje_actual
        galones_servidos: $galones_servidos
      }
    ) {
      id
    }
  }
`;

export const updateNuevaMarcaTransporteById = gql`
  mutation update_marca_transporte_by_pk($id: uuid!, $marca: String) {
    update_marca_transporte_by_pk(
      pk_columns: { id: $id }
      _set: { marca: $marca }
    ) {
      id
    }
  }
`;
