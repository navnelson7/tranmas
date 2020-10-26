import {
    OBTENER_MEDIDAS
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case OBTENER_MEDIDAS:
            return {
                ...state,
                medidas: action.payload
            }
        default:
            return state;
    }
}