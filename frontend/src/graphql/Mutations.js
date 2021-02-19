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
    $comentarios: String
    $picture: String
    $id_estado_empleados: uuid
    $activo: Boolean
  ) {
    insert_empleados_one(
      object: {
        activo: $activo
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

export const saveRegistroCombustibleDaily = gql`
  mutation insert_registro_combustible_one(
    $comentarios: String
    $fecha: date
    $galones_servidos: numeric
    $id_empleado_motorista: uuid
    $id_unidad_transporte: uuid
    $id_usuario: uuid
    $kilometraje_actual: numeric
    $year: String
    $mes: String
  ) {
    insert_registro_combustible_one(
      object: {
        comentarios: $comentarios
        galones_servidos: $galones_servidos
        id_empleado_motorista: $id_empleado_motorista
        id_unidad_transporte: $id_unidad_transporte
        fecha: $fecha
        id_usuario: $id_usuario
        kilometraje_actual: $kilometraje_actual
        year: $year
        mes: $mes
      }
    ) {
      id
    }
  }
`;

export const setEstadoTaller = gql`
  mutation insert_estado_en_taller_one($activo: Boolean, $estado: String) {
    insert_estado_en_taller_one(object: { activo: $activo, estado: $estado }) {
      id
    }
  }
`;

export const setRegistroTallerOne = gql`
  mutation insert_registro_taller_one(
    $id_empleado_mecanico: uuid
    $id_empleado_motorista: uuid
    $id_estado: uuid
    $id_unidad_transporte: uuid
    $kilometraje: Int
    $comentarios: String
  ) {
    insert_registro_taller_one(
      object: {
        kilometraje: $kilometraje
        id_empleado_mecanico: $id_empleado_mecanico
        id_empleado_motorista: $id_empleado_motorista
        id_estado: $id_estado
        comentarios: $comentarios
        id_unidad_transporte: $id_unidad_transporte
      }
    ) {
      id
    }
  }
`;

export const updateCantidadRepuesto = gql`
  mutation update_repuestos_by_pk($id: uuid!, $cantidad: numeric) {
    update_repuestos_by_pk(
      pk_columns: { id: $id }
      _inc: { cantidad: $cantidad }
    ) {
      id
    }
  }
`;

export const insertDetalleTaller = gql`
  mutation insert_detalle_trabajo_taller_one(
    $cantidad: numeric!
    $comentarios: String!
    $id_registro_taller: uuid!
    $id_repuesto: uuid!
  ) {
    insert_detalle_trabajo_taller_one(
      object: {
        cantidad: $cantidad
        comentarios: $comentarios
        id_repuesto: $id_repuesto
        id_registro_taller: $id_registro_taller
      }
    ) {
      id
    }
  }
`;

export const updateDetalleTrabajoTaller = gql`
  mutation update_detalle_trabajo_taller_by_pk(
    $id: uuid!
    $cantidad: numeric
    $comentarios: String
    $__typename: String
  ) {
    update_detalle_trabajo_taller_by_pk(
      pk_columns: { id: $id }
      _set: { cantidad: $cantidad, comentarios: $comentarios }
    ) {
      id
    }
  }
`;

export const deleteDetalleEnTaller = gql`
  mutation delete_detalle_trabajo_taller_by_pk($id: uuid!) {
    delete_detalle_trabajo_taller_by_pk(id: $id) {
      id
    }
  }
`;
export const deleteRegistroEnTaller = gql`
  mutation delete_registro_taller_by_pk($id: uuid!, $id_estado: uuid!) {
    delete_registro_taller_by_pk(id: $id) {
      id
    }
    delete_detalle_trabajo_taller(where: { id_registro_taller: { _eq: $id } }) {
      returning {
        id
      }
    }
    delete_estado_en_taller_by_pk(id: $id_estado) {
      id
    }
  }
`;
export const setFaltaOne = gql`
  mutation insert_faltas_motoristas_one(
    $id_empleado: uuid
    $descripcion_de_falta: String
    $id_tipo_falta: uuid
  ) {
    insert_faltas_motoristas_one(
      object: {
        id_empleado: $id_empleado
        descripcion_de_falta: $descripcion_de_falta
        id_tipo_falta: $id_tipo_falta
      }
    ) {
      id
    }
  }
`;

export const updateRegistroTallerOne = gql`
  mutation update_registro_taller_by_pk(
    $id: uuid!
    $id_estado: uuid!
    $comentarios: String
    $id_empleado_mecanico: uuid
    $id_empleado_motorista: uuid
    $kilometraje: Int
    $activo: Boolean
    $estado: String
  ) {
    update_registro_taller_by_pk(
      pk_columns: { id: $id }
      _set: {
        kilometraje: $kilometraje
        comentarios: $comentarios
        id_empleado_mecanico: $id_empleado_mecanico
        id_empleado_motorista: $id_empleado_motorista
      }
    ) {
      id
    }
    update_estado_en_taller_by_pk(
      pk_columns: { id: $id_estado }
      _set: { activo: $activo, estado: $estado }
    ) {
      id
    }
  }
`;

export const deleteFalta = gql`
  mutation delete_faltas_motoristas_by_pk($id: uuid!) {
    delete_faltas_motoristas_by_pk(id: $id) {
      id
    }
  }
`;

export const insertNewAccidentes = gql`
  mutation insert_accidentes_one(
    $descripcion_accidente: String
    $fecha: date
    $id_empleado_motorista: uuid!
    $id_unidad_transporte: uuid
    $registro_fotos: String
  ) {
    insert_accidentes_one(
      object: {
        descripcion_accidente: $descripcion_accidente
        id_empleado_motorista: $id_empleado_motorista
        id_unidad_transporte: $id_unidad_transporte
        fecha: $fecha
        registro_fotos: $registro_fotos
      }
    ) {
      id
    }
  }
`;

export const updateEmpledoById = gql`
  mutation update_empleados_by_pk(
    $codigo_empleado: String
    $activo: Boolean
    $afp: String
    $apellidos: String
    $comentarios: String
    $direccion: String
    $dui: String
    $edad: Int
    $estado_civil: String
    $fecha_ingreso_empresa: date
    $fecha_nacimiento: date
    $id: uuid!
    $id_departamento: uuid
    $id_tipo_empleado: uuid
    $id_estado_empleados: uuid
    $isss: String
    $licencia_arma: String
    $licencia_conducir: String
    $nit: String
    $nombres: String
    $picture: String
    $sexo: bpchar
    $telefono: String
    $__typename: String
  ) {
    update_empleados_by_pk(
      _set: {
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
        fecha_ingreso_empresa: $fecha_ingreso_empresa
        fecha_nacimiento: $fecha_nacimiento
        estado_civil: $estado_civil
        licencia_conducir: $licencia_conducir
        licencia_arma: $licencia_arma
        id_tipo_empleado: $id_tipo_empleado
        id_estado_empleados: $id_estado_empleados
        id_departamento: $id_departamento
        comentarios: $comentarios
        picture: $picture
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const updateAccidente = gql`
  mutation update_accidentes_by_pk(
    $id: uuid!
    $registro_fotos: String
    $id_empleado_motorista: uuid!
    $fecha: date
    $descripcion_accidente: String
  ) {
    update_accidentes_by_pk(
      pk_columns: { id: $id }
      _set: {
        descripcion_accidente: $descripcion_accidente
        registro_fotos: $registro_fotos
        id_empleado_motorista: $id_empleado_motorista
        fecha: $fecha
      }
    ) {
      id
    }
  }
`;
 
export const newAireAcondicionado = gql`
  mutation insert_aire_acondicionado_one(
    $descripcion: String
    $fecha: date
    $id_empleado_motorista: uuid
    $id_unidad_transporte: uuid
  ) {
    insert_aire_acondicionado_one(
      object: {
        descripcion: $descripcion
        fecha: $fecha
        id_empleado_motorista: $id_empleado_motorista
        id_unidad_transporte: $id_unidad_transporte
      }
    ) {
      id
    }
  }
`;

export const deleteAireAcondicionado = gql`
  mutation delete_aire_acondicionado_by_pk($id: uuid!){
    delete_aire_acondicionado_by_pk(id: $id) {
      id
    }
  }
`;


export const updateAireAcondicionadoOne = gql`
  mutation update_aire_acondicionado_by_pk(
    $id: uuid!
    $descripcion: String
    $fecha: date
    $id_empleado_motorista: uuid
    $__typename: String
  ) {
    update_aire_acondicionado_by_pk(
      _set: {
        descripcion: $descripcion
        fecha: $fecha
        id_empleado_motorista: $id_empleado_motorista
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;
export const updateActivoEmpleado = gql `
    mutation updateActivoEmpleados($id: uuid!, $activo: Boolean){
      update_empleados(where:{ id: {_eq: $id}}, _set:{activo:$activo}){
        affected_rows
      }
    }
`
