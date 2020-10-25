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
        { id: 1, nombres: "Juan Perez" },
        { id: 2, nombres: "Veronica Arteaga" },
        { id: 4, nombres: "Jose Raul Navarro" }
    ]
    const initialState = {
        empleados: []
    }

    const [state, dispatch] = useReducer(empleadosReducer,initialState);

    const obtenerEmpleados = ()=> {
        dispatch({
            type: OBTENER_EMPLEADOS,
            payload: empleados
        })
    }

    const agregarEmpleado = empleado =>{
        dispatch({
            type: AGREGAR_EMPLEADO,
            payload: empleado
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