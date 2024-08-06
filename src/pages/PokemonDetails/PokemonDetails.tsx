import { useEffect, useState } from "react"
import { useRoute } from "wouter"
import { getCardsById } from "../../service/tcgdexService"

function PokemonDetails() {
  const [match, params] = useRoute("/pokemon/:id")
  const [card, setCard] = useState(null)

  useEffect(() => {
    const fetchCard = async () => {
      if (params?.id) {
        try {
          const result = await getCardsById(params.id);
          setCard(result);
        } catch (error) {
          console.log('Failed to load card details', error);
        }
      }
    };

    fetchCard();
  }, [params?.id]);

  return (
    <>
      <h2>{card.name} Details</h2>
    </>
  )
}

export default PokemonDetails