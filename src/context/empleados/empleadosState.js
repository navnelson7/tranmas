import React, { useReducer } from 'react';
import empleadosContext from './empleadosContext';
import empleadosReducer from './empleadosReducer';

import {
    REGISTRO,
    OBTENER_EMPLEADOS,
    AGREGAR_EMPLEADO,
    VALIDAR_FORMULARIO
} from '../../types/index.js';

const EmpleadosState = props => {
    const empleados = [
        
    ]
    const initialState = {
        empleados: []
    }

    const [state, dispatch] = useReducer(empleadosReducer,initialState);

    const obtenerEmpleados = () => {
        dispatch({
            type: OBTENER_EMPLEADOS,
            payload: empleados
        })
    }
    return (
        <empleadosContext.Provider
            value={{
                empleados: state.empleados,
                obtenerEmpleados
            }}
        >
            {props.children}
        </empleadosContext.Provider>
    );

}

export default EmpleadosState;