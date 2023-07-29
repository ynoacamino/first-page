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

export const ADD_ITEM = gql`
mutation($itemId: String!){
  addItemToCart(itemId: $itemId) {
    id
    name
    cart {
      name
      cost
      id
      description
    }
  }
}
`;

export const REMOVE_ITEM = gql`
mutation($id: String!) {
  removeItemCart(id: $id) {
    cart {
      name
      id
    }
  }
}
`;
