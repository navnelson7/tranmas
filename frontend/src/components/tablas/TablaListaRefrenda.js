import React, { Fragment, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Refrenda from '../Empleados/Refrenda';

import { useMutation, useQuery } from '@apollo/client';
import { getRefrendaPorIdEpleado } from '../../graphql/Queries';
import { deleteRefrenda } from '../../graphql/Mutations';

const TablaListaRefrenda = ({Id, id}) => {
    const [listadoRefrenda, setListadoRefrenda] = useState([]);
    const { data, loading, refetch } = useQuery(getRefrendaPorIdEpleado, {
        variables: {
            id_empleado_motorista: Id,
        },
    });
    const [deleteRefren] = useMutation(deleteRefrenda);
    useEffect(() => {
        if (loading) {
            return
        }
        if (data) {
            setListadoRefrenda(data.refrenda_documentos_motorista);
        }
        //eslint-disable-next-line
    }, [loading, data]);

    const eliminarRefrenda = (id) => {
        deleteRefren({
            variables: { id }
        }).then((res) => {
            if (res.data) {
                refetch();
                setTimeout(() => {}, 2000);
            }
        })
    }
    return (
        <Fragment>
            <br />
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Empleado</th>
                        <th>Licencia</th>
                        <th>Fecha de Emisión</th>
                        <th>Fehca de Refrenda</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {listadoRefrenda.length === 0
                        ? (<tr><td>no hay registros</td></tr>)
                        : listadoRefrenda.map(refrenda =>(
                            <tr key={refrenda.id}>
                                <Refrenda 
                                    refrenda={refrenda}
                                    eliminarRefrenda={eliminarRefrenda}
                                    id={refrenda.id}
                                />
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Fragment>
    )
}
export default TablaListaRefrenda;