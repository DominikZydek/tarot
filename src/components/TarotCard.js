
function TarotCard({ card, isMeaningVisible, isReversed }) {

  TarotCard.defaultProps = {
    isMeaningVisible: true,
    isReversed: false,
  };

  return (
    <div className="flex flex-col justify-center items-center mb-5">
        <img className={`mb-2 ${isReversed ? 'rotate-180' : ''}`} src={card.url} alt={card.name} />
        <h3 className="text-xl">{card.name}</h3>
        {isReversed && <p className="text-lg">Reversed</p>}
        {isMeaningVisible && <p className="text-lg">{card.meaning}</p>}
    </div>
  );
}

export default TarotCard;