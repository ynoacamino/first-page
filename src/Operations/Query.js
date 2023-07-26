import { gql } from '@apollo/client';

export const QUERY_STATIC_IMAGE = gql`
query findById($ID: ID!) {
  findSingleImage(id: $ID) {
    src
    alt
    link
    id
  }
}
`;

export const QUERY_MODULE = gql`
query($id: String!) {
  findForModule(id: $id) {
    image {
      alt
      id
      src
    }
    text {
      name
      description
      id
    }
  }
}
`;

export const QUERY_ALL_ITEMS = gql`
query {
  findAllItems {
    name
    src
    sku
    id
    cost
    brand
    description
    stock
    tags
  }
}
`;

export const QUERY_ONE_ITEM = gql`
query($id: String!) {
  findItemById(id: $id) {
    name
    src
    sku
    id
    cost
    brand
    description
    stock
    tags
  }
}
`;

export const QUERY_CATEGORY = gql`
query ($category: String!) {
  findCategory(category: $category) {
    name
    src
    sku
    id
    cost
    brand
    description
    stock
    tags
  }
}
`;

export const QUERY_USERDATA = gql`
query {
  findUserData {
    name
    username
    phone
    cart
    lastname
  }
}
`;
