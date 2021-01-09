combustible reciente comparar con la fecha reciente en la animacion de la carta

query{
  registro_combustible(where: {fecha: {_eq: "2020-01-10"}, id_unidad_transporte: {_eq: "91a87246-84fb-48ad-9b0c-e2b50dd4ac6c"}}) {
    id
    galones_servidos
  }
}