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
    $km_para_cambio: Int
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
        km_para_cambio: $km_para_cambio
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
    $kilometraje_actual: float8
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
    $kilometraje_actual: float8
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
    $kilometraje: float8
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
    $id_repuesto: uuid
  ) {
    update_detalle_trabajo_taller_by_pk(
      pk_columns: { id: $id }
      _set: {
        cantidad: $cantidad
        comentarios: $comentarios
        id_repuesto: $id_repuesto
      }
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
    $kilometraje: float8
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

export const updateImagenesAccidente = gql`
  mutation update_accidentes_by_pk($registro_fotos: String, $id: uuid!) {
    update_accidentes_by_pk(
      pk_columns: { id: $id }
      _set: { registro_fotos: $registro_fotos }
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
  mutation delete_aire_acondicionado_by_pk($id: uuid!) {
    delete_aire_acondicionado_by_pk(id: $id) {
      id
    }
  }
`;

export const updateAireAcondicionadoOne = gql`
  mutation update_aire_acondicionadosetRe_by_pk(
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
export const updateActivoEmpleado = gql`
  mutation updateActivoEmpleados($id: uuid!, $activo: Boolean) {
    update_empleados(where: { id: { _eq: $id } }, _set: { activo: $activo }) {
      affected_rows
    }
  }
`;

export const deleteTapiceriaById = gql`
  mutation delete_control_tapiceria_carroceria_by_pk($id: uuid!) {
    delete_control_tapiceria_carroceria_by_pk(id: $id) {
      id
    }
  }
`;

export const deleteRefrendaLicenciaById = gql`
  mutation delete_refrendas_tarjeta_circulacion_by_pk($id: uuid!) {
    delete_refrendas_tarjeta_circulacion_by_pk(id: $id) {
      id
    }
  }
`;

export const insertTapiceriaOne = gql`
  mutation insert_control_tapiceria_carroceria_one(
    $descripcion_dano: String
    $foto: String
    $id_unidades_transporte: uuid
    $id_empleado_motorista: uuid
    $fecha: date
    $costo_tapiceria: String
  ) {
    insert_control_tapiceria_carroceria_one(
      object: {
        descripcion_dano: $descripcion_dano
        foto: $foto
        id_unidades_transporte: $id_unidades_transporte
        id_empleado_motorista: $id_empleado_motorista
        fecha: $fecha
        costo_tapiceria: $costo_tapiceria
      }
    ) {
      id
    }
  }
`;

export const updateTapiceriaOne = gql`
  mutation update_control_tapiceria_carroceria_by_pk(
    $descripcion_dano: String
    $foto: String
    $id_unidades_transporte: uuid
    $id_empleado_motorista: uuid
    $fecha: date
    $id: uuid!
    $costo_tapiceria: String
  ) {
    update_control_tapiceria_carroceria_by_pk(
      _set: {
        descripcion_dano: $descripcion_dano
        foto: $foto
        id_unidades_transporte: $id_unidades_transporte
        id_empleado_motorista: $id_empleado_motorista
        fecha: $fecha
        costo_tapiceria: $costo_tapiceria
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const insertRefrendaCirculacion = gql`
  mutation insert_refrendas_tarjeta_circulacion_one(
    $costo_refrenda: Int
    $fecha_emision: date
    $fecha_refrenda: date
    $id_unidad_transporte: uuid
    $numero_tarjeta_circulacion: String
    $refrendado: Boolean
  ) {
    insert_refrendas_tarjeta_circulacion_one(
      object: {
        costo_refrenda: $costo_refrenda
        fecha_emision: $fecha_emision
        fecha_refrenda: $fecha_refrenda
        id_unidad_transporte: $id_unidad_transporte
        refrendado: $refrendado
        numero_tarjeta_circulacion: $numero_tarjeta_circulacion
      }
    ) {
      id
    }
  }
`;

export const updateRefrendaLicencia = gql`
  mutation update_refrendas_tarjeta_circulacion_by_pk(
    $id: uuid!
    $costo_refrenda: Int
    $fecha_emision: date
    $fecha_refrenda: date
    $numero_tarjeta_circulacion: String
    $refrendado: Boolean
    $__typename: String
  ) {
    update_refrendas_tarjeta_circulacion_by_pk(
      _set: {
        costo_refrenda: $costo_refrenda
        fecha_emision: $fecha_emision
        fecha_refrenda: $fecha_refrenda
        numero_tarjeta_circulacion: $numero_tarjeta_circulacion
        refrendado: $refrendado
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const insertControlCarwash = gql`
  mutation insert_registro_carwash_one(
    $costo: Int
    $descripcion_trabajo: String
    $fecha: date
    $id_unidad_transporte: uuid
  ) {
    insert_registro_carwash_one(
      object: {
        costo: $costo
        descripcion_trabajo: $descripcion_trabajo
        fecha: $fecha
        id_unidad_transporte: $id_unidad_transporte
      }
    ) {
      id
    }
  }
`;

export const deleteControlCarwashById = gql`
  mutation delete_registro_carwash_by_pk($id: uuid!) {
    delete_registro_carwash_by_pk(id: $id) {
      id
    }
  }
`;

export const updateControlCarwashById = gql`
  mutation update_registro_carwash_by_pk(
    $__typename: String
    $costo: Int
    $descripcion_trabajo: String
    $fecha: date
    $id: uuid!
  ) {
    update_registro_carwash_by_pk(
      _set: {
        costo: $costo
        descripcion_trabajo: $descripcion_trabajo
        fecha: $fecha
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const updateUnidadDeTransporteRepuestosReparados = gql`
  mutation update_unidades_de_transporte_by_pk(
    $id: uuid!
    $id_repuestos_reparados: String
  ) {
    update_unidades_de_transporte_by_pk(
      pk_columns: { id: $id }
      _set: { id_repuestos_reparados: $id_repuestos_reparados }
    ) {
      id
    }
  }
`;

export const updateRepuestosReparadosByUnidadTransporte = gql`
  mutation update_unidades_de_transporte_by_pk($id: uuid!) {
    update_unidades_de_transporte_by_pk(
      pk_columns: { id: $id }
      _set: { id_repuestos_reparados: "[]" }
    ) {
      id
    }
  }
`;

export const updateRepuestoById = gql`
  mutation update_repuestos_by_pk(
    $cantidad: numeric
    $codigo_repuesto: String
    $comentarios: String
    $fecha_factura: date
    $fecha_ingreso: date
    $id_estado: uuid
    $id_marca: uuid
    $id_proveedor: uuid
    $id_unidad_medida: uuid
    $km_para_cambio: Int
    $nombre: String
    $numero_factura: Int
    $precio: money
    $id: uuid!
    $__typename: String
  ) {
    update_repuestos_by_pk(
      pk_columns: { id: $id }
      _set: {
        cantidad: $cantidad
        codigo_repuesto: $codigo_repuesto
        comentarios: $comentarios
        fecha_factura: $fecha_factura
        fecha_ingreso: $fecha_ingreso
        id_estado: $id_estado
        id_marca: $id_marca
        id_proveedor: $id_proveedor
        id_unidad_medida: $id_unidad_medida
        km_para_cambio: $km_para_cambio
        nombre: $nombre
        numero_factura: $numero_factura
        precio: $precio
      }
    ) {
      id
    }
  }
`;

export const insertOneFacturaRepuesto = gql`
  mutation insert_registro_facturas_one(
    $cantidad_comprada: numeric
    $fecha: date
    $id_repuesto: uuid!
    $numero_factura: numeric
    $precio_repuesto: float8
  ) {
    insert_registro_facturas_one(
      object: {
        cantidad_comprada: $cantidad_comprada
        fecha: $fecha
        id_repuesto: $id_repuesto
        numero_factura: $numero_factura
        precio_repuesto: $precio_repuesto
      }
    ) {
      id
    }

    update_repuestos_by_pk(
      _inc: { cantidad: $cantidad_comprada }
      pk_columns: { id: $id_repuesto }
    ) {
      id
    }
  }
`;

export const deleteregistroFacturaRepuestobyId = gql`
  mutation delete_registro_facturas_by_pk($id: uuid!) {
    delete_registro_facturas_by_pk(id: $id) {
      id
    }
  }
`;

export const updateRegistroFacturaRepuesto = gql`
  mutation update_registro_facturas_by_pk(
    $id: uuid!
    $cantidad_comprada: numeric
    $fecha: date
    $id_repuesto: uuid!
    $numero_factura: numeric
    $precio_repuesto: float8
  ) {
    update_registro_facturas_by_pk(
      _set: {
        cantidad_comprada: $cantidad_comprada
        fecha: $fecha
        id_repuesto: $id_repuesto
        numero_factura: $numero_factura
        precio_repuesto: $precio_repuesto
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const insertRegistroEdificiosOne = gql`
  mutation insert_registro_edificios_one(
    $descripcion: String
    $extension: String
    $funcion_edificio: String
    $nombre: String
  ) {
    insert_registro_edificios_one(
      object: {
        descripcion: $descripcion
        extension: $extension
        funcion_edificio: $funcion_edificio
        nombre: $nombre
      }
    ) {
      id
    }
  }
`;

export const updateRegistroEdificios = gql`
  mutation update_registro_edificios_by_pk(
    $descripcion: String
    $extension: String
    $funcion_edificio: String
    $nombre: String
    $id: uuid!
    $__typename: String
  ) {
    update_registro_edificios_by_pk(
      _set: {
        descripcion: $descripcion
        extension: $extension
        funcion_edificio: $funcion_edificio
        nombre: $nombre
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const deleteRegistroEdificioById = gql`
  mutation delete_registro_edificios_by_pk($id: uuid!) {
    delete_registro_edificios_by_pk(id: $id) {
      id
    }
  }
`;

export const insertRegistroMantenimientoEdificiosOne = gql`
  mutation insert_mantenimiento_edificios_one(
    $fecha: date
    $id_edificio: uuid
    $id_empleado: uuid
    $imagen_antes: String
    $imagen_despues: String
  ) {
    insert_mantenimiento_edificios_one(
      object: {
        fecha: $fecha
        id_edificio: $id_edificio
        id_empleado: $id_empleado
        imagen_antes: $imagen_antes
        imagen_despues: $imagen_despues
      }
    ) {
      id
    }
  }
`;

export const updateMantenimientoEdificio = gql`
  mutation update_mantenimiento_edificios_by_pk(
    $fecha: date
    $id_edificio: uuid
    $id_empleado: uuid
    $imagen_antes: String
    $imagen_despues: String
    $id: uuid!
    $__typename: String
  ) {
    update_mantenimiento_edificios_by_pk(
      _set: {
        fecha: $fecha
        id_edificio: $id_edificio
        id_empleado: $id_empleado
        imagen_antes: $imagen_antes
        imagen_despues: $imagen_despues
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;

export const deleteMantenimientoEdificioById = gql`
  mutation delete_mantenimiento_edificios_by_pk($id: uuid!) {
    delete_mantenimiento_edificios_by_pk(id: $id) {
      id
    }
  }
`;

export const insertDetalleEdificiosOne = gql`
  mutation insert_detalle_mantenimiento_edificios_one(
    $id_mantenimiento: uuid
    $descripcion_de_trabajo: String
    $material: String
    $numero_factura: numeric
    $costo: numeric
  ) {
    insert_detalle_mantenimiento_edificios_one(
      object: {
        id_mantenimiento: $id_mantenimiento
        descripcion_de_trabajo: $descripcion_de_trabajo
        material: $material
        numero_factura: $numero_factura
        costo: $costo
      }
    ) {
      id
    }
  }
`;

export const updateDetalleMantenimientoEdificio = gql`
  mutation update_detalle_mantenimiento_edificios_by_pk(
    $descripcion_de_trabajo: String
    $material: String
    $numero_factura: numeric
    $costo: numeric
    $__typename: String
    $id: uuid!
  ) {
    update_detalle_mantenimiento_edificios_by_pk(
      _set: {
        descripcion_de_trabajo: $descripcion_de_trabajo
        material: $material
        numero_factura: $numero_factura
        costo: $costo
      }
      pk_columns: { id: $id }
    ) {
      id
    }
  }
`;
export const deleteDetalleMantenimientoEdificioById = gql`
  mutation delete_detalle_mantenimiento_edificios_by_pk($id: uuid!) {
    delete_detalle_mantenimiento_edificios_by_pk(id: $id) {
      id
    }
  }
`;

export const deleteRegistroCombustibleById = gql`
  mutation delete_registro_combustible_by_pk($id: uuid!) {
    delete_registro_combustible_by_pk(id: $id) {
      id
    }
  }
`;

export const deleteAccidenteById = gql`
  mutation delete_accidentes_by_pk($id: uuid!) {
    delete_accidentes_by_pk(id: $id) {
      id
    }
  }
`;

export const setRefrendaOne = gql`
  mutation insert_refrenda_documentos_motorista_one(
    $id_empleado: uuid
    $fecha_emision: date
    $fecha_refrenda: date
    $numero_licencia_conducir: String
    $refrendado: Boolean
  ) {
    insert_refrenda_documentos_motorista_one(
      object: {
        id_empleado_motorista: $id_empleado
        numero_licencia_conducir: $numero_licencia_conducir
        fecha_emision: $fecha_emision
        fecha_vencimiento: $fecha_refrenda
        refrendado: $refrendado
      }
    ) {
      id
    }
  }
`;

export const deleteRefrenda = gql`
  mutation delete_refrenda_documentos_motoristas_by_pk($id: uuid!) {
    delete_refrenda_documentos_motoristas_by_pk(id: $id) {
      id
    }
  }
`;

export const insertViajeOne = gql`
  mutation insert_control_viajes_one( 
  $fecha: date
  $id_empleado_motorista: uuid,
  $id_unidad_transporte: uuid,
  $kilometrajes_recogidos:  float8,
  $numero_de_viajes_realizados: Int,
  $tipo_viaje: String
  ){
    insert_control_viajes_one(
      object: {
        fecha: $fecha
        id_empleado_motorista: $id_empleado_motorista
        id_unidad_transporte: $id_unidad_transporte
        kilometrajes_recogidos: $kilometrajes_recogidos
        numero_de_viajes_realizados: $numero_de_viajes_realizados
        tipo_viaje: $tipo_viaje
      }
    ) {
      id
    }
  }
`;
