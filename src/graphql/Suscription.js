import { gql } from "apollo-boost";

export const listenNotification = gql`
  subscription {
    notificaciones {
      fecha
      id
      usuario
      mensaje
    }
  }
`;
