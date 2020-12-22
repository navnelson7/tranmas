const queryStatistic = `
        query{
        combustible1: registro_combustible_aggregate(where: {mes: {_eq: "1"}, year: {_eq: "2020"}, id_unidad_transporte: {_eq: "905bd6aa-faf8-4161-9b58-eeeb1dfdee61"}}) {
          aggregate {
            count
          }
        }
        combustible2: registro_combustible_aggregate(where: {mes: {_eq: "2"}, year: {_eq: "2020"}}) {
          aggregate {
            count
          }
        }
        combustible3: registro_combustible_aggregate(where: {mes: {_eq: "3"}, year: {_eq: "2020"}}) {
          aggregate {
            count
          }
        }
        combustible4: registro_combustible_aggregate(where: {mes: {_eq: "4"}, year: {_eq: "2020"}}) {
          aggregate {
            count
          }
        }
        combustible5: registro_combustible_aggregate(where: {mes: {_eq: "5"}, year: {_eq: "2020"}}) {
          aggregate {
            count
          }
        }
        combustible6: registro_combustible_aggregate(where: {mes: {_eq: "6"}, year: {_eq: "2020"}}) {
          aggregate {
            count
          }
        }
        combustible7: registro_combustible_aggregate(where: {mes: {_eq: "7"}, year: {_eq: "2020"}}) {
          aggregate {
            count
          }
        }
        combustible8: registro_combustible_aggregate(where: {mes: {_eq: "8"}, year: {_eq: "2020"}}) {
          aggregate {
            count
          }
        }
        combustible9: registro_combustible_aggregate(where: {mes: {_eq: "9"}, year: {_eq: "2020"}}) {
          aggregate {
            count
          }
        }
        combustible10: registro_combustible_aggregate(where: {mes: {_eq: "10"}, year: {_eq: "2020"}}) {
          aggregate {
            count
            max {
              galones_servidos
            }
          }
        }
        combustible11: registro_combustible_aggregate(where: {mes: {_eq: "11"}, year: {_eq: "2020"}, id_unidad_transporte: {_eq: "905bd6aa-faf8-4161-9b58-eeeb1dfdee61"}}) {
          aggregate {
            count
          }
        }
        combustible12: registro_combustible_aggregate(where: {mes: {_eq: "12"}, year: {_eq: "2020"}, id_unidad_transporte: {_eq: "d118bdee-ac62-4726-b32e-bc8315acd181"}}) {
          aggregate {
            count
            max {
              galones_servidos
            }
            min {
              galones_servidos
            }
          }
        }
      }
      `;
