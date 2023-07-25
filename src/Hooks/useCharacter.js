import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
        id,
        name,
        status,
        image,
      }
  }`

  export default function useCharacter(id) {
    return useQuery(GET_CHARACTER,  { variables: { id } });
  }