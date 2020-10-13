import React, { useReducer, useContext,  } from 'react';

import RepuestosReducer from '../../context/repuestos/repuestosReducer';
import RepuestosContext from '../../context/repuestos/repuestosContext'

import {useQuery} from '@apollo/client';
import {getRepuestos} from '../../graphql/Queries';




import { OBTENER_REPUESTOS } from '../../types/index';


const RepuestosState = props => {
    const { data, loading, error } = useQuery(getRepuestos);
   
    const repuestosContext = useContext(RepuestosContext);
    const {repuestos} = repuestosContext;
    console.log(data);

    const initialState = {
        repuestos:[
            
        ]
    }
    
    

    const [state, dispatch] = useReducer(RepuestosReducer, initialState);

    const obtenerRepuestos = () => {
        dispatch({
            type:OBTENER_REPUESTOS,
        })
    }

    return (
        <RepuestosContext.Provider
            value = {{
                repuestos: state.repuestos,
                obtenerRepuestos
            }}
        >
            {props.children}
        </RepuestosContext.Provider>
    )

    
}

export default RepuestosState;