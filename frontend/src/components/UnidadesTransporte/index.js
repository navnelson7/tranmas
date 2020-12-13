import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import CardTransporte from "./CardTransporte";

function UnidadesTransporte() {
  const [Element, setElement] = useState(null);
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [pageNumber, setpageNumber] = useState(0);
  const [Error, setError] = useState(false);
  const [showReference, setshowReference] = useState(true);

  const load = () => {
    setTimeout(() => {
      setpageNumber(pageNumber + 10);
    }, 300);
  };
  useInfiniteScroll({ element: Element, fetch: load });

  useEffect(() => {
    setLoading(true);
    const fetchGraphQL = async () => {
      try {
        const result = await fetch(process.env.REACT_APP_BACKEND_URL, {
          method: "POST",
          body: JSON.stringify({
            query: `
        query unnamedQuery1 {
          unidades_de_transporte(where: {activo: {_eq: true}}, offset: ${pageNumber}, limit: 10) {
            activo
            numero_pasajeros
            numero_placa
            id
            image
            id_combustible
            marca_transporte{
              marca
            }
            registro_combustible{
              galones_servidos
            }
          }
        }
      `,
          }),
        });
        const res = await result.json();
        if (res.data.unidades_de_transporte.length > 0) {
          // GUARDANDO UNIDADES
          setData((prevUnidades) => {
            return [
              ...new Set([
                ...prevUnidades,
                ...res.data.unidades_de_transporte.map((b) => b),
              ]),
            ];
          });
        } else {
          setshowReference(false);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchGraphQL();
  }, [pageNumber]);
  if (Error)
    return (
      <div className="box-center">
        <p>{Error}</p>
      </div>
    );
  return (
    <Fragment>
      <StyleCards>
        <div className="box-left-cards">
          <div className="container-viewport">
            <div className="d-flex justify-content-end mr-2">
              <Link to="/registro-transporte">
                <Button variant="primary">Nueva Unidad</Button>
              </Link>
            </div>
            <div className="row hidden-md-up">
              {Data.map((unidad) => {
                return (
                  <CardTransporte unidad={unidad} key={unidad.id} />
                );
              })}
            </div>
            {Loading && <li>Cargando</li>}
            {!Loading && showReference ? (
              <p ref={setElement} align="center">
                Cargando...
              </p>
            ) : null}
          </div>
        </div>
      </StyleCards>
      <br />
      <br />
      <br />
      <br />
    </Fragment>
  );
}

export default UnidadesTransporte;

const StyleCards = styled.div`
  .box-left-cards {
    margin-left: 18%;
    margin-top: 2%;
    overflow-x: hidden;
  }

  .container-viewport {
    min-height: 120vh;
    height: 100%;
  }

  .box-image {
    width: 100%;
    height: 180px;
    background-color: blue;
  }

  .box-placa {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .box-white {
    background: white;
  }
  .box-blue-top {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .box-blue-bottom {
    background: #5289dd;
    height: 33.33%;
    color: white;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .box-left-cards {
      margin-left: 2%;
      margin-right: 2%;
      margin-top: 2%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box-left-cards {
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

  li {
    padding: 1rem;
    margin: 1rem;
    min-height: 100px;
  }
`;
