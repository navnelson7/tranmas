import { gql } from "apollo-boost";

export const getEmpmleados = gql `
  query getEmpleados {
    empleados(where: { activo: { _eq: true } }) {
      id
      codigo_empleado
      nombres
      apellidos
      edad
      sexo
      tipo_empleado {
        tipo_empleado
      }
      departamento_empleado {
        departamento
      }
      dui
      nit
      afp
      licencia_conducir
      licencia_arma
      picture
      activo
    }
  }
`;

export const getRepuestos = gql `
  query allrepuestos {
    repuestos {
      id
      nombre
      km_para_cambio
      codigo_repuesto
      marcar_de_repuestos {
        marca
      }
      cantidad
      unidad_medida_repuesto {
        unidad_de_medida
      }
      fecha_factura
      precio
      proveedor_de_repuesto {
        nombre_proveedor
      }
      estado_repuesto_stock {
        estado_repuestos
      }
    }
    unidades_de_medida {
      unidad_de_medida
    }
  }
`;
export const getDepartamentos = gql `
  query getDepartamentos {
    departamentos {
      id
      departamento
    }
  }
`;

export const getEstadoRepuestos = gql `
  query getEstadoRepuestos {
    estado_repuestos_stock {
      id
      estado_repuestos
      activo
    }
  }
`;

export const getProveedores = gql `
  query getProveedores {
    proveedores {
      id
      nombre_proveedor
    }
  }
`;

export const getUnidadMedida = gql `
  query getUnidadesMedida {
    unidades_de_medida {
      id
      unidad_de_medida
    }
  }
`;

export const getMarcas = gql `
  query getMarcas {
    marcas {
      id
      marca
    }
  }
`;

export const getRoles = gql `
  query {
    roles {
      id
      role
    }
  }
`;

export const getEmpleados = gql `
  subscription {
    empleados(where: { activo: { _eq: true } }) {
      codigo_empleado
      nombres
      apellidos
      edad
      sexo
      tipo_empleado {
        tipo_empleado
      }
      departamento_de_empleado {
        departamento
      }
      dui
      nit
      afp
      licencia_conducir
      licencia_arma
      picture
      id
    }
  }
`;

export const getEmailUsers = gql `
  query {
    users {
      email
    }
  }
`;

export const getProveedoresById = gql `
  query proveedores_by_pk($id: uuid!) {
    proveedores_by_pk(id: $id) {
      id
      nombre_proveedor
      nit
      created_at
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

export const getMedidas = gql `
  query getMedidas {
    unidades_de_medida {
      id
      unidad_de_medida
    }
  }
`;

export const getRepuestosById = gql `
  query repuestos_by_pk($id: uuid!) {
    repuestos_by_pk(id: $id) {
      id
      activo
      cantidad
      codigo_repuesto
      fecha_factura
      fecha_ingreso
      nombre
      numero_factura
      precio
      updated_at
    }
  }
`;

export const getEstadoEmpleados = gql `
  query getEstadoEmpleados {
    estados_de_empleados {
      id
      estado_empleado
    }
  }
`;

export const getTipoEmpleados = gql `
  query getTipoEmpleados {
    tipos_empleados {
      id
      tipo_empleado
    }
  }
`;

export const getEmpleadosByCodigo = gql `
  query getEmpleadosByCodigo($codigo_empleado: String) {
    empleados(where: { codigo_empleado: { _eq: $codigo_empleado } }) {
      codigo_empleado
      nombres
      apellidos
      edad
      sexo
      empleado_tipo_empleado {
        tipo_empleado
      }
      departamento_empleado {
        departamento
      }
      dui
      nit
      afp
      licencia_conducir
      licencia_arma
      picture
    }
  }
`;

export const queryUnidadTransporteById = gql `
  query unidades_de_transporte_by_pk($id: uuid!) {
    unidades_de_transporte_by_pk(id: $id) {
      activo
      numero_pasajeros
      numero_placa
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
      id_marca
    }
  }
`;

//ELIMINAR<
export const getMarcaTransporteById = gql `
  query unidades_de_transporte_by_pk($id: uuid!) {
    unidades_de_transporte_by_pk(id: $id) {
      marca_transporte {
        marca
      }
    }
  }
`;

export const registroCombustibleById = gql `
  subscription registro_combustible_by_pk($id: uuid!) {
    registro_combustible_by_pk(id: $id) {
      comentarios
      id_empleado_motorista
      empleado_motorista {
        nombres
        apellidos
      }
      fecha
      id
      kilometraje_actual
      galones_servidos
    }
  }
`;

export const getTipoFaltas = gql `
  query getTipoFaltas {
    tipos_de_faltas {
      id
      falta
    }
  }
`;

export const getFaltaPorIdEmpleado = gql `
  query getFaltaPorIdEmpleado($id_empleado: uuid!) {
    faltas_motoristas(where: { id_empleado: { _eq: $id_empleado } }) {
      empleado_que_cometio_falta {
        codigo_empleado
        nombres
        apellidos
      }
      tipo_de_falta_cometida {
        falta
      }
      descripcion_de_falta
      id
    }
  }
`;

export const EmpleadoByid = gql `
  query empleados_by_pk($id: uuid!) {
    empleados_by_pk(id: $id) {
      codigo_empleado
      nombres
      apellidos
      edad
      sexo
      telefono
      direccion
      dui
      nit
      afp
      isss
      fecha_ingreso_empresa
      fecha_nacimiento
      estado_civil
      licencia_conducir
      licencia_arma
      id_tipo_empleado
      id_departamento
      comentarios
      departamento_de_empleado {
        departamento
      }
      estado_de_empleado{
        estado_empleado
      }
      picture
      id
      picture
    }
  }
`;

export const getRefrendaPorIdEpleado = gql `
  query getRefrendaPorIdEpleado($id_empleado_motorista: uuid!){
    refrenda_documentos_motorista(where: {id_empleado_motorista:{_eq: $id_empleado_motorista}}) {
    motorista{
      nombres
      apellidos
  		licencia_conducir    
    }
    fecha_emision
    fecha_vencimiento
    refrendado
    id
  }   
  }
`;

export const listenDetalleTallerUpdate = gql`
  query detalle_trabajo_taller_by_pk($id: uuid!) {
    detalle_trabajo_taller_by_pk(id: $id) {
      cantidad
      comentarios
      id_repuesto
      repuesto {
        nombre
      }
    }
  }
`;