import React, { Fragment, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { getMedidas } from "../../graphql/Queries";

import Medida from "./Medida";
import MedidasContext from "../../context/Medidas/medidasContext";
import medidasReducer from "../../context/Medidas/medidasReducer";
import { useContext } from "react";
import { useReducer } from "react";

import { OBTENER_MEDIDAS } from "../../types";
import { useEffect } from "react";

const ListadoMedidas = () => {
  const [Loader, setLoader] = useState(false);
  const { loading, data, error } = useQuery(getMedidas);

  const medidasContext = useContext(MedidasContext);
  const { unidades_de_medida } = medidasContext;

  const [state, dispatch] = useReducer(medidasReducer);

  // useEffect(() =>{
  //     if(data === undefined){
  //         dispatch({
  //             type: OBTENER_MEDIDAS,
  //             payload: []
  //         })
  //     }

  //     if(data){
  //         dispatch({
  //             type: OBTENER_MEDIDAS,
  //             payload: data.unidades_de_medida
  //         })
  //     }
  // },[data])

  useEffect(() => {
    setLoader(true);
    let datos = [];
    datos = data === undefined ? [] : data.unidades_de_medida;
    dispatch({
      type: OBTENER_MEDIDAS,
      payload: datos,
    });
    setLoader(false);
  }, [data]);
  if (loading) return <p>Cargando...</p>;
  return (
    <Fragment>
      <Container>
        {Loader ? (
          <p align="center">Cargando....</p>
        ) : (
          <div className="box-left">
            <h1>Listados de Unidades de Medida</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Unidad de Medida</th>
                </tr>
              </thead>
              <tbody>
                  
                {state.unidades_de_medida.map((unidad_de_medida) => (
                  <tr key={unidad_de_medida.id}>
                    <Medida unidad_de_medida={unidad_de_medida.unidad_de_medida} />
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default ListadoMedidas;
