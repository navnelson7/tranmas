import { gql } from "@apollo/client";

export const setUserOne = gql`
  mutation insert_users_one(
    $email: String
    $password: String
    $user: String
    $id_role: uuid
    $id_empleado: uuid
  ) {
    insert_users_one(
      object: {
        email: $email
        password: $password
        user: $user
        id_role: $id_role
        id_empleado: $id_empleado
      }
    ) {
      id
      email
    }
  }
`;
