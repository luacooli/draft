import { useRoute, useLocation } from "wouter";
import { useQuery } from "@apollo/client";
import { GET_CARD_BY_ID } from "../../graphql/queries";
import "./PokemonDetails.scss";
import Loading from "../../components/Loading/Loading";

function PokemonDetails() {
  const [, navigate] = useLocation();
  const [, params] = useRoute("/pokemon/:id");
  const { loading, error, data } = useQuery(GET_CARD_BY_ID, {
    variables: { id: params?.id },
  });

  const handleBack = () => {
    navigate("/pokemon");
  };

  if (loading) return <Loading />;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="header">
        <button className="header__back-arrow" onClick={handleBack}>
          {"<-"}
        </button>
        <h2>{data.card.name} Details</h2>
        <span>HP {data.card.hp}</span>
      </div>
      <div className="card-detail__container">
        <img src={`${data.card.image}/low.png`} alt="" />
        <div>
          <p className="ids__container">
            <span>
              <b>Id: </b>
              {data.card.id}
            </span>
            <span>
              <b>Local id:</b> {data.card.localId}
            </span>
          </p>
          <p>
            <b>Rarity:</b> {data.card.rarity}
          </p>
          <p>
            <b>Level:</b> {data.card.level}
          </p>
          <p>
            <b>Stage:</b> {data.card.stage}
          </p>
          <p>
            <b>Description:</b> {data.card.description}
          </p>
          <p>
            <b>Evolve From:</b> {data.card.evolveFrom}
          </p>
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
