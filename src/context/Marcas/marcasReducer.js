import {
    OBTENER_MARCAS
} from '../../types';

export default (state, action) => {
    switch (action.type){
        case OBTENER_MARCAS:
        return {
            ...state,
            marcas: action.payload
        }
        default:
            return state;
    }
}