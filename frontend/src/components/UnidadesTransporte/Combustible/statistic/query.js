import { gql } from "apollo-boost";

export const queryStatistic = gql`
  query estadistica($id_unidad_transporte: uuid, $year: String) {
    combustible1: registro_combustible_aggregate(
      where: {
        mes: { _eq: "1" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible2: registro_combustible_aggregate(
      where: {
        mes: { _eq: "2" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible3: registro_combustible_aggregate(
      where: {
        mes: { _eq: "3" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible4: registro_combustible_aggregate(
      where: {
        mes: { _eq: "4" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible5: registro_combustible_aggregate(
      where: {
        mes: { _eq: "5" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible6: registro_combustible_aggregate(
      where: {
        mes: { _eq: "6" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible7: registro_combustible_aggregate(
      where: {
        mes: { _eq: "7" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible8: registro_combustible_aggregate(
      where: {
        mes: { _eq: "8" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible9: registro_combustible_aggregate(
      where: {
        mes: { _eq: "9" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible10: registro_combustible_aggregate(
      where: {
        mes: { _eq: "10" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
        }
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible11: registro_combustible_aggregate(
      where: {
        mes: { _eq: "11" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: $id_unidad_transporte }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
    combustible12: registro_combustible_aggregate(
      where: {
        mes: { _eq: "11" }
        year: { _eq: $year }
        id_unidad_transporte: { _eq: "863a3112-32dd-45e3-a80f-fd26f5315524" }
      }
    ) {
      aggregate {
        count
        max {
          galones_servidos
          kilometraje_actual
        }
        min {
          galones_servidos
          kilometraje_actual
        }
      }
    }
  }
`;
