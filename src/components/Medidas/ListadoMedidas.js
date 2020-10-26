import React, { Fragment } from 'react';
import { Container, Table } from 'react-bootstrap';
const ListadoMedidas = () => {
    return (
        <Fragment>
            <Container>
                <div className="box-left">
                    <h1>Listados de Unidades de Medida</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Identificador</th>
                                <th>Unidad de Medida</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </Container>
        </Fragment>
    );
}

export default ListadoMedidas;