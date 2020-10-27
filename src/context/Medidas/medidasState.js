import React, { useContext, useReducer } from 'react';

import MedidasReducer from './medidasReducer';
import MedidasContext from './medidasContext';

import {OBTENER_MEDIDAS}  from '../../types/index';
import medidasReducer from './medidasReducer';

const UnidadesState = props => {

    const medidasContext = useContext(MedidasContext);

    const initalState = {
        unidades_de_medida: [

        ]
    }

    const [state, dispatch] = useReducer(MedidasReducer, initalState);
    const {unidades_de_medida} = medidasReducer;

    const obtenerMedidas = () => {
        dispatch({
            type: OBTENER_MEDIDAS,
            payload: state.data
        })
    }

    return (
        <MedidasContext.Provider
            value ={{
                marcas: state.unidades_de_medida,
                obtenerMedidas
            }}
        >
            { props.children }            
        </MedidasContext.Provider>
     );
}
 
export default UnidadesState;