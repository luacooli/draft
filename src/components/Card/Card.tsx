import { useLocation } from "wouter";

interface CardProps {
  card: {
    id: string;
    name: string;
    image?: string;
  };
}

function Card({ card }: CardProps) {
  const [, navigate] = useLocation();

  const handleCardDetail = async (cardId: string) => {
    navigate(`/pokemon/${cardId}`);
  };

  return (
    <>
      <div className="card" onClick={() => handleCardDetail(card.id)}>
        <div>
          <img src={`${card.image}/low.png`} alt={card.name} />
        </div>
        <h4>{card.name}</h4>
        <p>{card.id}</p>
      </div>
    </>
  );
}

export default Card;
