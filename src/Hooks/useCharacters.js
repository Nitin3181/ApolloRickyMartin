import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id,
        name,
        status,
        image,
      }
    }
  }`

  export default function useCharacters() {
    return useQuery(GET_CHARACTERS);
  }