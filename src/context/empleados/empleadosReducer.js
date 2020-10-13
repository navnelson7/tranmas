import {
    //REGISTRO,
    OBTENER_EMPLEADOS,
    //AGREGAR_EMPLEADO,
    //VALIDAR_FORMULARIO
} from '../../types/index.js';

export default (state, action) => {
    switch (action.type) {
        case OBTENER_EMPLEADOS:
            return {
                ...state,
                empleados: action.payload
            }
        default:
            return state;
    }

}