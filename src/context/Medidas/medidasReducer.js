import {
    OBTENER_MEDIDAS
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case OBTENER_MEDIDAS:
            return {
                ...state,
                unidades_de_medida: action.payload
            }
        default:
            return state;
    }
}