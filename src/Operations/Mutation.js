import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    value
  }
}
`;

export const REGISTER_USER = gql`
mutation($username: String!, $password: String!, $name: String!, $lastname: String!, $phone: String!) {
  createUser(username: $username, password: $password, name: $name, lastname: $lastname, phone: $phone) {
    value
  }
}
`;
