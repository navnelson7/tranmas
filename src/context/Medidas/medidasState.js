import React, {useReducer} from 'react';
import MedidasReducer from './medidasReducer';
import MedidasContext from './medidasContext';

import { OBTENER_MEDIDAS } from '../../types';
import { useContext } from 'react';

const MedidasSatate = props => {
    const medidasContext = useContext(MedidasContext);
    const initialState = {
        medidas: [

        ]
    }

    const [state, dispatch] = useReducer(MedidasReducer, initialState);
    const {medidas} = MedidasReducer;

    const obtenerMedidas = () => {
        dispatch({
            type: OBTENER_MEDIDAS,
            payload: state.data
        })
    }

    return (
        <MedidasContext.Provider
            value={{
                medidas: state.medidas,
                obtenerMedidas
            }}
        >
            {props.children}
        </MedidasContext.Provider>
    );
}

export default MedidasSatate;