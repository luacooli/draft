import { gql } from "@apollo/client";

export const GET_CARDS = gql`
  query GetCards {
    cards {
      id,
      name,
      image
    }
  }
`

export const GET_CARD_BY_ID = gql`
  query GetCardById($id: ID!) {
    card(id: $id) {
      id,
      localId,
      name,
      image,
      category,
      rarity,
      hp,
      types,
      description,
      evolveFrom,
      level,
      stage
    }
  }
`