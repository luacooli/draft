import { useLocation } from 'wouter'

function Card(card: any) {
  const [, navigate] = useLocation()

  const handleCardDetail = async (cardId: string) => {
    navigate(`/pokemon/${cardId}`)
  }

  return (
    <>
      <div className="card" onClick={() => handleCardDetail(card.id)}>
        {/* <div>
          <img src={card.image} alt={card.name} />
        </div> */}
          <h4>{card.name}</h4>
          <p>{card.id}</p>
      </div>
    </>
  )
}

export default Card