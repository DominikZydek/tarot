
function TarotCard({ card }) {
  return (
    <div className="flex flex-col justify-center items-center mb-5">
        <img className="mb-2" src={card.url} alt={card.name} />
        <h3 className="text-xl">{card.name}</h3>
        <p className="text-lg">{card.meaning}</p>
    </div>
  );
}

export default TarotCard;