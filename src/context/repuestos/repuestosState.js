import React, { useReducer, useContext,  } from 'react';

import RepuestosContext from '../../context/repuestos/repuestosContext'
import RepuestosReducer from '../../context/repuestos/repuestosReducer';






import { OBTENER_REPUESTOS } from '../../types/index';


const RepuestosState = props => {
   
    const repuestosContext = useContext(RepuestosContext);
    //estate 
    const initialState = {
            "activo": '',
            "cantidad": '',
            "fecha_factura": '',
            "fecha_ingreso": '',
            "id_estado": '',
            "id_marca": '',
            "id_proveedor": '',
            "comentarios": '',
            "id_unidad_medida": '',
            "id_usuario": "74ce2303-ba9c-4682-84d9-7936679e2610",
            "codigo_repuesto": '',
            "nombre": '',
            "numero_factura": '',
            "precio": '',
    }

    const [state, dispatch] = useReducer(RepuestosReducer, initialState);
    
    const {repuestos} = RepuestosReducer;
    
    


    const obtenerRepuestos = () => {
        dispatch({
            type:OBTENER_REPUESTOS,
            payload: state.data
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