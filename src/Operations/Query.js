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
query($mod: String!) {
  findForModule(mod: $mod) {
    image {
      alt
      id
      mId
      src
    }
    text {
      name
      description
      id
      mId
    }
  }
}
`;

export const hola = () => console.log('hola');
