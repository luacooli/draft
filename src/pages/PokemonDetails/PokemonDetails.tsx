import { useRoute } from "wouter"
import { useQuery } from "@apollo/client"
import { GET_CARD_BY_ID } from "../../graphql/queries"

function PokemonDetails() {
  const [match, params] = useRoute("/pokemon/:id")
  const { loading, error, data } = useQuery(GET_CARD_BY_ID, {
    variables: { id: params?.id }
  })

  console.log("Match:", match);
  console.log("Params:", params);
  console.log("Data:", data);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <h2>{data.card.name} Details</h2>
      <p>id: {data.card.id}</p>
      <p>description: {data.card.description}</p>
    </>
  )
}

export default PokemonDetails