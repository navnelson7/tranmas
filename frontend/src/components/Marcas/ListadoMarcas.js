import { useQuery } from '@apollo/react-hooks';
import React, { Fragment, useEffect, useState } from 'react';
import {Container,Table,} from 'react-bootstrap';
import Marca from './Marca';




import {getMarcas} from '../../graphql/Queries'

const ListadoMarcas = () => {
    const [listadoMarcas, setListadoMarcas] = useState([]);

    const {data, loading} = useQuery(getMarcas);


    useEffect(()=> {
        if(loading){
            return
        }
        if(data){
            setListadoMarcas(data.marcas);
        }
        console.log(listadoMarcas);
        // eslint-disable-next-line
    },[data]);


    if(loading)return (<p>Cargando</p>)
    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>LISTADO DE MARCAS</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Nombre de la Marca</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listadoMarcas.lenght === 0
                                ? (<tr><td>No hay Marcas</td></tr>)
                                : listadoMarcas.map(marca =>(
                                    <tr key={marca.id}>
                                        <Marca 
                                            marca={marca}
                                        />
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Fragment>
    );
}

export default ListadoMarcas;