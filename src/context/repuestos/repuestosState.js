import React, { useReducer } from 'react';
import repuestosContext from './repuestosContext';
import repuestosReducer from './repuestosReducer';

const RepuestosState = props => {
    const initialState = {

    }

    const [state, dispatch] = useReducer(repuestosReducer, initialState)

    return (
        <repuestosContext.Provider
            value = {{
                
            }}
        >
            {props.children}
        </repuestosContext.Provider>
    )

    
}

export default RepuestosState;