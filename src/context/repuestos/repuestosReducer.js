import { OBTENER_REPUESTOS } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case OBTENER_REPUESTOS:
            return {
                ...state,
                repuestos: state.repuestos
            }
        default:
            return state;
    }
}