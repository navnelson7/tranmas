import React, { useReducer, useContext } from 'react';

import MarcasReducer from './marcasReducer';
import MarcasContext from './marcasContext';

import { OBTENER_MARCAS } from '../../types/index';

const MarcasState = props => {
    const marcasContext = useContext(MarcasContext);

    const initialState = {
        marcas: [

        ]
    }

    const [state, dispatch] = useReducer(MarcasReducer, initialState)
    const { marcas } = MarcasReducer;

    const obtenerMarcas = () => {
        dispatch({
            type: OBTENER_MARCAS,
            payloaad: state.data
        })
    }

    return ( 
        <MarcasContext.Provider 
            value = {{
                marcas: state.marcas,
                obtenerMarcas
            }} 
        >
            { props.children }
        </MarcasContext.Provider>
    );
}

export default MarcasState