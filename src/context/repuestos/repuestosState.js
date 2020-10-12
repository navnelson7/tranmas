import React, { useReducer, useEffect } from 'react';
import RepuestosReducer from './repuestosReducer';
import RepuestosContext from './repuestosContext';




import { OBTENER_REPUESTOS } from '../../types/index';


const RepuestosState = props => {



    const initialState = {
        repuestos:[
            {id: 1, nombre: "Llantas Michellin"},
            {id: 2, nombre: "Aceite Castrol"}
        ]
    }

    

    const [state, dispatch] = useReducer(RepuestosReducer, initialState);

    const obtenerRepuestos = () => {
        dispatch({
            type:OBTENER_REPUESTOS
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