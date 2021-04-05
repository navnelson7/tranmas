import React, { Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSubscription } from "@apollo/client";
import { listenNombresDeRepuestos } from "../../../../graphql/Suscription";

function LecturaFallas() {
  const NombresRepuestos = useSubscription(listenNombresDeRepuestos);

  if (NombresRepuestos.loading)
    return (
      <div className="center-box mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (NombresRepuestos.error)
    return (
      <p align="box-center">{`Error! ${NombresRepuestos.error.message}`}</p>
    );
  console.log(NombresRepuestos.data);
  return (
    <Fragment>
      <StyleAire>
        <div className="box-left-aire">
          <Link to={`/registro/tapiceria/`} variant="danger">
            <Button variant="info">Nuevo Registro</Button>
          </Link>
          <br />
          <br />

          {NombresRepuestos.data.repuestos.map((repuestos) => {
            return (
              <Fragment key={repuestos.id}>
                <h6>{repuestos.nombre}</h6>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>N° de cambios</th>
                      <th>Descripción</th>
                      <th>Fecha</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>indice</td>
                      <td>nombres</td>
                      <td>descreip</td>
                      <td>fecha</td>
                      <td>
                        <Link to="/" variant="danger" title="Editar">
                          <Button variant="info">
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                        </Link>
                        <Button variant="danger" title="Eliminar">
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Fragment>
            );
          })}
        </div>
      </StyleAire>
    </Fragment>
  );
}

export default LecturaFallas;

const StyleAire = styled.div`
  .box-left-aire {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-aire {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-aire {
      margin-left: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 1920px) {
    .box-left-cards {
      margin-left: 15%;
      margin-top: 2%;
    }
  }
`;
