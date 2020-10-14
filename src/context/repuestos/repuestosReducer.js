import { OBTENER_REPUESTOS } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case OBTENER_REPUESTOS:
            console.log(action.payload);
            return {
                ...state,
                repuestos: action.payload
            }
        default:
            return state;
    }
}