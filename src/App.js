import { useState, useEffect } from "react";

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const response = await fetch("http://localhost:3001/cards");
      const data = await response.json();
      setCards(data);
    }
    fetchCards();
  }, []);

  return (
    <div className="App">
      <h1 className="text-9xl">Hello, world</h1>
      <div>
        {cards.map(card => (
          <div key={card.id}>
            <h2>{card.name}</h2>
            <img src={card.url} alt={card.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
