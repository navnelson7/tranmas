import React, { Fragment, useContext } from 'react';
import Repuesto from './Repuesto';
import {Table, Container} from 'react-bootstrap';
import repuestoContext from '../../context/repuestos/repuestosContext';


const ListadoRepuestos = () => {
    
    
    //const { data, loading, error } = useQuery(getRepuestos);
   
    const repuestosContext = useContext(repuestoContext);
    const {repuestos} = repuestosContext;
     
    // // useEffect(() => {
    // //     if (data) {
    // //       console.log("====================================");
    // //       console.log(data);
    // //       console.log("====================================");
    // //     //   repuestoContext(data.repuestos);
    // //     }
    // //     //eslint-disable-next-line
    // //   }, [data]);
    // if(loading) return(<p>cargando</p>)
    return ( 
        <Fragment>
            <Container>
                <h1>LISTADO DE REPUESTO</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombres</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            { repuestos.lenght === 0
                                ? (<tr><td>No hay repuestos</td></tr>)
                                : repuestos.map(repuesto =>(
                                    <tr key={repuesto.id}>
                                        <Repuesto 
                                            repuesto={repuesto}
                                        />
                                    </tr>
                                ))
                            }
                        
                    </tbody>
                </Table>
            </Container>
        </Fragment>
    );
}

export default ListadoRepuestos;